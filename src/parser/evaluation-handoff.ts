import { NodeData, Parsed } from "../types";
import { finalDimensions, resolveAncestorLevelId, resolveItemPlanTransform, resolveWallOpeningTransform } from "../geometry/transform";
import { resolveShelfData } from "../geometry/shelf";
import { zonePoints } from "../geometry/zone";
import { buildExperimentalWalls, Wall as GeometryWall } from "../geometry/walls";
import { buildSlabPlanGeometry } from "../geometry/slab";
import { stairCorners } from "../geometry/stairs";

type Point = [number, number];
const point = (value: unknown): Point | null => Array.isArray(value) && value.length >= 2 && value.slice(0, 2).every(Number.isFinite) ? [value[0], value[1]] : null;
const polygonArea = (points: Point[]) => Math.abs(points.reduce((sum, current, index) => { const next = points[(index + 1) % points.length]; return sum + current[0] * next[1] - current[1] * next[0]; }, 0) / 2);
const levelIdOf = (node: NodeData, nodes: Record<string, NodeData>) => resolveAncestorLevelId(node.id, nodes).levelId ?? null;
const equipmentCategories = new Set(["climate-appliances", "kitchen-appliances", "laundry-appliances"]);
const base = (node: NodeData, nodes: Record<string, NodeData>) => ({ id: node.id, rawPascalId: node.id, name: node.name ?? null, parentId: node.parentId ?? null, levelId: levelIdOf(node, nodes), visible: node.visible !== false });

/**
 * Stable, additive handoff projection for future evaluation code.
 * It deliberately preserves Pascal identifiers and never mutates Parsed.nodes.
 */
export function buildEvaluationHandoff(parsed: Parsed) {
  const { nodes } = parsed, all = Object.values(nodes), ofType = (type: string) => all.filter((node) => node.type === type);
  const levels = ofType("level").map((node) => ({ ...base(node, nodes), ordinal: Number.isFinite(node.level) ? node.level : null }));
  const zones = ofType("zone").map((node) => {
    const outline = zonePoints(node).map((item) => [item.x, item.z] as Point);
    return { ...base(node, nodes), color: node.color ?? null, outline, areaSquareMeters: outline.length >= 3 ? polygonArea(outline) : null };
  });
  const slabs = ofType("slab").map((node) => {
    const geometry = buildSlabPlanGeometry(node);
    return {
      ...base(node, nodes),
      outline: geometry?.outer.map((point) => [point.x, point.z] as Point) ?? [],
      holes: geometry?.holes.map((ring) => ring.map((point) => [point.x, point.z] as Point)) ?? [],
      areaSquareMeters: geometry?.netArea ?? null,
      autoFromWalls: node.autoFromWalls === true,
    };
  });
  const wallNodes = ofType("wall"), footprintValidationById = new Map<string, { valid: boolean; codes: string[]; areaSquareMeters: number; footprint: Point[] }>();
  const validWallNodes = wallNodes.filter((node) => point(node.start) && point(node.end));
  const wallLevelIds = [...new Set(validWallNodes.map((node) => levelIdOf(node, nodes)))];
  for (const levelId of wallLevelIds) {
    const group = validWallNodes.filter((node) => levelIdOf(node, nodes) === levelId) as GeometryWall[];
    try {
      buildExperimentalWalls(group).forEach((item) => footprintValidationById.set(item.wallId, { valid: item.validation.valid, codes: item.validation.codes, areaSquareMeters: Math.abs(item.validation.area), footprint: item.footprint.map((point) => [point.x, point.y]) }));
    } catch {
      group.forEach((node) => footprintValidationById.set(node.id, { valid: false, codes: ["wall_footprint_evaluation_failed"], areaSquareMeters: 0, footprint: [] }));
    }
  }
  const walls = wallNodes.map((node) => ({ ...base(node, nodes), start: point(node.start), end: point(node.end), thicknessMeters: Number.isFinite(node.thickness) && node.thickness > 0 ? node.thickness : .1, thicknessSource: Number.isFinite(node.thickness) && node.thickness > 0 ? "explicit" : "pascal-default", heightMeters: Number.isFinite(node.height) ? node.height : null, curveOffsetMeters: Number.isFinite(node.curveOffset) ? node.curveOffset : 0, frontSide: node.frontSide ?? null, backSide: node.backSide ?? null, footprintValidation: footprintValidationById.get(node.id) ?? { valid: false, codes: ["wall_invalid_centerline"], areaSquareMeters: 0, footprint: [] } }));
  const opening = (node: NodeData) => { const resolved = resolveWallOpeningTransform(node, nodes); return { ...base(node, nodes), hostWallId: node.wallId ?? node.parentId ?? null, rawWallLocalPosition: Array.isArray(node.position) ? node.position : null, resolvedWorldPosition: resolved ? [resolved.x, resolved.z] : null, resolvedTangentRadians: resolved?.rotationY ?? null, widthMeters: Number.isFinite(node.width) ? node.width : null, heightMeters: Number.isFinite(node.height) ? node.height : null, side: node.side ?? null, openingKind: node.openingKind ?? null, openingShape: node.openingShape ?? null, frameThicknessMeters: Number.isFinite(node.frameThickness) ? node.frameThickness : null, frameDepthMeters: Number.isFinite(node.frameDepth) ? node.frameDepth : null }; };
  const doors = ofType("door").map((node) => ({ ...opening(node), doorType: node.doorType ?? "hinged", hingesSide: node.hingesSide ?? null, swingDirection: node.swingDirection ?? null, swingAngleRadians: Number.isFinite(node.swingAngle) ? node.swingAngle : null, slideDirection: node.slideDirection ?? null, trackStyle: node.trackStyle ?? null, leafCount: Number.isFinite(node.leafCount) ? node.leafCount : null, garagePanelCount: Number.isFinite(node.garagePanelCount) ? node.garagePanelCount : null }));
  const windows = ofType("window").map((node) => ({ ...opening(node), windowType: node.windowType ?? null, hingesSide: node.hingesSide ?? null, awningDirection: node.awningDirection ?? null, casementStyle: node.casementStyle ?? null, sill: node.sill ?? null, sillDepthMeters: Number.isFinite(node.sillDepth) ? node.sillDepth : null }));
  const itemProjection = (node: NodeData) => { const dimensions = finalDimensions(node), transform = resolveItemPlanTransform(node.id, nodes), category = node.asset?.category ?? null; return { ...base(node, nodes), assetId: node.asset?.id ?? null, category, functionTags: node.asset?.functionTags ?? [], dimensionsMeters: dimensions ? [dimensions.width, dimensions.height, dimensions.depth] : null, rawPosition: Array.isArray(node.position) ? node.position : null, rawRotation: Array.isArray(node.rotation) ? node.rotation : null, resolvedWorldPosition: transform.status === "ok" ? [transform.x, transform.z] : null, resolvedRotationRadians: transform.status === "ok" ? transform.rotationY : null, floorPlanUrl: node.asset?.floorPlanUrl ?? null, transformStatus: transform.status, transformError: transform.error ?? null }; };
  const items = ofType("item"), columns = items.filter((node) => node.asset?.category === "columns").map(itemProjection), equipment = items.filter((node) => equipmentCategories.has(node.asset?.category)).map(itemProjection), furniture = items.filter((node) => node.asset?.category !== "columns" && !equipmentCategories.has(node.asset?.category)).map(itemProjection);
  const shelves = ofType("shelf").map((node) => { const shelf = resolveShelfData(node); return { ...base(node, nodes), style: shelf.style, dimensionsMeters: [shelf.width, shelf.height, shelf.depth], rows: shelf.rows, columns: shelf.columns, childItemIds: node.children ?? [] }; });
  const stairs = ofType("stair").map((node) => ({ ...base(node, nodes), stairType: node.stairType ?? "straight", fromLevelId: node.fromLevelId ?? null, toLevelId: node.toLevelId ?? null, widthMeters: Number.isFinite(node.width) ? node.width : null, totalRiseMeters: Number.isFinite(node.totalRise) ? node.totalRise : null, stepCount: Number.isFinite(node.stepCount) ? node.stepCount : null, innerRadiusMeters: Number.isFinite(node.innerRadius) ? node.innerRadius : null, sweepAngleRadians: Number.isFinite(node.sweepAngle) ? node.sweepAngle : null, footprint: stairCorners(node, nodes).map((corner) => [corner.x, corner.z] as Point) }));
  const shafts = ofType("shaft").map((node) => ({ ...base(node, nodes), outline: Array.isArray(node.polygon) ? node.polygon.map(point).filter((item): item is Point => Boolean(item)) : [], heightMeters: Number.isFinite(node.height) ? node.height : null }));
  const wallConnections = walls.flatMap((wall, index) => walls.slice(index + 1).flatMap((other) => ["start", "end"].flatMap((wallEnd) => ["start", "end"].flatMap((otherEnd) => { const a = wall[wallEnd as "start" | "end"], b = other[otherEnd as "start" | "end"]; return a && b && Math.hypot(a[0] - b[0], a[1] - b[1]) <= 1e-6 ? [{ wallId: wall.id, wallEnd, connectedWallId: other.id, connectedWallEnd: otherEnd }] : []; }))));
  const classifiedIds = new Set([...walls, ...zones, ...slabs, ...doors, ...windows, ...furniture, ...equipment, ...columns, ...shelves, ...stairs, ...shafts, ...levels].map((node) => node.id));
  return { schemaVersion: "1.0", source: { format: "Pascal JSON", rootNodeIds: Array.isArray((parsed.raw as any)?.rootNodeIds) ? (parsed.raw as any).rootNodeIds : [] }, units: { length: "meter", area: "square-meter", angles: "radian", planCoordinates: "Pascal Level plane [x,z]", svgProjection: "[x,z] -> [x,y] identity; default viewer rotation is clockwise 90 degrees" }, levels, zones, slabs, spaces: zones.map((zone) => ({ ...zone, sourceZoneId: zone.id, source: "derived-from-zone" })), walls, doors, windows, furniture, equipment, columns, shelves, stairs, shafts, relationships: { parentChild: all.filter((node) => node.parentId).map((node) => ({ parentId: node.parentId!, childId: node.id })), levelMembership: all.map((node) => ({ nodeId: node.id, levelId: levelIdOf(node, nodes) })).filter((item) => item.levelId), hostedOpenings: [...doors, ...windows].filter((node) => node.hostWallId).map((node) => ({ openingId: node.id, wallId: node.hostWallId! })), wallConnections }, unclassifiedNodes: all.filter((node) => !classifiedIds.has(node.id)).map((node) => ({ id: node.id, rawPascalId: node.id, type: node.type })), diagnostics: parsed.diagnostics };
}

export type EvaluationHandoff = ReturnType<typeof buildEvaluationHandoff>;
