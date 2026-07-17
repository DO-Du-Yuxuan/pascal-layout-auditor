import { describe, expect, it } from "vitest";
import { resolveDoorPlanGeometry } from "./door";

const wall = { id: "wall", type: "wall", parentId: "level", start: [0, 0], end: [10, 0], thickness: .2 };
const door = (extra: any = {}) => ({ id: "door", type: "door", parentId: "wall", wallId: "wall", position: [5, 0, 0], width: 2, doorType: "hinged", ...extra });
const nodes = (node: any, host: any = wall) => ({ level: { id: "level", type: "level" }, wall: host, [node.id]: node });
describe("Pascal Door plan geometry", () => {
  it("resolves a straight-wall opening from wall-local distance, never Level coordinates", () => {
    const geometry = resolveDoorPlanGeometry(door({ position: [3, 0, 99] }), nodes(door({ position: [3, 0, 99] })))!;
    expect(geometry.center).toEqual({ x: 3, z: 0 });
    expect(Math.hypot(geometry.opening[0]!.x - geometry.opening[1]!.x, geometry.opening[0]!.z - geometry.opening[1]!.z)).toBeCloseTo(2);
  });
  it("uses the curved wall tangent rather than its start/end chord", () => {
    const curved = { ...wall, curveOffset: 2 }, node = door({ position: [3, 0, 0] });
    const geometry = resolveDoorPlanGeometry(node, nodes(node, curved))!;
    expect(Math.abs(geometry.tangent.z)).toBeGreaterThan(.05);
  });
  it("does not fabricate an orphaned door at the world origin", () => {
    expect(resolveDoorPlanGeometry({ ...door(), wallId: "missing", parentId: "missing" }, { level: { id: "level", type: "level" } })).toBeNull();
  });
  it("renders bare opening geometry without leaf, frame, or swing symbol", () => {
    const node = door({ openingKind: "opening" }), geometry = resolveDoorPlanGeometry(node, nodes(node))!;
    expect(geometry.opening).toHaveLength(4); expect(geometry.frame).toHaveLength(0); expect(geometry.leaves).toHaveLength(0); expect(geometry.symbols).toHaveLength(0);
  });
  it("changes hinged pivot and swing side from schema fields", () => {
    const left = door({ hingesSide: "left", swingDirection: "inward" }), right = door({ hingesSide: "right", swingDirection: "outward" });
    const a = resolveDoorPlanGeometry(left, nodes(left))!, b = resolveDoorPlanGeometry(right, nodes(right))!;
    expect(a.leaves[0]!.from).not.toEqual(b.leaves[0]!.from); expect(a.symbols[0]!.d).not.toEqual(b.symbols[0]!.d);
  });
  it("keeps double and french as independent two-leaf variants", () => {
    for (const doorType of ["double", "french"]) { const node = door({ doorType }); const geometry = resolveDoorPlanGeometry(node, nodes(node))!; expect(geometry.leaves).toHaveLength(2); expect(geometry.symbols).toHaveLength(2); }
  });
  it("gives every non-swing Pascal door type a distinct non-hinged symbol without swing arcs", () => {
    for (const doorType of ["folding", "sliding", "pocket", "barn", "garage-sectional", "garage-rollup", "garage-tiltup"]) { const node = door({ doorType, garagePanelCount: 5 }); const geometry = resolveDoorPlanGeometry(node, nodes(node))!; expect(geometry.symbols.length + geometry.symbolPolygons.length + geometry.leafPolygons.length).toBeGreaterThan(0); expect(geometry.symbols.some((symbol) => symbol.kind === "path" && symbol.d?.includes(" A "))).toBe(false); }
  });
});
