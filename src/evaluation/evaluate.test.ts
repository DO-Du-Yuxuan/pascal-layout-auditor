import { describe, expect, it } from "vitest";
import sample from "../../fixtures/evaluation/sample-normalized-plan.json";
import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import { evaluateG1Foundation } from "./evaluate";

const fixture = () => structuredClone(sample) as unknown as EvaluationHandoff;
const rule = (report: ReturnType<typeof evaluateG1Foundation>, id: string) => report.rules.find((item) => item.ruleId === id)!;

describe("G1 foundation evaluator", () => {
  it("passes valid units and unique IDs", () => {
    const report = evaluateG1Foundation(fixture(), "2026-01-01T00:00:00.000Z");
    expect(rule(report, "G1-001").status).toBe("pass");
    expect(rule(report, "G1-002").status).toBe("pass");
  });

  it("reports duplicate IDs", () => {
    const handoff = fixture();
    handoff.walls.push({ ...handoff.walls[0] });
    const found = rule(evaluateG1Foundation(handoff), "G1-002");
    expect(found.status).toBe("issue");
    expect(found.normalizedObjectIds).toContain(handoff.walls[0].id);
  });

  it("reports invalid dimensions and coordinates", () => {
    const handoff = fixture();
    handoff.walls[0].start = [Number.NaN, 0];
    handoff.furniture[0].dimensionsMeters = [0, 1, 1];
    const found = rule(evaluateG1Foundation(handoff), "G1-004");
    expect(found.status).toBe("issue");
    expect(found.normalizedObjectIds).toEqual(expect.arrayContaining([handoff.walls[0].id, handoff.furniture[0].id]));
  });

  it("reports missing level ownership", () => {
    const handoff = fixture();
    handoff.furniture[0].levelId = null;
    const found = rule(evaluateG1Foundation(handoff), "G1-003");
    expect(found.status).toBe("issue");
    expect(found.missingData).toContain(`${handoff.furniture[0].id}.levelId`);
  });

  it("reports broken references", () => {
    const handoff = fixture();
    handoff.windows[0].hostWallId = "wall_missing";
    const found = rule(evaluateG1Foundation(handoff), "G1-005");
    expect(found.status).toBe("issue");
    expect(found.details.join(" ")).toContain("wall_missing");
  });

  it("uses unable_to_determine when main-space semantics are missing", () => {
    const found = rule(evaluateG1Foundation(fixture()), "G1-019");
    expect(found.status).toBe("unable_to_determine");
    expect(found.missingData).toContain("独立 Space 对象");
    expect(found.confidence.level).toBe("low");
  });

  it("does not crash on invalid or unsupported geometry", () => {
    const handoff = fixture();
    handoff.walls[0].start = null;
    handoff.walls[1].curveOffsetMeters = 1;
    expect(() => evaluateG1Foundation(handoff)).not.toThrow();
    expect(rule(evaluateG1Foundation(handoff), "G1-013").status).toBe("unable_to_determine");
  });

  it("reports furniture wall penetration and same-height physical collision in G1-023", () => {
    const handoff = fixture(), first = handoff.furniture[0], second = { ...structuredClone(first), id: "collision-related", rawPascalId: "collision-related" };
    first.levelId = handoff.walls[0].levelId;
    first.resolvedWorldPosition = handoff.walls[0].start;
    first.resolvedRotationRadians = 0;
    first.rawPosition = [handoff.walls[0].start![0], 0, handoff.walls[0].start![1]];
    first.dimensionsMeters = [1, 1, 1];
    (first as any).resolvedVerticalRangeMeters = [0, 1];
    second.levelId = first.levelId;
    second.resolvedWorldPosition = first.resolvedWorldPosition;
    second.rawPosition = first.rawPosition;
    second.dimensionsMeters = first.dimensionsMeters;
    (second as any).resolvedVerticalRangeMeters = [.2, 1.2];
    handoff.furniture = [first, second];
    const found = rule(evaluateG1Foundation(handoff), "G1-023");
    expect(found.status).toBe("issue");
    expect(found.diagnostics).toEqual(expect.arrayContaining([expect.objectContaining({ code: "item_penetrates_wall" }), expect.objectContaining({ code: "item_physical_collision", normalizedObjectIds: expect.arrayContaining([first.id, second.id]) })]));
  });

  it("retains invalid wall-footprint diagnostics and refuses to guess", () => {
    const handoff = fixture();
    handoff.doors = [handoff.doors[0]];
    handoff.windows = [];
    handoff.walls[0].footprintValidation = { valid: false, codes: ["wall_self_intersection"], areaSquareMeters: 0, footprint: [] };
    const found = rule(evaluateG1Foundation(handoff), "G1-013");
    expect(found.status).toBe("unable_to_determine");
    expect(found.diagnostics[0].message).toContain("wall_self_intersection");
  });

  it("passes a straight opening inside its host and reports actual intervals", () => {
    const handoff = fixture();
    handoff.doors = [handoff.doors[0]];
    handoff.windows = [];
    const found = rule(evaluateG1Foundation(handoff), "G1-013");
    expect(found.status).toBe("pass");
    expect(found.measurements).toEqual([]);
  });
});
