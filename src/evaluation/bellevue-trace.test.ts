import { describe, expect, it } from "vitest";
import bellevueProject from "../../sample-data/9618b316-3eab-4fcf-9a21-0f7316479968.json";
import bellevueDemoProject from "../../sample-data/Bellevue demo.json";
import { buildEvaluationHandoff } from "../parser/evaluation-handoff";
import { parseProject } from "../parser/parse";
import { evaluateG1Foundation } from "./evaluate";
import { relateOpeningToHostBoundary } from "./geometry";

describe("Bellevue G1 trace", () => {
  it("preserves the two zero-length source walls through parser and handoff", () => {
    const parsed = parseProject(bellevueProject), handoff = buildEvaluationHandoff(parsed), report = evaluateG1Foundation(handoff, "2026-07-20T00:00:00.000Z");
    const found = report.rules.find((rule) => rule.ruleId === "G1-004")!;
    for (const id of ["wall_s036gfqzmc1miaps", "wall_2lndng4qf6ayungu"]) {
      const raw = parsed.nodes[id], wall = handoff.walls.find((item) => item.id === id)!;
      expect(raw.start).toEqual(raw.end);
      expect(wall.rawPascalId).toBe(id);
      expect(wall.footprintValidation).toMatchObject({ valid: false, codes: ["wall_zero_length"], areaSquareMeters: 0 });
    }
    expect(found.status).toBe("issue");
    expect(found.diagnostics.map((item) => [item.field, item.actualValue])).toEqual(expect.arrayContaining([["wall.lengthMeters", 0]]));
  });

  it("retains the stale stair level IDs instead of losing them in a mapping", () => {
    const parsed = parseProject(bellevueProject), handoff = buildEvaluationHandoff(parsed), report = evaluateG1Foundation(handoff);
    const stair = handoff.stairs.find((item) => item.id === "stair_dyp7dqxtm1mg9fxb")!, found = report.rules.find((rule) => rule.ruleId === "G1-005")!;
    expect(parsed.nodes[stair.id].fromLevelId).toBe("level_fkoejbpxrc8pfko1");
    expect(parsed.nodes[stair.id].toLevelId).toBe("level_3xsbeo3c6y50zj52");
    expect(stair.fromLevelId).toBe(parsed.nodes[stair.id].fromLevelId);
    expect(stair.toLevelId).toBe(parsed.nodes[stair.id].toLevelId);
    expect(handoff.levels.map((level) => level.id)).toEqual(["level_jwi4ovhyra2ayxa5", "level_tf1ug5dswkkzfhqa"]);
    expect(found.diagnostics.filter((item) => item.normalizedObjectIds.includes(stair.id)).every((item) => item.origin === "source_data")).toBe(true);
  });

  it("uses Pascal opening center and opening width, not frame dimensions", () => {
    const parsed = parseProject(bellevueProject), handoff = buildEvaluationHandoff(parsed), window = handoff.windows.find((item) => item.id === "window_u6yp3z754ya6gqkq")!, wall = handoff.walls.find((item) => item.id === window.hostWallId)!;
    const relation = relateOpeningToHostBoundary(window, wall), report = evaluateG1Foundation(handoff), found = report.rules.find((rule) => rule.ruleId === "G1-013")!;
    const rawWindow = parsed.nodes[window.id];
    expect(rawWindow.position?.[0]).toBe(window.rawWallLocalPosition![0]);
    expect(rawWindow.width).toBe(window.widthMeters);
    expect(rawWindow.frameThickness).toBe(0.05);
    expect(relation).toMatchObject({ status: "outside", openingCenterMeters: 0.957665610141416, openingStartMeters: 0.04266561014141601, openingEndMeters: 1.872665610141416, wallLengthMeters: 1.8324012039371924, leftOvershootMeters: 0 });
    expect(relation.rightOvershootMeters).toBeCloseTo(0.0402644062042236, 12);
    expect(found.diagnostics.find((item) => item.normalizedObjectIds.includes(window.id))).toMatchObject({ origin: "source_data", field: "opening.position[0] + opening.width / 2" });
  });

  it("keeps Bellevue room-region and Zone matching results stable", () => {
    const handoff = buildEvaluationHandoff(parseProject(bellevueDemoProject));
    const report = evaluateG1Foundation(handoff, "2026-07-20T00:00:00.000Z");
    const statuses = Object.fromEntries(report.rules.map((rule) => [rule.ruleId, rule.status]));
    expect(statuses).toMatchObject({
      "G1-007": "pass",
      "G1-009": "issue",
      "G1-012": "pass",
      "G1-019": "pass",
    });

    const overlap = report.rules.find((rule) => rule.ruleId === "G1-009")!;
    expect(overlap.measurements).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: "zonePairOverlapCount", value: 1 }),
      expect.objectContaining({ name: "zoneCrossRoomCount", value: 0 }),
    ]));
    const fragments = report.rules.find((rule) => rule.ruleId === "G1-012")!;
    expect(fragments.measurements).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: "numericalSliverCount", value: 3 }),
      expect.objectContaining({ name: "tinyFragmentCount", value: 0 }),
    ]));
  });
});
