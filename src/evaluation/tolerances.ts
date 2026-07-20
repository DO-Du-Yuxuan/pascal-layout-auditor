import type { GeometryTolerances } from "./types";

/** One policy object shared by geometry and rules; never use renderer/pixel tolerances. */
export const G1_GEOMETRY_TOLERANCES: GeometryTolerances = Object.freeze({
  lengthMeters: 1e-6,
  areaSquareMeters: 1e-8,
  pointOnBoundaryMeters: 0.01,
  overlapAreaSquareMeters: 0.01,
});

