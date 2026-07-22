import { describe, expect, it } from "vitest";
import bellevueDemoProject from "../../sample-data/Bellevue demo.json";
import { evaluateFoundation, evaluateG1Foundation } from "../evaluation/evaluate";
import { buildRoomRegionAnalysis } from "../evaluation/room-regions";
import { buildEvaluationHandoff } from "../parser/evaluation-handoff";
import { parseProject } from "../parser/parse";
import { evaluationHighlightFor, evaluationHighlightRole, resolveEvaluationFocus } from "./focus";
import { designerRulePresentation, evaluationIssueTargets, orderEvaluationRulesForDisplay } from "./presentation";

const bellevueProject = structuredClone(bellevueDemoProject) as any;
bellevueProject.nodes.stair_dyp7dqxtm1mg9fxb.fromLevelId = "level_fkoejbpxrc8pfko1";
bellevueProject.nodes.stair_dyp7dqxtm1mg9fxb.toLevelId = "level_3xsbeo3c6y50zj52";

describe("Bellevue evaluation UI adapter", () => {
  const parsed = parseProject(bellevueProject), report = evaluateG1Foundation(buildEvaluationHandoff(parsed)), nodes = parsed.nodes;
  const rule = (id: string) => report.rules.find((item) => item.ruleId === id)!;

  it("offers the current zero-length wall with a visible fallback view", () => {
    const presentation = designerRulePresentation(rule("G1-004"), nodes);
    expect(presentation.targets).toHaveLength(1);
    expect(presentation.targets.map((target) => target.label)).toEqual(["无效墙体 1 · Level 2"]);
    presentation.targets.forEach((target) => expect(resolveEvaluationFocus(nodes, target.primaryId)).toMatchObject({ renderable: true, levelId: "level_tf1ug5dswkkzfhqa", viewBox: { width: 2.4, height: 2.4 } }));
  });

  it("focuses the stair on its renderable parent level despite stale target levels", () => {
    const target = designerRulePresentation(rule("G1-005"), nodes).targets[0]!;
    expect(target.label).toBe("楼梯 · Level 1");
    expect(resolveEvaluationFocus(nodes, target.primaryId)).toMatchObject({ renderable: true, levelId: "level_jwi4ovhyra2ayxa5" });
  });

  it("distinguishes the primary window from its related host wall", () => {
    const window = nodes.window_u6yp3z754ya6gqkq!, synthetic = { ...rule("G1-013"), status: "issue" as const, normalizedObjectIds: [window.id, window.wallId], diagnostics: [{ severity: "error" as const, code: "opening_outside_host_wall", message: "测试定位", normalizedObjectIds: [window.id, window.wallId] }] }, target = designerRulePresentation(synthetic, nodes).targets[0]!, highlight = evaluationHighlightFor("G1-013", target, 0);
    expect(evaluationHighlightRole(highlight, target.primaryId)).toBe("primary");
    expect(target.relatedIds).toEqual(["wall_twjrbha7gdx24q8c"]);
    expect(evaluationHighlightRole(highlight, target.relatedIds[0]!)).toBe("related");
  });

  it("does not create an error highlight for G1-019", () => {
    expect(designerRulePresentation(rule("G1-019"), nodes).targets).toEqual([]);
  });

  it("indexes every currently renderable issue when the basic check completes", () => {
    const targets = evaluationIssueTargets(report.rules, nodes).map((target) => `${target.ruleId}:${target.primaryId}`);
    expect(targets).toEqual(expect.arrayContaining(["G1-004:wall_obbuari0p7ilw3lz", "G1-005:stair_dyp7dqxtm1mg9fxb"]));
    expect(targets.filter((target) => target.startsWith("G1-023:item_"))).not.toHaveLength(0);
  });

  it("fails safely for missing render mappings and replaces old highlights", () => {
    expect(resolveEvaluationFocus(nodes, "missing-object")).toMatchObject({ renderable: false, viewBox: null });
    const wallTarget = designerRulePresentation(rule("G1-004"), nodes).targets[0]!, window = nodes.window_u6yp3z754ya6gqkq!, synthetic = { ...rule("G1-013"), status: "issue" as const, normalizedObjectIds: [window.id, window.wallId], diagnostics: [{ severity: "error" as const, code: "opening_outside_host_wall", message: "测试定位", normalizedObjectIds: [window.id, window.wallId] }] }, windowTarget = designerRulePresentation(synthetic, nodes).targets[0]!;
    const oldHighlight = evaluationHighlightFor("G1-004", wallTarget, 0), nextHighlight = evaluationHighlightFor("G1-013", windowTarget, 0);
    expect(nextHighlight.primaryId).not.toBe(oldHighlight.primaryId);
    expect(nextHighlight.ruleId).toBe("G1-013");
  });

  it("offers an out-of-envelope furniture object as a canvas target", () => {
    const object = Object.values(parsed.nodes).find((node) => node.type === "item")!, synthetic = { ...rule("G1-004"), ruleId: "G1-023", ruleName: "家具与设备位于有效建筑范围", normalizedObjectIds: [object.id], pascalSourceIds: [object.id], status: "issue" as const, diagnostics: [{ severity: "error" as const, code: "item_outside_building_envelope", message: "越界", normalizedObjectIds: [object.id] }] };
    expect(designerRulePresentation(synthetic, nodes).targets[0]).toMatchObject({ primaryId: object.id, levelName: "Level 1" });
  });
});

describe("Bellevue Room Region UI adapter", () => {
  const parsed = parseProject(bellevueDemoProject), handoff = buildEvaluationHandoff(parsed), analysis = buildRoomRegionAnalysis(handoff), report = evaluateFoundation(handoff), nodes = parsed.nodes;
  const rule = (id: string) => report.rules.find((item) => item.ruleId === id)!;

  it("turns overlapping Zones into canvas targets and keeps numerical slivers out of problem targets", () => {
    const overlapTargets = designerRulePresentation(rule("G1-009"), nodes, analysis).targets;
    expect(overlapTargets).toHaveLength(2);
    expect(overlapTargets.every((target) => nodes[target.primaryId]?.type === "zone")).toBe(true);

    expect(designerRulePresentation(rule("G1-012"), nodes, analysis).targets).toHaveLength(0);
  });

  it("indexes both confirmed issues and locatable unable-to-determine results", () => {
    const targets = evaluationIssueTargets(report.rules, nodes, analysis);
    expect(targets.filter((target) => target.ruleId === "G1-009")).toHaveLength(2);
    expect(targets.filter((target) => target.ruleId === "G1-012")).toHaveLength(0);
    expect(targets.some((target) => target.ruleId === "G1-019")).toBe(false);
    expect(rule("G3-001")).toMatchObject({ status: "pass" });
    expect(targets.filter((target) => target.ruleId === "G3-001")).toHaveLength(0);
    expect(targets.filter((target) => target.ruleId === "G3-004")).toEqual([]);
    expect(targets.filter((target) => target.ruleId === "G3-006")).toEqual([expect.objectContaining({ primaryId: "level_tf1ug5dswkkzfhqa-room-12", levelName: "Level 2", status: "unable_to_determine" })]);
    expect(targets.some((target) => target.ruleId === "G3-005")).toBe(false);
  });

  it("focuses a synthetic G3 room issue through the shared Room Region adapter", () => {
    const room = analysis.rooms.find((item) => item.usableForEvaluation)!;
    const synthetic = { ...rule("G1-004"), ruleId: "G3-005", ruleName: "已定义的使用空间不能成为无入口封闭空间", normalizedObjectIds: [room.roomRegionId], status: "issue" as const };
    const target = designerRulePresentation(synthetic, nodes, analysis).targets[0]!;
    expect(target).toMatchObject({ primaryId: room.roomRegionId, levelId: room.levelId });
    expect(resolveEvaluationFocus(nodes, target.primaryId, analysis)).toMatchObject({ renderable: true, levelId: room.levelId });
  });

  it("shows issues first and highlights every confirmed G1-023 placement conflict", () => {
    const ordered = orderEvaluationRulesForDisplay(report.rules);
    expect(ordered.slice(0, ordered.filter((item) => item.status === "issue").length).every((item) => item.status === "issue")).toBe(true);
    const placementRule = rule("G1-023"), furniture = designerRulePresentation(placementRule, nodes, analysis), confirmedPrimaryIds = [...new Set(placementRule.diagnostics.filter((item) => item.severity === "error" && ["item_outside_building_envelope", "item_penetrates_wall", "item_physical_collision"].includes(item.code)).map((item) => item.normalizedObjectIds[0]))];
    expect(furniture.targets.map((target) => target.primaryId)).toEqual(confirmedPrimaryIds);
    expect(furniture.targets.every((target) => resolveEvaluationFocus(nodes, target.primaryId, analysis).renderable)).toBe(true);
    expect(furniture.targets.find((target) => target.primaryId === "item_ht7u86ckuphquvci")?.relatedIds).toEqual(expect.arrayContaining(["wall_49gje9vehl4h6hf7", "item_7jbysauqz8k82rh0", "item_am8s25oxksk6s4kq"]));
  });

  it("counts one problem door once when it collides with several objects", () => {
    const doorId = "door_p2yxrdash2rgc49t", relatedIds = ["wall_n8p4o7n2gxnaqwde", "item_ousmkp19jbxsvuhz", "item_tbac0ek6qdmwo1ug"], template = rule("G3-007");
    const synthetic = { ...template, status: "issue" as const, normalizedObjectIds: [doorId, ...relatedIds], diagnostics: relatedIds.map((id) => ({ severity: "error" as const, code: "door_swing_blocked", message: "碰撞", normalizedObjectIds: [doorId, id] })) };
    const presentation = designerRulePresentation(synthetic, nodes, analysis);
    expect(presentation.problemCountLabel).toBe("1");
    expect(presentation.targets).toEqual([expect.objectContaining({ primaryId: doorId, relatedIds })]);
  });

  it("applies the flipped double-door direction without creating a false collision target", () => {
    const presentation = designerRulePresentation(rule("G3-007"), nodes, analysis);
    expect(presentation.title).toBe("门均可打开到90°");
    expect(presentation.targets).toEqual([]);
  });

  it("focuses a blocked navigation Room and marks its furniture as the related object", () => {
    const room = analysis.rooms.find((item) => item.levelId === "level_jwi4ovhyra2ayxa5" && item.usableForEvaluation)!, blocker = Object.values(nodes).find((node) => node.type === "item" && resolveEvaluationFocus(nodes, node.id).levelId === room.levelId)!;
    const synthetic = { ...rule("G3-004"), status: "issue" as const, normalizedObjectIds: [room.roomRegionId], diagnostics: [{ severity: "error" as const, code: "large_furniture_blocks_navigation", message: "大型家具阻断路径", normalizedObjectIds: [room.roomRegionId, blocker.id], origin: "source_data" as const }] };
    const presentation = designerRulePresentation(synthetic, nodes, analysis), target = presentation.targets[0]!;
    expect(target).toMatchObject({ primaryId: room.roomRegionId, relatedIds: [blocker.id], levelId: room.levelId });
    expect(resolveEvaluationFocus(nodes, target.primaryId, analysis)).toMatchObject({ renderable: true, levelId: room.levelId });
    expect(evaluationHighlightRole(evaluationHighlightFor("G3-004", target, 0), blocker.id)).toBe("related");
  });

  it("presents specialist furniture findings with human labels and item focus targets", () => {
    const bedPlacement = designerRulePresentation(rule("G3-014"), nodes, analysis);
    expect(bedPlacement.title).toBe("床没有完整放在卧室内");
    expect(bedPlacement.targets.map((target) => target.primaryId)).toEqual(expect.arrayContaining(["item_0aahggnuvs15c6lx", "item_qmhod8evoai6fg1z"]));
    expect(bedPlacement.targets.every((target) => target.levelId)).toBe(true);

    const wardrobe = designerRulePresentation(rule("G3-018"), nodes, analysis);
    expect(wardrobe.title).toBe("衣柜能够正常开启和取物");
    expect(wardrobe.targets).toEqual([]);
    const seating = designerRulePresentation(rule("G3-020"), nodes, analysis);
    expect(seating.title).toBe("客厅主要坐具能够正常使用");
    expect(seating.targets).toEqual([]);
  });

  it("presents kitchen and bathroom checks with designer wording and canvas targets", () => {
    const operationRelation = designerRulePresentation(rule("G3-025"), nodes, analysis);
    expect(operationRelation.title).toBe("厨房基本操作关系暂时无法完整核验");
    expect(operationRelation.targets).toHaveLength(2);
    expect(operationRelation.targets.every((target) => target.primaryId.includes("-room-"))).toBe(true);

    const stove = designerRulePresentation(rule("G3-026"), nodes, analysis);
    expect(stove.title).toBe("厨房核心设备前没有可用站立位置");
    expect(stove.targets).toEqual([expect.objectContaining({ primaryId: "item_y57pu4i6rmcz8y1p", levelName: "Level 1" })]);
    expect(stove.targets[0]?.label).toContain("Stove");

    const applianceDoor = designerRulePresentation(rule("G3-029"), nodes, analysis);
    expect(applianceDoor.title).toBe("厨房设备门的开启情况无法判断");
    expect(applianceDoor.targets).toEqual([expect.objectContaining({ primaryId: "item_an6vix3f4h6hd5hd", status: "unable_to_determine" })]);
    expect(applianceDoor.rationale).toContain("不会用冰箱或烤箱的整体矩形冒充门扇");
  });
});
