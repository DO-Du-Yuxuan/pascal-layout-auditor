import { resolveAncestorLevelId, resolveItemPlanTransform, resolveWallOpeningTransform, type ViewBox } from "../geometry/transform";
import { finalDimensions } from "../geometry/transform";
import { shelfCorners } from "../geometry/shelf";
import { stairCorners } from "../geometry/stairs";
import { zonePoints } from "../geometry/zone";
import type { NodeData } from "../types";
import type { EvaluationFocusTarget } from "./presentation";

export type EvaluationHighlight = { ruleId: string; primaryId: string; relatedIds: string[]; targetIndex: number };
export type EvaluationFocusResolution = { renderable: boolean; levelId: string | null; viewBox: ViewBox | null; reason?: string };

const finitePoint = (value: unknown): value is number[] => Array.isArray(value) && value.length >= 2 && value.slice(0, 2).every(Number.isFinite);
const viewAround = (points: Array<{ x: number; z: number }>, minimumSpan = 2.4, padding = .55): ViewBox | null => {
  if (!points.length || points.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.z))) return null;
  const xs = points.map((point) => point.x), zs = points.map((point) => point.z), rawWidth = Math.max(...xs) - Math.min(...xs), rawHeight = Math.max(...zs) - Math.min(...zs), width = Math.max(minimumSpan, rawWidth + padding * 2), height = Math.max(minimumSpan, rawHeight + padding * 2), cx = (Math.min(...xs) + Math.max(...xs)) / 2, cz = (Math.min(...zs) + Math.max(...zs)) / 2;
  return { minX: cx - width / 2, minZ: cz - height / 2, width, height };
};

export function resolveEvaluationFocus(nodes: Record<string, NodeData>, objectId: string): EvaluationFocusResolution {
  const node = nodes[objectId];
  if (!node) return { renderable: false, levelId: null, viewBox: null, reason: "评价引用的对象已不存在。" };
  const levelId = resolveAncestorLevelId(node.id, nodes).levelId ?? null;
  if (!levelId) return { renderable: false, levelId: null, viewBox: null, reason: "无法确定对象所属楼层。" };
  let points: Array<{ x: number; z: number }> = [];
  if (node.type === "wall" && finitePoint(node.start) && finitePoint(node.end)) points = [{ x: node.start[0], z: node.start[1] }, { x: node.end[0], z: node.end[1] }];
  else if (node.type === "door" || node.type === "window") {
    const transform = resolveWallOpeningTransform(node, nodes), width = Number(node.width);
    if (transform && Number.isFinite(width) && width > 0) { const dx = Math.cos(transform.rotationY) * width / 2, dz = Math.sin(transform.rotationY) * width / 2; points = [{ x: transform.x - dx, z: transform.z - dz }, { x: transform.x + dx, z: transform.z + dz }]; }
  } else if (node.type === "stair") points = stairCorners(node, nodes);
  else if (node.type === "shelf") points = shelfCorners(node, nodes);
  else if (node.type === "zone") points = zonePoints(node);
  else if (node.type === "item") {
    const transform = resolveItemPlanTransform(node.id, nodes), dimensions = finalDimensions(node);
    if (transform.status === "ok" && dimensions) points = [{ x: transform.x - dimensions.width / 2, z: transform.z - dimensions.depth / 2 }, { x: transform.x + dimensions.width / 2, z: transform.z + dimensions.depth / 2 }];
  }
  const viewBox = viewAround(points);
  return viewBox ? { renderable: true, levelId, viewBox } : { renderable: false, levelId, viewBox: null, reason: "该对象暂时无法在画布中显示。" };
}

export function evaluationHighlightFor(ruleId: string, target: EvaluationFocusTarget, targetIndex: number): EvaluationHighlight {
  return { ruleId, primaryId: target.primaryId, relatedIds: [...target.relatedIds], targetIndex };
}

export function evaluationHighlightRole(highlight: EvaluationHighlight | null, objectId: string): "primary" | "related" | null {
  if (!highlight) return null;
  if (highlight.primaryId === objectId) return "primary";
  return highlight.relatedIds.includes(objectId) ? "related" : null;
}

