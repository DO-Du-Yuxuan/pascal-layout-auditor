import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import { FIRST_G1_RULES } from "./g1-rules";
import { FIRST_G3_RULES } from "./g3-rules";
import { DOOR_OPERATION_G3_RULES } from "./g3-operation-rules";
import { NAVIGATION_G3_RULES } from "./g3-navigation-rules";
import { FURNITURE_G3_RULES } from "./g3-furniture-rules";
import { FIXTURE_G3_RULES } from "./g3-fixture-rules";
import { FINAL_G3_RULES } from "./g3-final-rules";
import { G1_GEOMETRY_TOLERANCES } from "./tolerances";
import type { EvaluationReport, G3EvaluationSummary, RuleResult, RuleStatus } from "./types";

const emptyCounts = (): Record<RuleStatus, number> => ({ pass: 0, issue: 0, unable_to_determine: 0, not_applicable: 0 });
const statusFromCounts = (counts: Record<RuleStatus, number>): RuleStatus => counts.issue ? "issue" : counts.unable_to_determine ? "unable_to_determine" : counts.pass ? "pass" : "not_applicable";
const addStatus = (counts: Record<RuleStatus, number>, rule: RuleResult) => { counts[rule.status]++; };

function summarizeG3(rules: RuleResult[]): G3EvaluationSummary {
  const g3 = rules.filter((rule) => rule.ruleId.startsWith("G3-")), counts = emptyCounts(), sameFloorUsability = emptyCounts(), crossFloorUsability = emptyCounts(), specialistChecks = emptyCounts();
  g3.forEach((rule) => {
    addStatus(counts, rule);
    addStatus(rule.ruleId === "G3-001" ? crossFloorUsability : Number(rule.ruleId.slice(3)) <= 13 ? sameFloorUsability : specialistChecks, rule);
  });
  const severeIds = new Set(["G3-001", "G3-002", "G3-003", "G3-005", "G3-007", "G3-033", "G3-037"]), issueRules = g3.filter((rule) => rule.status === "issue");
  const ids = new Set(g3.flatMap((rule) => [...rule.normalizedObjectIds, ...rule.diagnostics.flatMap((diagnostic) => diagnostic.normalizedObjectIds)]));
  const roomIds = [...ids].filter((id) => id.includes("-room-") || id.startsWith("room-region-"));
  return {
    overallStatus: statusFromCounts(counts), counts,
    severityCounts: { severe: issueRules.filter((rule) => severeIds.has(rule.ruleId)).length, major: issueRules.filter((rule) => !severeIds.has(rule.ruleId) && rule.severity === "error").length, general: issueRules.filter((rule) => rule.severity !== "error").length },
    involvedRoomCount: new Set(roomIds).size,
    involvedObjectCount: new Set([...ids].filter((id) => !roomIds.includes(id))).size,
    sections: { sameFloorUsability, crossFloorUsability, specialistChecks, dataGaps: counts.unable_to_determine },
  };
}

export function evaluateG1Foundation(handoff: EvaluationHandoff, generatedAt = new Date().toISOString()): EvaluationReport {
  const rules = FIRST_G1_RULES.map((rule) => rule(handoff));
  const counts: Record<RuleStatus, number> = { pass: 0, issue: 0, unable_to_determine: 0, not_applicable: 0 };
  rules.forEach((rule) => counts[rule.status]++);
  const overallStatus: RuleStatus = counts.issue ? "issue" : counts.unable_to_determine ? "unable_to_determine" : counts.pass ? "pass" : "not_applicable";
  return { reportVersion: "1.0", handoffSchemaVersion: handoff.schemaVersion, generatedAt, scope: "G1-foundation", overallStatus, counts, tolerances: G1_GEOMETRY_TOLERANCES, rules, diagnostics: handoff.diagnostics };
}

export function evaluateFoundation(handoff: EvaluationHandoff, generatedAt = new Date().toISOString()): EvaluationReport {
  const rules = [...FIRST_G1_RULES, ...FIRST_G3_RULES, ...DOOR_OPERATION_G3_RULES, ...NAVIGATION_G3_RULES, ...FURNITURE_G3_RULES, ...FIXTURE_G3_RULES, ...FINAL_G3_RULES].map((rule) => rule(handoff));
  const counts: Record<RuleStatus, number> = { pass: 0, issue: 0, unable_to_determine: 0, not_applicable: 0 };
  rules.forEach((rule) => counts[rule.status]++);
  const overallStatus: RuleStatus = counts.issue ? "issue" : counts.unable_to_determine ? "unable_to_determine" : counts.pass ? "pass" : "not_applicable";
  return { reportVersion: "1.0", handoffSchemaVersion: handoff.schemaVersion, generatedAt, scope: "G1-G3-foundation", overallStatus, counts, g3Summary: summarizeG3(rules), tolerances: G1_GEOMETRY_TOLERANCES, rules, diagnostics: handoff.diagnostics };
}

export type { EvaluationReport, RuleResult, RuleStatus } from "./types";
