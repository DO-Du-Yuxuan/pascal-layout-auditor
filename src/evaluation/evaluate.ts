import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import { FIRST_G1_RULES } from "./g1-rules";
import { FIRST_G3_RULES } from "./g3-rules";
import { DOOR_OPERATION_G3_RULES } from "./g3-operation-rules";
import { NAVIGATION_G3_RULES } from "./g3-navigation-rules";
import { FURNITURE_G3_RULES } from "./g3-furniture-rules";
import { FIXTURE_G3_RULES } from "./g3-fixture-rules";
import { G1_GEOMETRY_TOLERANCES } from "./tolerances";
import type { EvaluationReport, RuleStatus } from "./types";

export function evaluateG1Foundation(handoff: EvaluationHandoff, generatedAt = new Date().toISOString()): EvaluationReport {
  const rules = FIRST_G1_RULES.map((rule) => rule(handoff));
  const counts: Record<RuleStatus, number> = { pass: 0, issue: 0, unable_to_determine: 0, not_applicable: 0 };
  rules.forEach((rule) => counts[rule.status]++);
  const overallStatus: RuleStatus = counts.issue ? "issue" : counts.unable_to_determine ? "unable_to_determine" : counts.pass ? "pass" : "not_applicable";
  return { reportVersion: "1.0", handoffSchemaVersion: handoff.schemaVersion, generatedAt, scope: "G1-foundation", overallStatus, counts, tolerances: G1_GEOMETRY_TOLERANCES, rules, diagnostics: handoff.diagnostics };
}

export function evaluateFoundation(handoff: EvaluationHandoff, generatedAt = new Date().toISOString()): EvaluationReport {
  const rules = [...FIRST_G1_RULES, ...FIRST_G3_RULES, ...DOOR_OPERATION_G3_RULES, ...NAVIGATION_G3_RULES, ...FURNITURE_G3_RULES, ...FIXTURE_G3_RULES].map((rule) => rule(handoff));
  const counts: Record<RuleStatus, number> = { pass: 0, issue: 0, unable_to_determine: 0, not_applicable: 0 };
  rules.forEach((rule) => counts[rule.status]++);
  const overallStatus: RuleStatus = counts.issue ? "issue" : counts.unable_to_determine ? "unable_to_determine" : counts.pass ? "pass" : "not_applicable";
  return { reportVersion: "1.0", handoffSchemaVersion: handoff.schemaVersion, generatedAt, scope: "G1-G3-foundation", overallStatus, counts, tolerances: G1_GEOMETRY_TOLERANCES, rules, diagnostics: handoff.diagnostics };
}

export type { EvaluationReport, RuleResult, RuleStatus } from "./types";
