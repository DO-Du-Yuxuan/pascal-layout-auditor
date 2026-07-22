import polygonClipping from "polygon-clipping";
import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import { rectangularFootprint, polygonArea, type Ring } from "./envelope";
import { buildRoomNavigationAnalysis, type RoomNavigationAnalysis } from "./navigation";
import { G1_GEOMETRY_TOLERANCES as T } from "./tolerances";

type Item = EvaluationHandoff["furniture"][number] | EvaluationHandoff["equipment"][number] | EvaluationHandoff["columns"][number];
export type FurnitureSemantic = "bed" | "wardrobe" | "sofa" | "lounge-chair" | "coffee-table" | "tv-cabinet" | "dining-table" | "dining-chair" | "desk" | "other";
export type FurnitureSemanticItem = {
  item: Item;
  semantic: FurnitureSemantic;
  semanticConfidence: "high" | "medium" | "low";
  semanticReason: string;
  bedType: "single" | "double" | "unknown";
  footprint: Ring | null;
  roomRegionId: string | null;
  roomCoverageRatio: number;
};
export type FurnitureUseZone = {
  useZoneId: string;
  ownerObjectId: string;
  roomRegionId: string | null;
  levelId: string | null;
  kind: "bed-left" | "bed-right" | "seating-front" | "dining-chair-pullout";
  polygon: Ring;
  relatedObjectIds: string[];
  confidence: "high" | "medium" | "low";
  usableForEvaluation: boolean;
  diagnostics: string[];
};
export type FurnitureUseZoneAssessment = {
  zone: FurnitureUseZone;
  insideRoomRatio: number;
  blockedAreaRatio: number;
  clearRatio: number;
  blockerIds: string[];
  usable: boolean;
};
export type FurnitureUseAnalysis = {
  navigation: RoomNavigationAnalysis;
  items: FurnitureSemanticItem[];
  useZones: FurnitureUseZone[];
  assessments: FurnitureUseZoneAssessment[];
  diagnostics: string[];
};

const close = (ring: Ring): Ring => ring.length && (ring[0]![0] !== ring[ring.length - 1]![0] || ring[0]![1] !== ring[ring.length - 1]![1]) ? [...ring, ring[0]!] : ring;
const multiArea = (multi: Ring[][]) => multi.reduce((sum, polygon) => sum + polygonArea(polygon[0] ?? []), 0);
const intersectionArea = (a: Ring, b: Ring[]) => { try { return multiArea(polygonClipping.intersection([close(a)] as any, b as any) as Ring[][]); } catch { return 0; } };
const unionIntersectionArea = (zone: Ring, obstacles: Ring[]) => {
  if (!obstacles.length) return 0;
  try { const [first, ...rest] = obstacles.map((ring) => [close(ring)] as any), union = polygonClipping.union(first, ...rest); return multiArea(polygonClipping.intersection([close(zone)] as any, union as any) as Ring[][]); } catch { return 0; }
};
const textOf = (item: Item) => [item.category, item.name, item.assetName, ...(item.functionTags ?? []), ...(item.assetTags ?? [])].filter(Boolean).join(" ").toLowerCase();
const strongTextOf = (item: Item) => [item.category, ...(item.functionTags ?? []), ...(item.assetTags ?? [])].filter(Boolean).join(" ").toLowerCase();
const semanticPatterns: Array<[FurnitureSemantic, RegExp]> = [
  ["dining-chair", /dining.?chair|餐椅/], ["dining-table", /dining.?table|餐桌/], ["coffee-table", /coffee.?table|茶几/],
  ["tv-cabinet", /tv.?cabinet|media.?console|电视柜/], ["wardrobe", /wardrobe|closet|armoire|衣柜/],
  ["bed", /(^|\W)(double.?beds?|single.?beds?|master.?beds?|beds?)(\W|$)|床/], ["sofa", /sofa|couch|沙发/],
  ["lounge-chair", /armchair|lounge.?chair|扶手椅/], ["desk", /desk|office.?table|书桌/],
];
function classify(item: Item): Omit<FurnitureSemanticItem, "footprint" | "roomRegionId" | "roomCoverageRatio"> {
  const text = textOf(item), strong = strongTextOf(item), match = semanticPatterns.find(([, pattern]) => pattern.test(text)), semantic = match?.[0] ?? "other";
  const semanticStrong = match ? match[1].test(strong) : false, categoryConflict = item.category === "columns" && semantic !== "other";
  const semanticConfidence = categoryConflict ? semanticStrong ? "medium" : "low" : semanticStrong ? "high" : semantic !== "other" ? "medium" : "low";
  const semanticReason = categoryConflict ? `源 category=${item.category} 与 ${semantic} 语义冲突；明确functionTags/tags仍支持该语义` : semanticStrong ? "asset category/functionTags/tags 提供明确语义" : semantic !== "other" ? "仅名称提供语义" : "缺少本轮可用家具语义";
  const bedType = semantic !== "bed" ? "unknown" : /double.?bed|master.?bed|double-beds|双人/.test(text) ? "double" : /single.?bed|single-beds|单人/.test(text) ? "single" : "unknown";
  return { item, semantic, semanticConfidence, semanticReason, bedType };
}
const orientedRectangle = (item: Item, centerLocalX: number, centerLocalZ: number, width: number, depth: number): Ring => {
  const [x, z] = item.resolvedWorldPosition!, rotation = item.resolvedRotationRadians!, c = Math.cos(rotation), s = Math.sin(rotation);
  return [[-width / 2, -depth / 2], [width / 2, -depth / 2], [width / 2, depth / 2], [-width / 2, depth / 2]].map(([dx, dz]) => [x + (centerLocalX + dx) * c + (centerLocalZ + dz) * s, z - (centerLocalX + dx) * s + (centerLocalZ + dz) * c]);
};
export function buildFurnitureUseAnalysis(handoff: EvaluationHandoff): FurnitureUseAnalysis {
  const navigation = buildRoomNavigationAnalysis(handoff), rooms = navigation.graph.roomAnalysis.rooms.filter((room) => room.usableForEvaluation), candidates: Item[] = [...handoff.furniture, ...handoff.equipment, ...handoff.columns];
  const items: FurnitureSemanticItem[] = candidates.map((item) => {
    const footprint = rectangularFootprint(item), classified = classify(item), footprintArea = footprint ? polygonArea(footprint) : 0;
    const matches = footprint ? rooms.filter((room) => room.levelId === item.levelId).map((room) => ({ room, area: room.polygons.reduce((sum, polygon) => sum + intersectionArea(footprint, polygon), 0) })).sort((a, b) => b.area - a.area) : [];
    const best = matches[0], roomCoverageRatio = footprintArea > 0 && best ? best.area / footprintArea : 0;
    return { ...classified, footprint, roomRegionId: roomCoverageRatio >= .5 ? best!.room.roomRegionId : null, roomCoverageRatio };
  });
  const useZones: FurnitureUseZone[] = [];
  const add = (owner: FurnitureSemanticItem, kind: FurnitureUseZone["kind"], polygon: Ring, confidence: FurnitureUseZone["confidence"], usableForEvaluation: boolean, diagnostics: string[], relatedObjectIds: string[] = []) => useZones.push({ useZoneId: `${owner.item.id}:${kind}:${useZones.filter((zone) => zone.ownerObjectId === owner.item.id && zone.kind === kind).length + 1}`, ownerObjectId: owner.item.id, roomRegionId: owner.roomRegionId, levelId: owner.item.levelId, kind, polygon, relatedObjectIds, confidence, usableForEvaluation, diagnostics });
  for (const owner of items) {
    const dimensions = owner.item.dimensionsMeters, transformReady = owner.item.resolvedWorldPosition && Number.isFinite(owner.item.resolvedRotationRadians) && dimensions?.length === 3;
    if (!transformReady || !owner.roomRegionId || owner.semanticConfidence === "low") continue;
    const [width, , depth] = dimensions!;
    if (owner.semantic === "bed") {
      add(owner, "bed-left", orientedRectangle(owner.item, -(width! + T.bedAccessDepthMeters) / 2, 0, T.bedAccessDepthMeters, depth!), "medium", true, []);
      add(owner, "bed-right", orientedRectangle(owner.item, (width! + T.bedAccessDepthMeters) / 2, 0, T.bedAccessDepthMeters, depth!), "medium", true, []);
    } else if (owner.semantic === "sofa" || owner.semantic === "lounge-chair") {
      add(owner, "seating-front", orientedRectangle(owner.item, 0, (depth! + T.seatingAccessDepthMeters) / 2, width!, T.seatingAccessDepthMeters), "medium", true, []);
    } else if (owner.semantic === "dining-chair") {
      add(owner, "dining-chair-pullout", orientedRectangle(owner.item, 0, -(depth! + T.diningChairPulloutDepthMeters) / 2, width!, T.diningChairPulloutDepthMeters), "medium", true, ["chair_pullout_uses_local_negative_z"]);
    }
  }
  const footprintById = new Map(items.filter((item) => item.footprint).map((item) => [item.item.id, item.footprint!]));
  const assessments = useZones.map((zone): FurnitureUseZoneAssessment => {
    const room = rooms.find((candidate) => candidate.roomRegionId === zone.roomRegionId), zoneArea = polygonArea(zone.polygon), insideArea = room ? room.polygons.reduce((sum, polygon) => sum + intersectionArea(zone.polygon, polygon), 0) : 0, excluded = new Set([zone.ownerObjectId, ...zone.relatedObjectIds]);
    const blockers = items.filter((candidate) => candidate.item.levelId === zone.levelId && candidate.footprint && !excluded.has(candidate.item.id)).filter((candidate) => intersectionArea(zone.polygon, [candidate.footprint!]) > T.overlapAreaSquareMeters), blockedArea = unionIntersectionArea(zone.polygon, blockers.map((candidate) => candidate.footprint!)), insideRoomRatio = zoneArea > 0 ? Math.min(1, insideArea / zoneArea) : 0, blockedAreaRatio = zoneArea > 0 ? Math.min(1, blockedArea / zoneArea) : 1, clearRatio = Math.max(0, Math.min(insideRoomRatio, 1 - blockedAreaRatio));
    return { zone, insideRoomRatio, blockedAreaRatio, clearRatio, blockerIds: blockers.map((candidate) => candidate.item.id), usable: zone.usableForEvaluation && clearRatio >= T.furnitureUseZoneClearRatio };
  });
  const diagnostics = items.filter((item) => item.semantic !== "other" && (item.semanticConfidence === "low" || item.semanticReason.includes("语义冲突"))).map((item) => `${item.item.id}: ${item.semanticReason}`);
  return { navigation, items, useZones, assessments, diagnostics };
}
