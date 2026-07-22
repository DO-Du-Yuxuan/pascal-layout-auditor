import { describe, expect, it } from "vitest";
import { analyzePhysicalPlacement } from "./physical-placement";

const item = (id: string, x: number, z: number, category = "cabinets", vertical: [number, number] = [0, 1], name = id) => ({ id, rawPascalId: id, name, parentId: "L1", levelId: "L1", visible: true, assetId: id, category, functionTags: [category], attachTo: null, dimensionsMeters: [1, vertical[1] - vertical[0], 1], rawPosition: [x, vertical[0], z], rawRotation: [0, 0, 0], resolvedWorldPosition: [x, z], resolvedRotationRadians: 0, resolvedVerticalRangeMeters: vertical, verticalTransformError: null, floorPlanUrl: null, transformStatus: "ok", transformError: null });
const wall = { id: "wall", rawPascalId: "wall", name: "Wall", parentId: "L1", levelId: "L1", visible: true, start: [0, 0], end: [4, 0], thicknessMeters: .1, thicknessSource: "explicit", heightMeters: 3, curveOffsetMeters: 0, frontSide: null, backSide: null, footprintValidation: { valid: true, codes: [], areaSquareMeters: .4, footprint: [[0, -.05], [4, -.05], [4, .05], [0, .05]] } };
const handoff = (furniture: ReturnType<typeof item>[], walls = [wall]) => ({ furniture, equipment: [], walls }) as any;

describe("physical furniture placement", () => {
  it("allows touching a wall but reports actual penetration", () => {
    expect(analyzePhysicalPlacement(handoff([item("touch", 2, .55)]), [item("touch", 2, .55)] as any).wallPenetrations).toHaveLength(0);
    const embedded = item("embedded", 2, .48), found = analyzePhysicalPlacement(handoff([embedded]), [embedded] as any).wallPenetrations[0]!;
    expect(found.penetrationDepthMeters).toBeCloseTo(.07);
    expect(found.overlapAreaSquareMeters).toBeGreaterThan(.01);
  });

  it("requires plan and vertical overlap for a furniture collision", () => {
    const floor = item("floor", 2, 2, "cabinets", [0, .9]), overhead = item("overhead", 2, 2, "cabinets", [1.2, 2]);
    expect(analyzePhysicalPlacement(handoff([floor, overhead], []), [floor, overhead] as any).itemCollisions).toHaveLength(0);
    const colliding = item("colliding", 2, 2, "cabinets", [.5, 1.5]);
    expect(analyzePhysicalPlacement(handoff([floor, colliding], []), [floor, colliding] as any).itemCollisions[0]).toMatchObject({ primary: { id: "floor" }, related: { id: "colliding" }, verticalOverlapMeters: .4 });
  });

  it("does not guess from bounding boxes for normally nesting table and chair geometry", () => {
    const table = item("table", 2, 2, "dining-tables", [0, .75], "Dining Table"), chair = item("chair", 2, 2, "dining-chairs", [0, .9], "Dining Chair"), found = analyzePhysicalPlacement(handoff([table, chair], []), [table, chair] as any);
    expect(found.itemCollisions).toHaveLength(0);
    expect(found.unresolvedPlanarOverlaps).toEqual([{ itemIds: ["table", "chair"], reason: "mesh_geometry_required_for_nestable_pair" }]);
  });
});
