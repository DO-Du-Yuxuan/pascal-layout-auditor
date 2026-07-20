import { describe, expect, it } from "vitest";
import { buildBuildingEnvelopes, outsideFootprintArea, rectangularFootprint } from "./envelope";
import { ruleG1023 } from "./g1-rules";

const slab = (id: string, outline: number[][], holes: number[][][] = []) => ({ id, rawPascalId: id, levelId: "L1", visible: true, outline, holes, name: id });
const handoff = (slabs: any[], furniture: any[] = []) => ({ levels: [{ id: "L1", rawPascalId: "L1", levelId: "L1" }], slabs, furniture, equipment: [], zones: [], spaces: [], walls: [], doors: [], windows: [], columns: [], shelves: [], stairs: [], shafts: [], relationships: {}, units: {}, diagnostics: [] }) as any;
const item = (id: string, x: number, z: number, width = 1, depth = 1) => ({ id, rawPascalId: id, name: id, levelId: "L1", category: "chairs", dimensionsMeters: [width, 1, depth], resolvedWorldPosition: [x, z], resolvedRotationRadians: 0 });

describe("building envelope and containment", () => {
  it("forms a single reliable boundary, preserves holes, and supports multiple components", () => {
    const envelope = buildBuildingEnvelopes(handoff([slab("a", [[0, 0], [10, 0], [10, 10], [0, 10]], [[[4, 4], [6, 4], [6, 6], [4, 6]]]), slab("b", [[20, 0], [22, 0], [22, 2], [20, 2]])]))[0]!;
    expect(envelope).toMatchObject({ usableForEvaluation: true, sourceType: "slab-union" });
    expect(envelope.polygons).toHaveLength(2);
    expect(envelope.holes).toHaveLength(1);
  });

  it("rejects self-intersecting and absent slab boundaries without fabricating a polygon", () => {
    expect(buildBuildingEnvelopes(handoff([slab("bow", [[0, 0], [2, 2], [0, 2], [2, 0]])]))[0]!.usableForEvaluation).toBe(false);
    expect(buildBuildingEnvelopes(handoff([]))[0]!).toMatchObject({ usableForEvaluation: false, sourceType: "none", polygons: [] });
  });

  it("distinguishes inside, edge contact, partial outside, and fully outside footprints", () => {
    const envelope = buildBuildingEnvelopes(handoff([slab("a", [[0, 0], [10, 0], [10, 10], [0, 10]])]))[0]!;
    expect(outsideFootprintArea(rectangularFootprint(item("inside", 5, 5))!, envelope)).toBe(0);
    expect(outsideFootprintArea(rectangularFootprint(item("edge", .5, 5))!, envelope)).toBe(0);
    expect(outsideFootprintArea(rectangularFootprint(item("partial", 0, 5))!, envelope)).toBeCloseTo(.5);
    expect(outsideFootprintArea(rectangularFootprint(item("outside", -3, 5))!, envelope)).toBeCloseTo(1);
  });

  it("reports missing footprints and missing boundaries as unable to determine, while excluding vehicles", () => {
    const noFootprint = { ...item("unknown", 2, 2), dimensionsMeters: null }, vehicle = { ...item("car", -20, 0), category: "vehicles" };
    expect(ruleG1023(handoff([], [noFootprint])).status).toBe("unable_to_determine");
    expect(ruleG1023(handoff([slab("a", [[0, 0], [10, 0], [10, 10], [0, 10]])], [vehicle])).status).toBe("not_applicable");
  });
});
