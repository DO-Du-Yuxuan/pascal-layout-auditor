import { Diagnostic, NodeData } from "../types";
import { getWallArcData, getWallCurveFrameAt, isCurvedWall, resolveWallThickness, Wall } from "./walls";
import { resolveAncestorLevelId } from "./transform";

export type DoorPoint = { x: number; z: number };
export type DoorStroke = { kind: "line" | "path"; from?: DoorPoint; to?: DoorPoint; d?: string; dashed?: boolean; width?: number };
export type DoorPolygon = { points: DoorPoint[]; dashed?: boolean; fill?: string };
export type DoorPlanGeometry = {
  doorId: string; wallId: string; ancestorLevelId?: string; doorType: string; openingKind: string;
  center: DoorPoint; tangent: DoorPoint; normal: DoorPoint; width: number; thickness: number;
  opening: DoorPoint[]; openingPath: string; frame: DoorStroke[]; leaves: DoorStroke[]; leafPolygons: DoorPolygon[];
  symbols: DoorStroke[]; symbolPolygons: DoorPolygon[]; defaultFields: string[]; symbolSource: string;
};

const TYPES = new Set(["hinged", "double", "french", "folding", "pocket", "barn", "sliding", "garage-sectional", "garage-rollup", "garage-tiltup"]);
const finite = (value: unknown) => Number.isFinite(value) ? Number(value) : null;
const defaults: Record<string, unknown> = { doorType: "hinged", openingKind: "door", width: .9, height: 2.1, hingesSide: "left", swingDirection: "inward", slideDirection: "left", trackStyle: "none", leafCount: 1, garagePanelCount: 4, frameThickness: .05, frameDepth: .07, threshold: true, operationState: 0, swingAngle: 0 };
const add = (a: DoorPoint, b: DoorPoint, k = 1): DoorPoint => ({ x: a.x + b.x * k, z: a.z + b.z * k });
const scale = (a: DoorPoint, k: number): DoorPoint => ({ x: a.x * k, z: a.z * k });
const rotate = (a: DoorPoint, angle: number): DoorPoint => ({ x: a.x * Math.cos(angle) - a.z * Math.sin(angle), z: a.x * Math.sin(angle) + a.z * Math.cos(angle) });
const polygonPath = (points: DoorPoint[]) => `M ${points.map((point) => `${point.x} ${point.z}`).join(" L ")} Z`;
const rect = (center: DoorPoint, tangent: DoorPoint, normal: DoorPoint, halfLength: number, halfDepth: number): DoorPoint[] => [add(add(center, tangent, -halfLength), normal, halfDepth), add(add(center, tangent, halfLength), normal, halfDepth), add(add(center, tangent, halfLength), normal, -halfDepth), add(add(center, tangent, -halfLength), normal, -halfDepth)];

export function resolveDoorPlanGeometry(node: NodeData, nodes: Record<string, NodeData>): DoorPlanGeometry | null {
  const wallId = node.wallId ?? node.parentId, wall = nodes[wallId ?? ""] as Wall | undefined;
  if (!wall || wall.type !== "wall" || !Array.isArray(wall.start) || !Array.isArray(wall.end)) return null;
  const width = finite(node.width ?? defaults.width), distance = Array.isArray(node.position) ? finite(node.position[0]) : 0;
  if (!(width && width > 0 && distance !== null && distance >= 0)) return null;
  const start = { x: wall.start[0], z: wall.start[1] }, end = { x: wall.end[0], z: wall.end[1] };
  const chordLength = Math.hypot(end.x - start.x, end.z - start.z);
  if (chordLength < 1e-9) return null;
  const arc = getWallArcData(wall), curveLength = arc ? Math.abs(arc.radius * arc.delta) : chordLength;
  if (distance + width / 2 > curveLength + 1e-7) return null;
  if (arc && width / arc.radius > Math.abs(arc.delta) + 1e-7) return null;
  const frame = getWallCurveFrameAt(wall, distance / curveLength);
  const center = { x: frame.point.x, z: frame.point.y }, tangent = { x: frame.tangent.x, z: frame.tangent.y }, normal = { x: frame.normal.x, z: frame.normal.y };
  const thickness = resolveWallThickness(wall).resolvedPhysicalThickness, halfWidth = width / 2, halfThickness = thickness / 2;
  const opening = rect(center, tangent, normal, halfWidth, halfThickness);
  const type = String(node.doorType ?? defaults.doorType), openingKind = String(node.openingKind ?? defaults.openingKind);
  const defaultFields = Object.keys(defaults).filter((key) => node[key] === undefined);
  const result: DoorPlanGeometry = { doorId: node.id, wallId: wall.id, ancestorLevelId: resolveAncestorLevelId(node.id, nodes).levelId, doorType: type, openingKind, center, tangent, normal, width, thickness, opening, openingPath: polygonPath(opening), frame: [], leaves: [], leafPolygons: [], symbols: [], symbolPolygons: [], defaultFields, symbolSource: "pascalorg/editor@22c9472 packages/nodes/src/door/floorplan.ts" };
  if (openingKind === "opening" || !TYPES.has(type)) return result;
  const flipped = Array.isArray(node.rotation) && finite(node.rotation[1]) !== null && (() => { const a = ((Number(node.rotation[1]) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); return a > Math.PI / 2 && a < Math.PI * 3 / 2; })();
  let hinges = String(node.hingesSide ?? defaults.hingesSide), swing = String(node.swingDirection ?? defaults.swingDirection);
  if (flipped) { hinges = hinges === "left" ? "right" : "left"; swing = swing === "inward" ? "outward" : "inward"; }
  const swingSign = swing === "inward" ? 1 : -1;
  const drawSwing = (hinge: DoorPoint, closed: DoorPoint, sign: number) => {
    const radius = Math.hypot(closed.x, closed.z), open = add(hinge, rotate(closed, sign * Math.PI / 2));
    const closedTip = add(hinge, closed), flag = sign >= 0 ? 1 : 0;
    result.leaves.push({ kind: "line", from: hinge, to: open, width: .028 });
    result.symbols.push({ kind: "path", d: `M ${closedTip.x} ${closedTip.z} A ${radius} ${radius} 0 0 ${flag} ${open.x} ${open.z}`, dashed: true, width: .018 });
  };
  const sideSign = node.side === "back" ? -1 : 1;
  if (type === "hinged") {
    const h = add(center, tangent, hinges === "left" ? -halfWidth : halfWidth);
    drawSwing(h, scale(tangent, hinges === "left" ? width : -width), swingSign * (hinges === "left" ? 1 : -1));
  } else if (type === "double" || type === "french") {
    const left = add(center, tangent, -halfWidth), right = add(center, tangent, halfWidth);
    drawSwing(left, scale(tangent, halfWidth), swingSign);
    drawSwing(right, scale(tangent, -halfWidth), -swingSign);
  } else if (type === "folding") {
    const count = Number(node.leafCount) === 2 ? 2 : 4, span = width * .8 / count, peak = span * .7 * swingSign;
    const start = add(add(center, tangent, hinges === "left" ? -halfWidth : halfWidth), normal, halfThickness * swingSign);
    const direction = hinges === "left" ? 1 : -1;
    const points = Array.from({ length: count + 1 }, (_, i) => add(add(start, tangent, direction * i * span), normal, i % 2 ? peak : 0));
    result.symbols.push({ kind: "path", d: `M ${points.map((point) => `${point.x} ${point.z}`).join(" L ")}`, width: .025 });
  } else if (type === "sliding") {
    const depth = Math.min(thickness * .22, .03), len = width * .275;
    result.leafPolygons.push({ points: rect(add(center, tangent, -halfWidth + len), tangent, normal, len, depth) }, { points: rect(add(center, tangent, halfWidth - len), tangent, normal, len, depth) });
    result.symbols.push(slideArrow(center, tangent, normal, halfWidth, String(node.slideDirection) === "right" ? 1 : -1, halfThickness));
  } else if (type === "pocket") {
    const sign = String(node.slideDirection) === "right" ? 1 : -1, depth = Math.min(thickness * .2, .025);
    result.leafPolygons.push({ points: rect(add(center, tangent, sign * width * .4), tangent, normal, halfWidth, depth), dashed: true });
    result.symbols.push({ kind: "line", from: add(center, tangent, -sign * halfWidth), to: add(center, tangent, sign * width * .9), dashed: true, width: .018 });
  } else if (type === "barn") {
    const sign = String(node.slideDirection) === "right" ? 1 : -1, depth = Math.min(thickness * .3, .04), offset = sideSign * (halfThickness + Math.max(depth * 1.6, halfThickness * .6) + depth);
    result.leafPolygons.push({ points: rect(add(add(center, normal, offset), tangent, sign * width), tangent, normal, halfWidth, depth), fill: "rgba(100,116,139,.18)" }, { points: rect(add(center, normal, offset), tangent, normal, halfWidth, depth), dashed: true });
    result.symbols.push({ kind: "line", from: add(add(center, normal, offset + depth * 2), tangent, -halfWidth), to: add(add(center, normal, offset + depth * 2), tangent, halfWidth), width: .022 });
  } else if (type === "garage-sectional") {
    const count = Math.max(1, Math.min(12, Math.round(Number(node.garagePanelCount) || 4))), inside = -swingSign * sideSign;
    for (let i = 1; i < count; i++) { const p = add(add(center, tangent, -halfWidth + width * i / count), normal, inside * (halfThickness + .025)); result.symbols.push({ kind: "line", from: add(p, normal, -.03), to: add(p, normal, .03), width: .015 }); }
    result.symbols.push({ kind: "line", from: add(add(center, tangent, -halfWidth), normal, inside * halfThickness), to: add(add(center, tangent, -halfWidth), normal, inside * (halfThickness + Math.max(width * .55, .6))), dashed: true });
  } else if (type === "garage-rollup") {
    const inside = -swingSign * sideSign, c = add(center, normal, inside * (halfThickness + .12));
    result.leafPolygons.push({ points: circle(c, Math.min(Math.max(width * .12, .08), .16)), dashed: true });
    result.symbols.push({ kind: "line", from: add(center, tangent, -halfWidth), to: add(center, tangent, halfWidth), width: .018 });
  } else if (type === "garage-tiltup") {
    const inside = -swingSign * sideSign, to = add(center, normal, inside * (halfThickness + Math.max(width * .5, .7)));
    result.symbols.push({ kind: "path", d: `M ${center.x} ${center.z} Q ${add(add(center, normal, inside * (halfThickness + width * .25)), tangent, width * .25).x} ${add(add(center, normal, inside * (halfThickness + width * .25)), tangent, width * .25).z} ${to.x} ${to.z}`, dashed: true, width: .018 });
    result.leafPolygons.push({ points: rect(to, tangent, normal, halfWidth, Math.min(thickness * .22, .03)), dashed: true });
  }
  if (openingKind === "door" && type !== "pocket") {
    const frameDepth = Math.min(Math.max(Number(node.frameDepth ?? defaults.frameDepth), 0), thickness) / 2;
    for (const sign of [-1, 1]) { const c = add(center, tangent, sign * halfWidth); result.frame.push({ kind: "line", from: add(c, normal, -frameDepth), to: add(c, normal, frameDepth), width: .028 }); }
  }
  return result;
}

function slideArrow(center: DoorPoint, tangent: DoorPoint, normal: DoorPoint, halfWidth: number, sign: number, offset: number): DoorStroke { const start = add(add(center, normal, -(offset + halfWidth * .22)), tangent, -halfWidth * .5 * sign), end = add(start, tangent, halfWidth * sign); return { kind: "line", from: start, to: end, width: .02 }; }
function circle(center: DoorPoint, radius: number) { return Array.from({ length: 17 }, (_, index) => ({ x: center.x + Math.cos(index / 16 * Math.PI * 2) * radius, z: center.z + Math.sin(index / 16 * Math.PI * 2) * radius })); }
export function doorDiagnostics(node: NodeData, nodes: Record<string, NodeData>): Diagnostic[] { const geometry = resolveDoorPlanGeometry(node, nodes), ancestry = resolveAncestorLevelId(node.id, nodes), levelId = ancestry.levelId, wallId = node.wallId ?? node.parentId, host = nodes[wallId ?? ""], doorType = String(node.doorType ?? "hinged"), shared = { nodeId: node.id, levelId, wallId, doorType, sourcePath: `nodes.${node.id}`, raw: { position: node.position, width: node.width }, algorithmSource: "pascalorg/editor@22c9472 door/floorplan.ts", supportMatrixStatus: geometry ? "supported-pascal-equivalent" : "invalid-data" }; if (ancestry.error === "parent_cycle") return [{ severity: "error", code: "door_parent_cycle", message: "Door parentId 存在循环", ...shared }]; if (node.width !== undefined && (!finite(node.width) || Number(node.width) <= 0)) return [{ severity: "error", code: "invalid_door_dimensions", message: "Door width 必须为正有限数", ...shared }]; if (node.position !== undefined && (!Array.isArray(node.position) || !finite(node.position[0]))) return [{ severity: "error", code: "invalid_door_position", message: "Door.position[0] 必须是沿 Wall 的有限距离", ...shared }]; if (!host) return [{ severity: "error", code: "missing_door_wall", message: "Door 缺少可解析的宿主 Wall", ...shared }]; if (host.type !== "wall") return [{ severity: "error", code: "invalid_door_wall_reference", message: "Door wallId/parentId 未指向 Wall", ...shared }]; if (!geometry) return [{ severity: "error", code: isCurvedWall(host as Wall) ? "invalid_curved_wall_opening" : "invalid_opening_geometry", message: "Door 不能在当前 Wall 位置形成有效门洞", ...shared }]; if (!TYPES.has(doorType)) return [{ severity: "warning", code: "unsupported_door_type", message: `未支持的 Door 类型：${doorType}`, ...shared }]; return []; }
