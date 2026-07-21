import { describe, expect, it } from "vitest";
import bellevueProject from "../../sample-data/9618b316-3eab-4fcf-9a21-0f7316479968.json";
import bellevueDemoProject from "../../sample-data/Bellevue demo.json";
import { evaluateG1Foundation } from "../evaluation/evaluate";
import { buildRoomRegionAnalysis } from "../evaluation/room-regions";
import { buildEvaluationHandoff } from "../parser/evaluation-handoff";
import { parseProject } from "../parser/parse";
import { evaluationHighlightFor, evaluationHighlightRole, resolveEvaluationFocus } from "./focus";
import { designerRulePresentation, evaluationIssueTargets } from "./presentation";

describe("Bellevue evaluation UI adapter", () => {
  const parsed = parseProject(bellevueProject), report = evaluateG1Foundation(buildEvaluationHandoff(parsed)), nodes = parsed.nodes;
  const rule = (id: string) => report.rules.find((item) => item.ruleId === id)!;

  it("offers two independently focusable zero-length walls with a visible fallback view", () => {
    const presentation = designerRulePresentation(rule("G1-004"), nodes);
    expect(presentation.targets).toHaveLength(2);
    expect(presentation.targets.map((target) => target.label)).toEqual(["无效墙体 1 · Level 2", "无效墙体 2 · Level 2"]);
    presentation.targets.forEach((target) => expect(resolveEvaluationFocus(nodes, target.primaryId)).toMatchObject({ renderable: true, levelId: "level_tf1ug5dswkkzfhqa", viewBox: { width: 2.4, height: 2.4 } }));
  });

  it("focuses the stair on its renderable parent level despite stale target levels", () => {
    const target = designerRulePresentation(rule("G1-005"), nodes).targets[0]!;
    expect(target.label).toBe("楼梯 · Level 1");
    expect(resolveEvaluationFocus(nodes, target.primaryId)).toMatchObject({ renderable: true, levelId: "level_jwi4ovhyra2ayxa5" });
  });

  it("distinguishes the primary window from its related host wall", () => {
    const target = designerRulePresentation(rule("G1-013"), nodes).targets[0]!, highlight = evaluationHighlightFor("G1-013", target, 0);
    expect(evaluationHighlightRole(highlight, target.primaryId)).toBe("primary");
    expect(target.relatedIds).toEqual(["wall_twjrbha7gdx24q8c"]);
    expect(evaluationHighlightRole(highlight, target.relatedIds[0]!)).toBe("related");
  });

  it("does not create an error highlight for G1-019", () => {
    expect(designerRulePresentation(rule("G1-019"), nodes).targets).toEqual([]);
  });

  it("indexes every currently renderable issue when the basic check completes", () => {
    expect(evaluationIssueTargets(report.rules, nodes).map((target) => `${target.ruleId}:${target.primaryId}`)).toEqual([
      "G1-004:wall_s036gfqzmc1miaps",
      "G1-004:wall_2lndng4qf6ayungu",
      "G1-005:stair_dyp7dqxtm1mg9fxb",
      "G1-013:window_u6yp3z754ya6gqkq",
    ]);
  });

  it("fails safely for missing render mappings and replaces old highlights", () => {
    expect(resolveEvaluationFocus(nodes, "missing-object")).toMatchObject({ renderable: false, viewBox: null });
    const wallTarget = designerRulePresentation(rule("G1-004"), nodes).targets[0]!, windowTarget = designerRulePresentation(rule("G1-013"), nodes).targets[0]!;
    const oldHighlight = evaluationHighlightFor("G1-004", wallTarget, 0), nextHighlight = evaluationHighlightFor("G1-013", windowTarget, 0);
    expect(nextHighlight.primaryId).not.toBe(oldHighlight.primaryId);
    expect(nextHighlight.ruleId).toBe("G1-013");
  });

  it("offers an out-of-envelope furniture object as a canvas target", () => {
    const object = parsed.nodes.item_010u26nmiwafik24!, synthetic = { ...rule("G1-004"), ruleId: "G1-023", ruleName: "家具与设备位于有效建筑范围", normalizedObjectIds: [object.id], pascalSourceIds: [object.id], status: "issue" as const };
    expect(designerRulePresentation(synthetic, nodes).targets[0]).toMatchObject({ primaryId: object.id, levelName: "Level 2" });
  });
});

describe("Bellevue Room Region UI adapter", () => {
  const parsed = parseProject(bellevueDemoProject), handoff = buildEvaluationHandoff(parsed), analysis = buildRoomRegionAnalysis(handoff), report = evaluateG1Foundation(handoff), nodes = parsed.nodes;
  const rule = (id: string) => report.rules.find((item) => item.ruleId === id)!;

  it("turns overlapping Zones into canvas targets and keeps numerical slivers out of problem targets", () => {
    const overlapTargets = designerRulePresentation(rule("G1-009"), nodes, analysis).targets;
    expect(overlapTargets).toHaveLength(2);
    expect(overlapTargets.every((target) => nodes[target.primaryId]?.type === "zone")).toBe(true);

    expect(designerRulePresentation(rule("G1-012"), nodes, analysis).targets).toHaveLength(0);
  });

  it("indexes new issue targets without marking the passing name rule", () => {
    const targets = evaluationIssueTargets(report.rules, nodes, analysis);
    expect(targets.filter((target) => target.ruleId === "G1-009")).toHaveLength(2);
    expect(targets.filter((target) => target.ruleId === "G1-012")).toHaveLength(0);
    expect(targets.some((target) => target.ruleId === "G1-019")).toBe(false);
  });
});
