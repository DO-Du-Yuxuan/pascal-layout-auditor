import { describe, expect, it } from "vitest";
import bellevueDemoProject from "../../sample-data/Bellevue demo.json";
import { buildEvaluationHandoff } from "../parser/evaluation-handoff";
import { parseProject } from "../parser/parse";
import { evaluateFoundation, evaluateG1Foundation } from "./evaluate";
import { relateOpeningToHostBoundary } from "./geometry";
import { buildRoomConnectivityGraph } from "./connectivity";
import { evaluationFocusTargets } from "../evaluation-ui/presentation";

const bellevueProject = structuredClone(bellevueDemoProject) as any;
bellevueProject.nodes.stair_dyp7dqxtm1mg9fxb.fromLevelId = "level_fkoejbpxrc8pfko1";
bellevueProject.nodes.stair_dyp7dqxtm1mg9fxb.toLevelId = "level_3xsbeo3c6y50zj52";

describe("Bellevue G1 trace", () => {
  it("preserves the current zero-length source wall through parser and handoff", () => {
    const parsed = parseProject(bellevueProject), handoff = buildEvaluationHandoff(parsed), report = evaluateG1Foundation(handoff, "2026-07-20T00:00:00.000Z");
    const found = report.rules.find((rule) => rule.ruleId === "G1-004")!;
    for (const id of ["wall_obbuari0p7ilw3lz"]) {
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
    expect(relation).toMatchObject({ status: "inside", openingCenterMeters: 0.9003166435429053, openingStartMeters: 0.3406715838381247, openingEndMeters: 1.459961703247686, wallLengthMeters: 1.8324012039371924, leftOvershootMeters: 0, rightOvershootMeters: 0 });
    expect(found.status).toBe("pass");
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
      expect.objectContaining({ name: "unconfirmedFragmentCount", value: 0 }),
    ]));
  });

  it("keeps Bellevue Door Portal and G3 results stable", () => {
    const handoff = buildEvaluationHandoff(parseProject(bellevueDemoProject)), graph = buildRoomConnectivityGraph(handoff), report = evaluateFoundation(handoff);
    expect(graph.portals).toHaveLength(26);
    expect(graph.portals.filter((portal) => portal.usableForConnectivity)).toHaveLength(26);
    expect(graph.portals.filter((portal) => portal.connectsExterior)).toHaveLength(4);
    expect(graph.edges.filter((edge) => edge.connectionType === "door")).toHaveLength(26);
    expect(graph.entrance).toMatchObject({ selectedDoorId: null, confidence: "low" });
    expect(graph.entrance.candidateDoorIds).toHaveLength(4);
    expect(graph.stairConnections[0]).toMatchObject({ usableForConnectivity: true, fromRoomRegionId: "level_jwi4ovhyra2ayxa5-room-1", toRoomRegionId: "level_tf1ug5dswkkzfhqa-room-2", diagnostics: [] });
    expect(report.rules.find((rule) => rule.ruleId === "G3-001")).toMatchObject({ status: "pass", summary: "14 个主要空间均可从至少一个可靠外门通过空间连接图到达", measurements: expect.arrayContaining([expect.objectContaining({ name: "validStairConnectionCount", value: 1 }), expect.objectContaining({ name: "unresolvedStairCount", value: 0 })]) });
    expect(report.rules.find((rule) => rule.ruleId === "G3-005")).toMatchObject({ status: "pass", measurements: expect.arrayContaining([expect.objectContaining({ name: "roomWithoutEntranceCount", value: 0 })]) });
    expect(report.rules.find((rule) => rule.ruleId === "G3-002")).toBeDefined();
    expect(report.rules.find((rule) => rule.ruleId === "G3-007")).toBeDefined();
    expect(report.rules.find((rule) => rule.ruleId === "G3-008")).toBeDefined();
    const openingRule = report.rules.find((rule) => rule.ruleId === "G3-007")!;
    const targets = evaluationFocusTargets(openingRule, parseProject(bellevueDemoProject).nodes);
    expect(targets).toEqual([]);
    expect(openingRule).toMatchObject({ status: "pass", summary: "19 扇平开门均可达到基本开启状态" });
    expect(openingRule.measurements).toEqual(expect.arrayContaining([expect.objectContaining({ name: "blockedDoorCount", value: 0 }), expect.objectContaining({ name: "collisionObjectCount", value: 0 }), expect.objectContaining({ name: "usableSwingDoorCount", value: 19 }), expect.objectContaining({ name: "unresolvedSwingDoorCount", value: 0 })]));
    expect(openingRule.diagnostics.filter((diagnostic) => diagnostic.code === "double_door_equal_leaf_assumption")).toHaveLength(2);
    expect(handoff.doors.find((door) => door.id === "door_p2yxrdash2rgc49t")).toMatchObject({ swingDirection: "inward", rawRotationYRadians: Math.PI, placementFlipped: true, effectiveSwingDirection: "outward", effectiveHingesSide: "right" });
    expect(report.rules.find((rule) => rule.ruleId === "G3-002")).toMatchObject({ status: "pass", summary: "26 扇门的入口检测区域均保留基本可进入范围" });
    expect(report.rules.find((rule) => rule.ruleId === "G3-008")).toMatchObject({ status: "pass" });
    expect(report.rules.find((rule) => rule.ruleId === "G3-008")?.measurements).toEqual(expect.arrayContaining([expect.objectContaining({ name: "severeInterlockCount", value: 0 }), expect.objectContaining({ name: "sequentialUseOverlapCount", value: 0 }), expect.objectContaining({ name: "unresolvedDoorOperationCount", value: 0 })]));
    expect(report.rules.find((rule) => rule.ruleId === "G3-003")).toMatchObject({ status: "pass", measurements: expect.arrayContaining([expect.objectContaining({ name: "participatingRoomCount", value: 13 }), expect.objectContaining({ name: "internallyConnectedRoomCount", value: 13 })]) });
    expect(report.rules.find((rule) => rule.ruleId === "G3-004")).toMatchObject({ status: "pass", measurements: expect.arrayContaining([expect.objectContaining({ name: "participatingRoomCount", value: 21 }), expect.objectContaining({ name: "largeFurnitureBlockedPathCount", value: 0 })]) });
    expect(report.rules.find((rule) => rule.ruleId === "G3-006")).toMatchObject({ status: "unable_to_determine", diagnostics: [expect.objectContaining({ code: "fixed_obstacle_attribution_unresolved", normalizedObjectIds: expect.arrayContaining(["level_tf1ug5dswkkzfhqa-room-12", "item_ousmkp19jbxsvuhz", "item_tbac0ek6qdmwo1ug"]) })] });
  });
});
