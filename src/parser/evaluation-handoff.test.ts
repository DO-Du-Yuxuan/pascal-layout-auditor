import { describe, expect, it } from "vitest";
import referenceProject from "../../sample-data/9618b316-3eab-4fcf-9a21-0f7316479968.json";
import sampleHandoff from "../../fixtures/evaluation/sample-normalized-plan.json";
import { parseProject } from "./parse";
import { buildEvaluationHandoff } from "./evaluation-handoff";

describe("evaluation handoff projection", () => {
  it("preserves Pascal IDs while exposing evaluator-facing objects and relationships", () => {
    const parsed = parseProject(referenceProject), handoff = buildEvaluationHandoff(parsed);
    expect(handoff.schemaVersion).toBe("1.0");
    expect(handoff.levels.length).toBeGreaterThan(1);
    expect(handoff.zones.length).toBeGreaterThan(1);
    expect(handoff.walls.length).toBeGreaterThan(0);
    expect(handoff.doors.length).toBeGreaterThan(0);
    expect(handoff.windows.length).toBeGreaterThan(0);
    expect(handoff.furniture.length).toBeGreaterThan(0);
    expect(handoff.equipment.length).toBeGreaterThan(0);
    expect(handoff.stairs.length).toBeGreaterThan(0);
    expect(handoff.stairs[0].footprint).toEqual(expect.any(Array));
    expect(handoff.walls[0].rawPascalId).toBe(handoff.walls[0].id);
    expect(handoff.walls[0].footprintValidation).toEqual(expect.objectContaining({ valid: expect.any(Boolean), codes: expect.any(Array), areaSquareMeters: expect.any(Number), footprint: expect.any(Array) }));
    expect(handoff.relationships.hostedOpenings.length).toBeGreaterThan(0);
    expect(handoff.relationships.levelMembership.length).toBeGreaterThan(0);
  });

  it("keeps the checked-in handoff fixture structurally representative", () => {
    expect(sampleHandoff.schemaVersion).toBe("1.0");
    expect(sampleHandoff.levels.length).toBeGreaterThan(1);
    expect(sampleHandoff.zones.length).toBeGreaterThan(1);
    expect(sampleHandoff.spaces.length).toBeGreaterThan(0);
    expect(sampleHandoff.walls.length).toBeGreaterThan(0);
    expect(sampleHandoff.walls.every((wall) => Array.isArray(wall.footprintValidation.footprint))).toBe(true);
    expect(sampleHandoff.doors.length).toBeGreaterThan(0);
    expect(sampleHandoff.windows.length).toBeGreaterThan(0);
    expect(sampleHandoff.furniture.length).toBeGreaterThan(0);
    expect(sampleHandoff.equipment.length).toBeGreaterThan(0);
    expect(sampleHandoff.stairs.length).toBeGreaterThan(0);
    expect(sampleHandoff.doors[0].rawPascalId).toBe(sampleHandoff.doors[0].id);
    expect(sampleHandoff.relationships.hostedOpenings.length).toBeGreaterThan(0);
  });
});
