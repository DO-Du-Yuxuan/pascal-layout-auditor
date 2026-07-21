import type { GeometryTolerances } from "./types";

/** One policy object shared by geometry and rules; never use renderer/pixel tolerances. */
export const G1_GEOMETRY_TOLERANCES: GeometryTolerances = Object.freeze({
  lengthMeters: 1e-6,
  areaSquareMeters: 1e-8,
  pointOnBoundaryMeters: 0.01,
  overlapAreaSquareMeters: 0.01,
  roomMinimumAreaSquareMeters: 0.5,
  roomNumericalSliverAreaSquareMeters: 0.001,
  roomSlendernessMinimum: 0.03,
  roomWallGapMeters: 0.02,
  zoneRoomMatchMinimumRatio: 0.5,
  zoneCrossRoomMinimumRatio: 0.2,
  zoneOverlapMaximumRatio: 0.05,
  doorPortalSampleClearanceMeters: 0.05,
  doorPortalEndClearanceMeters: 0.02,
});
