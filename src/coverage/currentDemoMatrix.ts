import { pascalCoreManifest } from "./pascalCoreManifest";
export const currentDemoSupportMatrix = Object.fromEntries(
  pascalCoreManifest.map((entry) => [entry.kind, entry.currentDemoStatus]),
);
export const currentVariantSupport = {
  stair: {
    spiral: "supported-demo-symbol",
    curved: "supported-pascal-equivalent",
    straight: "supported-pascal-equivalent",
  },
  shelf: {
    "wall-shelf": "supported-pascal-equivalent",
    bookshelf: "supported-pascal-equivalent",
    "open-rack": "supported-pascal-equivalent",
    cubby: "supported-pascal-equivalent",
  },
  door: {
    opening: "supported-pascal-equivalent",
    hinged: "supported-pascal-equivalent",
    double: "supported-pascal-equivalent",
    french: "supported-pascal-equivalent",
    folding: "supported-pascal-equivalent",
    pocket: "supported-pascal-equivalent",
    barn: "supported-pascal-equivalent",
    sliding: "supported-pascal-equivalent",
    "garage-sectional": "supported-pascal-equivalent",
    "garage-rollup": "supported-pascal-equivalent",
    "garage-tiltup": "supported-pascal-equivalent",
  },
  window: {
    fixed: "partially-supported",
    sliding: "partially-supported",
    casement: "partially-supported",
    awning: "partially-supported",
    hopper: "partially-supported",
    "single-hung": "partially-supported",
    "double-hung": "partially-supported",
    bay: "partially-supported",
    bow: "partially-supported",
    louvered: "partially-supported",
  },
} as const;
export const doorVariantEvidence = Object.fromEntries(Object.entries(currentVariantSupport.door).map(([variant, overallStatus]) => [variant, { schemaRecognition: "partial", rawDataPreservation: "complete", levelResolution: "complete", transformResolution: "complete", physicalOpening: "complete", floorplanRendering: "pascal-equivalent", inspectorSupport: "complete", diagnosticSupport: "complete", testCoverage: "complete", overallStatus, evidence: { files: ["src/geometry/door.ts", "src/main.tsx", "src/coverage/renderedNodeRegistry.ts"], functions: ["resolveDoorPlanGeometry", "Door", "collectCurrentRenderRegistry"], tests: ["src/geometry/door.test.ts", "src/coverage/coverage.test.ts"] } }]));
