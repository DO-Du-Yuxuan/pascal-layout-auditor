import polygonClipping from "polygon-clipping";
import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import { polygonArea, rectangularFootprint, type Ring } from "./envelope";
import { G1_GEOMETRY_TOLERANCES as T } from "./tolerances";

type Item = EvaluationHandoff["furniture"][number] | EvaluationHandoff["equipment"][number];
type VerticalRange = [number, number];

export type WallPenetration = {
  item: Item;
  wall: EvaluationHandoff["walls"][number];
  overlapAreaSquareMeters: number;
  penetrationDepthMeters: number | null;
  verticalOverlapMeters: number;
};

export type ItemCollision = {
  primary: Item;
  related: Item;
  overlapAreaSquareMeters: number;
  verticalOverlapMeters: number;
  overlapVolumeCubicMeters: number;
};

export type PlacementCollisionAnalysis = {
  wallPenetrations: WallPenetration[];
  itemCollisions: ItemCollision[];
  unresolvedPlanarOverlaps: Array<{ itemIds: string[]; reason: string }>;
};

const closed = (ring: Ring) => ring.length > 2 ? [...ring, ring[0]!] : ring;
const multiArea = (multi: Ring[][]) => multi.reduce((sum, polygon) => sum + polygonArea(polygon[0] ?? []), 0);
const intersectionArea = (a: Ring, b: Ring) => {
  try { return multiArea(polygonClipping.intersection([closed(a)] as any, [closed(b)] as any) as Ring[][]); }
  catch { return null; }
};
const verticalRange = (item: Item): VerticalRange | null => {
  const explicit = item.resolvedVerticalRangeMeters;
  if (Array.isArray(explicit) && explicit.length >= 2 && explicit.every(Number.isFinite) && explicit[1] > explicit[0]) return [explicit[0], explicit[1]];
  const y = item.rawPosition?.[1], height = item.dimensionsMeters?.[1];
  return Number.isFinite(y) && Number.isFinite(height) && height! > 0 ? [y!, y! + height!] : null;
};
const verticalOverlap = (a: VerticalRange, b: VerticalRange) => Math.max(0, Math.min(a[1], b[1]) - Math.max(a[0], b[0]));
const ancestorRelated = (a: Item, b: Item) => a.parentId === b.id || b.parentId === a.id;
const categoryMatches = (item: Item, pattern: RegExp) => pattern.test(`${item.category ?? ""} ${item.name ?? ""} ${(item.functionTags ?? []).join(" ")}`);
const needsMeshInsteadOfBox = (a: Item, b: Item) => {
  const chair = /chair|椅/i, workSurface = /table|desk|counter|bar|桌|台/i, integratedAppliance = /stove|cooktop|oven|灶|炉/i, cabinet = /cabinet|counter|kitchen|橱柜|台面/i;
  return categoryMatches(a, chair) && categoryMatches(b, workSurface) || categoryMatches(b, chair) && categoryMatches(a, workSurface)
    || categoryMatches(a, integratedAppliance) && categoryMatches(b, cabinet) || categoryMatches(b, integratedAppliance) && categoryMatches(a, cabinet);
};

function straightWallPenetrationDepth(itemFootprint: Ring, item: Item, wall: EvaluationHandoff["walls"][number]) {
  if (!wall.start || !wall.end || Math.abs(wall.curveOffsetMeters) > T.lengthMeters || !item.resolvedWorldPosition) return null;
  const dx = wall.end[0] - wall.start[0], dz = wall.end[1] - wall.start[1], length = Math.hypot(dx, dz);
  if (length <= T.lengthMeters) return null;
  const nx = -dz / length, nz = dx / length, signed = ([x, z]: number[]) => (x - wall.start![0]) * nx + (z - wall.start![1]) * nz;
  const centerSide = signed(item.resolvedWorldPosition), projections = itemFootprint.map(signed), half = wall.thicknessMeters / 2;
  return Math.max(0, centerSide >= 0 ? half - Math.min(...projections) : Math.max(...projections) + half);
}

/** Physical-placement checks are 3D: a plan overlap is only a collision when height intervals overlap too. */
export function analyzePhysicalPlacement(handoff: EvaluationHandoff, candidates: Item[]): PlacementCollisionAnalysis {
  const footprints = new Map(candidates.map((item) => [item.id, rectangularFootprint(item)]));
  const ranges = new Map(candidates.map((item) => [item.id, verticalRange(item)]));
  const wallPenetrations: WallPenetration[] = [], itemCollisions: ItemCollision[] = [], unresolvedPlanarOverlaps: PlacementCollisionAnalysis["unresolvedPlanarOverlaps"] = [];

  for (const item of candidates) {
    const footprint = footprints.get(item.id), range = ranges.get(item.id);
    if (!footprint) continue;
    for (const wall of handoff.walls) {
      if (wall.levelId !== item.levelId || !wall.footprintValidation.valid || wall.footprintValidation.footprint.length < 3) continue;
      const area = intersectionArea(footprint, wall.footprintValidation.footprint as Ring);
      if (area === null || area <= T.physicalCollisionAreaSquareMeters) continue;
      if (!range || !Number.isFinite(wall.heightMeters)) {
        unresolvedPlanarOverlaps.push({ itemIds: [item.id, wall.id], reason: !range ? "item_vertical_range_unavailable" : "wall_height_unavailable" });
        continue;
      }
      const heightOverlap = verticalOverlap(range, [0, wall.heightMeters!]);
      if (heightOverlap <= T.physicalCollisionVerticalMeters) continue;
      wallPenetrations.push({ item, wall, overlapAreaSquareMeters: area, penetrationDepthMeters: straightWallPenetrationDepth(footprint, item, wall), verticalOverlapMeters: heightOverlap });
    }
  }

  for (let index = 0; index < candidates.length; index++) for (let otherIndex = index + 1; otherIndex < candidates.length; otherIndex++) {
    const a = candidates[index]!, b = candidates[otherIndex]!;
    if (a.levelId !== b.levelId || ancestorRelated(a, b)) continue;
    const footprintA = footprints.get(a.id), footprintB = footprints.get(b.id);
    if (!footprintA || !footprintB) continue;
    const area = intersectionArea(footprintA, footprintB);
    if (area === null || area <= T.physicalCollisionAreaSquareMeters) continue;
    const rangeA = ranges.get(a.id), rangeB = ranges.get(b.id);
    if (!rangeA || !rangeB) { unresolvedPlanarOverlaps.push({ itemIds: [a.id, b.id], reason: "item_vertical_range_unavailable" }); continue; }
    const heightOverlap = verticalOverlap(rangeA, rangeB);
    if (heightOverlap <= T.physicalCollisionVerticalMeters) continue;
    if (needsMeshInsteadOfBox(a, b)) { unresolvedPlanarOverlaps.push({ itemIds: [a.id, b.id], reason: "mesh_geometry_required_for_nestable_pair" }); continue; }
    const areaA = polygonArea(footprintA), areaB = polygonArea(footprintB), [primary, related] = areaA >= areaB ? [a, b] : [b, a];
    itemCollisions.push({ primary, related, overlapAreaSquareMeters: area, verticalOverlapMeters: heightOverlap, overlapVolumeCubicMeters: area * heightOverlap });
  }
  return { wallPenetrations, itemCollisions, unresolvedPlanarOverlaps };
}
