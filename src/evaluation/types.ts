import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import type { Diagnostic } from "../types";

export type RuleStatus = "pass" | "issue" | "unable_to_determine" | "not_applicable";
export type RuleSeverity = "info" | "warning" | "error";
export type ConfidenceLevel = "high" | "medium" | "low";

export type RuleMeasurement = {
  name: string;
  value: number | string | boolean | null;
  unit?: string;
  normalizedObjectId?: string;
};

export type RuleThreshold = {
  name: string;
  value: number | string | boolean;
  unit?: string;
};

export type RuleDiagnostic = {
  severity: RuleSeverity;
  code: string;
  message: string;
  normalizedObjectIds: string[];
  field?: string;
  actualValue?: number | string | boolean | null;
  expectedValue?: string;
  origin?: "source_data" | "parser" | "handoff" | "rule" | "geometry_tolerance" | "insufficient_information";
  recommendation?: string;
};

export type RuleConfidence = {
  level: ConfidenceLevel;
  score: number;
  reasons: string[];
};

export type RuleResult = {
  ruleId: string;
  ruleName: string;
  status: RuleStatus;
  severity: RuleSeverity;
  summary: string;
  details: string[];
  normalizedObjectIds: string[];
  pascalSourceIds: string[];
  measurements: RuleMeasurement[];
  thresholds: RuleThreshold[];
  missingData: string[];
  confidence: RuleConfidence;
  diagnostics: RuleDiagnostic[];
};

export type EvaluationReport = {
  reportVersion: "1.0";
  handoffSchemaVersion: string;
  generatedAt: string;
  scope: "G1-foundation";
  overallStatus: RuleStatus;
  counts: Record<RuleStatus, number>;
  tolerances: GeometryTolerances;
  rules: RuleResult[];
  diagnostics: Diagnostic[];
};

export type GeometryTolerances = {
  lengthMeters: number;
  areaSquareMeters: number;
  pointOnBoundaryMeters: number;
  overlapAreaSquareMeters: number;
};

export type G1Rule = (handoff: EvaluationHandoff) => RuleResult;
