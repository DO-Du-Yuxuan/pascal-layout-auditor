import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import sampleText from "../sample-data/Bellevue demo.json?raw";
import "./styles.css";
import "./evaluation.css";
import { parseProject } from "./parser/parse";
import { Diagnostic, NodeData, Parsed } from "./types";
import {
  composePascalTransformWithWorldToSvg,
  finalDimensions,
  normalizeDegrees,
  resolveAncestorLevelId,
  resolveItemPlanTransform,
  resolveWallOpeningTransform,
  rotatedPanDelta,
  svgMatrixString,
  ViewBox,
  zoomViewBoxAtPoint,
  zoomExtents,
} from "./geometry/transform";
import { inspectNodes } from "./diagnostics/check";
import { buildExperimentalWalls, Wall as PascalWall } from "./geometry/walls";
import { hasValidShelfFootprint, resolveShelfData, resolveShelfPlanTransform, shelfCorners, shelfDividerXs, shelfMatrix } from "./geometry/shelf";
import { buildSpiralStairDestinationEntry, buildSpiralStairPlanGeometry, spiralStairCorners } from "./geometry/spiral-stair";
import { buildSlabPlanGeometry } from "./geometry/slab";
import { buildCurvedStairPlanGeometry, buildStraightStairPlanGeometry, stairCorners } from "./geometry/stairs";
import { zoneColor, zoneLabelPoint, zonePoints } from "./geometry/zone";
import { buildAlignedDimensionDisplay, buildExteriorDimensions, DimensionSegment, dimensionDisplayGeometry, dimensionOverlayBounds, EXTENSION_OVERSHOOT_M, INNER_CHAIN_OFFSET_M, OVERALL_CHAIN_OFFSET_M, uprightDimensionAngle } from "./geometry/exterior-dimensions";
import { buildManualMeasurementGeometry, buildMeasurementSnapSegments, formatArea, formatMeasurement, ManualMeasurement, MeasurementMode, MeasurementSnap, MeasurementUnit, resolveMeasurementMode, snapMeasurementPoint } from "./geometry/manual-measurement";
import { ALPHA_THRESHOLD, computeCropPlacement, floorplanImageCropDiagnostics, FloorplanImageCropCacheEntry, loadFloorplanImageCrop, peekFloorplanImageCrop, subscribeFloorplanImageCrop } from "./geometry/floorplan-image-crop";
import { auditSceneCoverage } from "./coverage/auditSceneCoverage";
import { buildEvaluationHandoff } from "./parser/evaluation-handoff";
import { evaluateG1Foundation, EvaluationReport, RuleStatus } from "./evaluation/evaluate";
import { designerRulePresentation, evaluationIssueTargets, EvaluationFocusTarget } from "./evaluation-ui/presentation";
import { evaluationHighlightFor, evaluationHighlightRole, EvaluationHighlight, resolveEvaluationFocus } from "./evaluation-ui/focus";
import { buildBuildingEnvelopes, BuildingEnvelope } from "./evaluation/envelope";
import { buildRoomRegionAnalysis, RoomRegionAnalysis } from "./evaluation/room-regions";

type Visibility = {
  images: boolean;
  boxes: boolean;
  centers: boolean;
  axes: boolean;
  names: boolean;
  zones: boolean;
  slabs: boolean;
  walls: boolean;
  shelves: boolean;
  stairs: boolean;
  openings: boolean;
  dimensions: boolean;
};
type CanvasState = {
  id: number;
  levelId: string;
  viewBox: ViewBox;
  rotation: number;
};
const visibilityDefault: Visibility = {
  images: true,
  boxes: false,
  centers: false,
  axes: false,
  names: false,
  zones: true,
  slabs: true,
  walls: true,
  shelves: true,
  stairs: true,
  openings: true,
  dimensions: true,
};
const emptyView: ViewBox = { minX: -5, minZ: -5, width: 10, height: 10 };
const DEFAULT_CANVAS_ROTATION = 90;
const formatPanelLength = (valueMeters: number, unit: MeasurementUnit) => unit === "millimeters" ? `${formatMeasurement(valueMeters, unit)} mm` : formatMeasurement(valueMeters, unit);

function App() {
  const [data, setData] = useState<Parsed | null>(null),
    [file, setFile] = useState("未导入文件"),
    [canvases, setCanvases] = useState<CanvasState[]>([
      { id: 1, levelId: "", viewBox: emptyView, rotation: DEFAULT_CANVAS_ROTATION },
    ]),
    [nextId, setNextId] = useState(2),
    [selectedId, setSelectedId] = useState<string | null>(null),
    [selectedDimension, setSelectedDimension] = useState<DimensionSegment | null>(null),
    [selectedManualId, setSelectedManualId] = useState<string | null>(null),
    [manualMeasurements, setManualMeasurements] = useState<ManualMeasurement[]>([]),
    [measurementMode, setMeasurementMode] = useState<MeasurementMode>("off"),
    [measurementUnit, setMeasurementUnit] = useState<MeasurementUnit>("millimeters"),
    [imageCropRevision, setImageCropRevision] = useState(0),
    [evaluationReport, setEvaluationReport] = useState<EvaluationReport | null>(null),
    [buildingEnvelopes, setBuildingEnvelopes] = useState<BuildingEnvelope[]>([]),
    [showBuildingEnvelope, setShowBuildingEnvelope] = useState(false),
    [roomRegionAnalysis, setRoomRegionAnalysis] = useState<RoomRegionAnalysis | null>(null),
    [showRoomRegions, setShowRoomRegions] = useState(false),
    [evaluationError, setEvaluationError] = useState<string | null>(null),
    [evaluationHighlights, setEvaluationHighlights] = useState<EvaluationHighlight[]>([]),
    [activeEvaluationHighlight, setActiveEvaluationHighlight] = useState<EvaluationHighlight | null>(null),
    [evaluationFocusMessage, setEvaluationFocusMessage] = useState<string | null>(null),
    [visibility, setVisibility] = useState(visibilityDefault);
  const input = useRef<HTMLInputElement>(null), nextMeasurementId = useRef(1), evaluationRuleElements = useRef<Record<string, HTMLElement | null>>({});
  const nodes = data?.nodes || {};
  const levels = Object.values(nodes).filter((n) => n.type === "level");
  useEffect(() => { const closeMeasurement = (event: KeyboardEvent) => { if (event.key === "Escape") setMeasurementMode("off"); }; window.addEventListener("keydown", closeMeasurement); return () => window.removeEventListener("keydown", closeMeasurement); }, []);
  useEffect(() => subscribeFloorplanImageCrop(() => setImageCropRevision((revision) => revision + 1)), []);
  const load = (text: string, name: string) => {
    try {
      const parsed = parseProject(JSON.parse(text));
      parsed.diagnostics = [
        ...parsed.diagnostics,
        ...inspectNodes(parsed.nodes),
      ];
      const first =
        Object.values(parsed.nodes).find((n) => n.type === "level")?.id || "";
      setData(parsed);
      setEvaluationReport(null);
      setBuildingEnvelopes([]);
      setShowBuildingEnvelope(false);
      setRoomRegionAnalysis(null);
      setShowRoomRegions(false);
      setEvaluationError(null);
      setEvaluationHighlights([]);
      setActiveEvaluationHighlight(null);
      setEvaluationFocusMessage(null);
      setFile(name);
      setSelectedId(null);
      setSelectedDimension(null);
      setSelectedManualId(null);
      setManualMeasurements([]);
      setMeasurementMode("off");
      nextMeasurementId.current = 1;
      setCanvases([
        {
          id: 1,
          levelId: first,
          viewBox: computeViewBox(parsed.nodes, first, true),
          rotation: DEFAULT_CANVAS_ROTATION,
        },
      ]);
      setNextId(2);
    } catch {
      setEvaluationReport(null);
      setBuildingEnvelopes([]);
      setShowBuildingEnvelope(false);
      setRoomRegionAnalysis(null);
      setShowRoomRegions(false);
      setEvaluationError(null);
      setEvaluationHighlights([]);
      setActiveEvaluationHighlight(null);
      setEvaluationFocusMessage(null);
      setData({
        nodes: {},
        raw: null,
        diagnostics: [
          {
            severity: "error",
            code: "invalid_json",
            message: "无法解析 JSON 文件",
          },
        ],
      });
    }
  };
  useEffect(() => { load(sampleText, "Bellevue demo.json"); }, []);
  const updateCanvas = (id: number, update: Partial<CanvasState>) =>
    setCanvases((current) =>
      current.map((canvas) =>
        canvas.id === id ? { ...canvas, ...update } : canvas,
      ),
    );
  const addCanvas = () => {
    const levelId = canvases[0]?.levelId || levels[0]?.id || "";
    setCanvases((current) => [
      ...current,
      {
        id: nextId,
        levelId,
        viewBox: computeViewBox(nodes, levelId, visibility.dimensions),
        rotation: DEFAULT_CANVAS_ROTATION,
      },
    ]);
    setNextId((id) => id + 1);
  };
  const removeCanvas = (id: number) =>
    setCanvases((current) =>
      current.length > 1
        ? current.filter((canvas) => canvas.id !== id)
        : current,
    );
  const dimensionDiagnostics = useMemo(() => Object.values(nodes).filter((node) => node.type === "level").flatMap((level) => buildExteriorDimensions(nodes, level.id).diagnostics), [nodes]);
  const imageDiagnostics = useMemo(() => floorplanImageCropDiagnostics(nodes), [nodes, imageCropRevision]);
  const coverage = useMemo(() => auditSceneCoverage(nodes, Array.isArray(data?.raw?.installedPlugins) ? data.raw.installedPlugins : [], visibility), [nodes, data, visibility]), diagnostics = useMemo(
    () => (data ? [...data.diagnostics, ...transformDiagnostics(nodes), ...coverage.diagnostics, ...dimensionDiagnostics, ...imageDiagnostics] : []),
    [data, nodes, coverage, dimensionDiagnostics, imageDiagnostics],
  );
  const toggleVisibility = (key: keyof Visibility) => {
    const next = !visibility[key];
    setVisibility((current) => key === "images" ? { ...current, images: next, shelves: next } : key === "centers" ? { ...current, centers: next, axes: next } : { ...current, [key]: next });
    if (key === "dimensions") setCanvases((current) => current.map((canvas) => ({ ...canvas, viewBox: computeViewBox(nodes, canvas.levelId, next) })));
  };
  const runFoundationEvaluation = () => {
    if (!data) return;
    try {
      const handoff = buildEvaluationHandoff(data), analysis = buildRoomRegionAnalysis(handoff), report = evaluateG1Foundation(handoff);
      setEvaluationReport(report);
      setBuildingEnvelopes(buildBuildingEnvelopes(handoff));
      setRoomRegionAnalysis(analysis);
      setEvaluationHighlights(evaluationIssueTargets(report.rules, nodes, analysis).map((target) => evaluationHighlightFor(target.ruleId, target, target.targetIndex)));
      setActiveEvaluationHighlight(null);
      setEvaluationError(null);
      setEvaluationFocusMessage(null);
    } catch (error) {
      setEvaluationReport(null);
      setEvaluationError(error instanceof Error ? error.message : "评价器发生未知错误");
    }
  };
  const revealEvaluationRule = (ruleId: string) => {
    window.setTimeout(() => evaluationRuleElements.current[ruleId]?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };
  const focusEvaluationTarget = (ruleId: string, target: EvaluationFocusTarget, targetIndex: number, revealRule = false) => {
    const focus = resolveEvaluationFocus(nodes, target.primaryId, roomRegionAnalysis);
    setEvaluationFocusMessage(focus.renderable ? null : focus.reason ?? "该对象暂时无法在画布中显示。");
    if (!focus.renderable || !focus.levelId || !focus.viewBox) { setActiveEvaluationHighlight(null); return; }
    setActiveEvaluationHighlight(evaluationHighlightFor(ruleId, target, targetIndex));
    if (revealRule) revealEvaluationRule(ruleId);
    setSelectedId(target.primaryId);
    setSelectedDimension(null);
    setSelectedManualId(null);
    setMeasurementMode("off");
    const type = nodes[target.primaryId]?.type;
    setVisibility((current) => ({ ...current, walls: type === "wall" || target.relatedIds.some((id) => nodes[id]?.type === "wall") ? true : current.walls, openings: type === "door" || type === "window" ? true : current.openings, stairs: type === "stair" ? true : current.stairs }));
    setCanvases((current) => {
      const matching = current.findIndex((canvas) => canvas.levelId === focus.levelId), targetCanvas = matching >= 0 ? matching : 0;
      return current.map((canvas, index) => index === targetCanvas ? { ...canvas, levelId: focus.levelId!, viewBox: focus.viewBox! } : canvas);
    });
  };
  const activateEvaluationHighlight = (highlight: EvaluationHighlight) => {
    const rule = evaluationReport?.rules.find((item) => item.ruleId === highlight.ruleId);
    const target = rule && designerRulePresentation(rule, nodes, roomRegionAnalysis).targets[highlight.targetIndex];
    if (target) focusEvaluationTarget(highlight.ruleId, target, highlight.targetIndex, true);
  };
  const selectCanvasObject = (id: string | null) => {
    setSelectedId(id);
    setSelectedDimension(null);
    setSelectedManualId(null);
  };
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <b>Pascal Layout Auditor</b>
          <span>只读 JSON 几何核验</span>
        </div>
        <div className="actions">
          <button className="primary" onClick={() => input.current?.click()}>
            导入 JSON
          </button>
          <button onClick={() => load(sampleText, "Bellevue demo.json")}>
            加载示例
          </button>
          <input
            ref={input}
            hidden
            type="file"
            accept=".json,application/json"
            onChange={(e) =>
              e.target.files?.[0]
                ?.text()
                .then((text) => load(text, e.target.files![0].name))
            }
          />
          <span className="file">{file}</span>
        </div>
      </header>
      <main className="workspace">
        <aside className="sidebar">
          <section className="side-section">
            <div className="side-heading">
              <h2>显示图层</h2>
            </div>
            <div className="visibility">
              {Object.entries({
                images: "家具模型",
                boxes: "物理占地框",
                centers: "家具中心",
                names: "家具名称",
                zones: "Zone",
                slabs: "Slab（楼地面）",
                walls: "墙体",
                openings: "门窗",
                stairs: "楼梯",
                dimensions: "外围尺寸",
              }).map(([key, label]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={visibility[key as keyof Visibility]}
                    onChange={() => toggleVisibility(key as keyof Visibility)}
                  />
                  {label}
                </label>
              ))}
              <label><input type="checkbox" checked={showBuildingEnvelope} onChange={() => setShowBuildingEnvelope((shown) => !shown)} />显示建筑边界</label>
              <label><input type="checkbox" checked={showRoomRegions} onChange={() => setShowRoomRegions((shown) => !shown)} />显示识别空间</label>
            </div>
          </section>
          <Inspector
            node={selectedId ? nodes[selectedId] : null}
            nodes={nodes}
            coverage={coverage}
            dimension={selectedDimension}
            manualMeasurement={manualMeasurements.find((item) => item.id === selectedManualId) ?? null}
            measurementUnit={measurementUnit}
          />
          <Stats nodes={nodes} />
          <EvaluationPanel report={evaluationReport} nodes={nodes} roomAnalysis={roomRegionAnalysis} error={evaluationError} focusMessage={evaluationFocusMessage} activeHighlight={activeEvaluationHighlight} disabled={!data || !Object.keys(nodes).length} onRun={runFoundationEvaluation} onFocus={focusEvaluationTarget} onRegisterRule={(ruleId, element) => { evaluationRuleElements.current[ruleId] = element; }} />
          <Diagnostics diagnostics={diagnostics} />
        </aside>
        <section className="canvas-workspace">
          <div className="canvas-workspace-head">
            <div>
              <span className="eyebrow">PLAN VIEWS</span>
              <h1>画布工作区</h1>
            </div>
            <div className="measurement-toolbar">
              <label>全局单位 <select value={measurementUnit} onChange={(event) => setMeasurementUnit(event.target.value as MeasurementUnit)}><option value="millimeters">公制（mm / m²）</option><option value="feet-inches">英制（ft-in / ft²）</option></select></label>
              <button className={`measure-toggle ${measurementMode !== "off" ? "active" : ""}`} title="开启后点击两点测量；按一次 Shift 切换正交；Esc 退出" onClick={() => setMeasurementMode((current) => current === "off" ? "aligned" : "off")}>{measurementMode === "off" ? "测量" : "退出测量"}</button>
              <button className="primary" onClick={addCanvas}>
                + 添加画布
              </button>
            </div>
          </div>
          <div className={`canvas-grid count-${Math.min(canvases.length, 4)}`}>
            {canvases.map((canvas) => (
              <CanvasPanel
                key={canvas.id}
                canvas={canvas}
                nodes={nodes}
                levels={levels}
                visibility={visibility}
                selectedId={selectedId}
                evaluationHighlights={evaluationHighlights}
                activeEvaluationHighlight={activeEvaluationHighlight}
                buildingEnvelopes={buildingEnvelopes}
                showBuildingEnvelope={showBuildingEnvelope}
                roomAnalysis={roomRegionAnalysis}
                showRoomRegions={showRoomRegions}
                measurementMode={measurementMode}
                measurementUnit={measurementUnit}
                manualMeasurements={manualMeasurements.filter((item) => item.levelId === (canvas.levelId || levels[0]?.id || ""))}
                selectedManualId={selectedManualId}
                onSelect={selectCanvasObject}
                onClearEvaluationHighlight={() => { setEvaluationHighlights([]); setActiveEvaluationHighlight(null); setEvaluationFocusMessage(null); }}
                onActivateEvaluationHighlight={activateEvaluationHighlight}
                onSelectDimension={(dimension) => { setSelectedId(null); setSelectedDimension(dimension); setSelectedManualId(null); }}
                onCreateMeasurement={(measurement) => { const created = { ...measurement, id: `measure-${nextMeasurementId.current++}`, createdAt: Date.now() }; setManualMeasurements((current) => [...current, created]); setSelectedId(null); setSelectedDimension(null); setSelectedManualId(created.id); }}
                onSelectManual={(id) => { setSelectedId(null); setSelectedDimension(null); setSelectedManualId(id); }}
                onDeleteManual={(id) => { setManualMeasurements((current) => current.filter((item) => item.id !== id)); setSelectedManualId((current) => current === id ? null : current); }}
                onUpdate={updateCanvas}
                onRemove={removeCanvas}
                canRemove={canvases.length > 1}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
function CanvasPanel({
  canvas,
  nodes,
  levels,
  visibility,
  selectedId,
  evaluationHighlights,
  activeEvaluationHighlight,
  buildingEnvelopes,
  showBuildingEnvelope,
  roomAnalysis,
  showRoomRegions,
  onSelect,
  onClearEvaluationHighlight,
  onActivateEvaluationHighlight,
  onSelectDimension,
  measurementMode,
  measurementUnit,
  manualMeasurements,
  selectedManualId,
  onCreateMeasurement,
  onSelectManual,
  onDeleteManual,
  onUpdate,
  onRemove,
  canRemove,
}: {
  canvas: CanvasState;
  nodes: Record<string, NodeData>;
  levels: NodeData[];
  visibility: Visibility;
  selectedId: string | null;
  evaluationHighlights: EvaluationHighlight[];
  activeEvaluationHighlight: EvaluationHighlight | null;
  buildingEnvelopes: BuildingEnvelope[];
  showBuildingEnvelope: boolean;
  roomAnalysis: RoomRegionAnalysis | null;
  showRoomRegions: boolean;
  onSelect: (id: string | null) => void;
  onClearEvaluationHighlight: () => void;
  onActivateEvaluationHighlight: (highlight: EvaluationHighlight) => void;
  onSelectDimension: (dimension: DimensionSegment) => void;
  measurementMode: MeasurementMode;
  measurementUnit: MeasurementUnit;
  manualMeasurements: ManualMeasurement[];
  selectedManualId: string | null;
  onCreateMeasurement: (measurement: Omit<ManualMeasurement, "id" | "createdAt">) => void;
  onSelectManual: (id: string | null) => void;
  onDeleteManual: (id: string) => void;
  onUpdate: (id: number, u: Partial<CanvasState>) => void;
  onRemove: (id: number) => void;
  canRemove: boolean;
}) {
  const levelId = canvas.levelId || levels[0]?.id || "";
  return (
    <article className="canvas-card">
      <div className="canvas-card-head">
        <label>
          楼层{" "}
          <select
            value={levelId}
            onChange={(e) =>
              onUpdate(canvas.id, {
                levelId: e.target.value,
                viewBox: computeViewBox(nodes, e.target.value, visibility.dimensions),
              })
            }
          >
            {levels.map((level) => (
              <option value={level.id} key={level.id}>
                {level.name || level.id}
              </option>
            ))}
          </select>
        </label>
        <div className="canvas-tools">
          <button
            title="逆时针旋转 90°"
            onClick={() =>
              onUpdate(canvas.id, { rotation: (canvas.rotation + 270) % 360 })
            }
          >
            ↶ 90°
          </button>
          <button
            title="顺时针旋转 90°"
            onClick={() =>
              onUpdate(canvas.id, { rotation: (canvas.rotation + 90) % 360 })
            }
          >
            ↷ 90°
          </button>
          <button
            onClick={() =>
              onUpdate(canvas.id, { viewBox: computeViewBox(nodes, levelId, visibility.dimensions) })
            }
          >
            适配
          </button>
          {canRemove && (
            <button
              className="danger"
              title="移除此画布"
              onClick={() => onRemove(canvas.id)}
            >
              ×
            </button>
          )}
        </div>
      </div>
      <Plan
        nodes={nodes}
        levelId={levelId}
        viewBox={canvas.viewBox}
        rotation={canvas.rotation}
        setViewBox={(viewBox) => onUpdate(canvas.id, { viewBox })}
        visibility={visibility}
        selectedId={selectedId}
        evaluationHighlights={evaluationHighlights}
        activeEvaluationHighlight={activeEvaluationHighlight}
        buildingEnvelope={buildingEnvelopes.find((envelope) => envelope.levelId === levelId) ?? null}
        showBuildingEnvelope={showBuildingEnvelope}
        roomAnalysis={roomAnalysis}
        showRoomRegions={showRoomRegions}
        onSelect={onSelect}
        onClearEvaluationHighlight={onClearEvaluationHighlight}
        onActivateEvaluationHighlight={onActivateEvaluationHighlight}
        onSelectDimension={onSelectDimension}
        measurementMode={measurementMode}
        measurementUnit={measurementUnit}
        manualMeasurements={manualMeasurements}
        selectedManualId={selectedManualId}
        onCreateMeasurement={onCreateMeasurement}
        onSelectManual={onSelectManual}
        onDeleteManual={onDeleteManual}
      />
    </article>
  );
}
function objectsOnLevel(nodes: Record<string, NodeData>, levelId: string) {
  return Object.values(nodes).filter(
    (node) => resolveAncestorLevelId(node.id, nodes).levelId === levelId,
  );
}
function stairEntriesOnLevel(nodes: Record<string, NodeData>, levelId: string) {
  return Object.values(nodes).filter((node) => node.type === 'stair' && node.stairType === 'spiral' && node.toLevelId === levelId && resolveAncestorLevelId(node.id, nodes).levelId !== levelId);
}
function computeViewBox(
  nodes: Record<string, NodeData>,
  levelId: string,
  includeDimensions = true,
): ViewBox {
  const points: { x: number; z: number }[] = [];
  const rendered = objectsOnLevel(nodes, levelId), exactWallById = new Map(buildExperimentalWalls(rendered.filter((node) => node.type === 'wall') as PascalWall[]).map((wall) => [wall.wallId, wall]));
  for (const node of rendered) {
    if (node.type === "wall") {
      const exact = exactWallById.get(node.id);
      if (exact?.validation.valid) points.push(...exact.footprint.map((point) => ({ x: point.x, z: point.y })));
    } else if (
      (node.type === "zone" || node.type === "slab") &&
      Array.isArray(node.polygon)
    ) {
      for (const point of node.polygon)
        if (Array.isArray(point))
          points.push({ x: point[0], z: point[2] ?? point[1] });
    } else if (node.type === "item") {
      const transform = resolveItemPlanTransform(node.id, nodes),
        dimensions = finalDimensions(node);
      if (transform.status === "ok" && dimensions)
        points.push(
          {
            x: transform.x - dimensions.width / 2,
            z: transform.z - dimensions.depth / 2,
          },
          {
            x: transform.x + dimensions.width / 2,
            z: transform.z + dimensions.depth / 2,
          },
        );
    } else if (node.type === "shelf") {
      points.push(...shelfCorners(node, nodes));
    } else if (node.type === "stair") {
      points.push(...stairCorners(node, nodes));
    }
  }
  for (const stair of stairEntriesOnLevel(nodes, levelId)) points.push(...spiralStairCorners(stair));
  if (includeDimensions && levelId) points.push(...dimensionOverlayBounds(buildExteriorDimensions(nodes, levelId)));
  return zoomExtents(points, 1);
}
function Plan({
  nodes,
  levelId,
  viewBox,
  rotation,
  setViewBox,
  visibility,
  selectedId,
  evaluationHighlights,
  activeEvaluationHighlight,
  buildingEnvelope,
  showBuildingEnvelope,
  roomAnalysis,
  showRoomRegions,
  onSelect,
  onClearEvaluationHighlight,
  onActivateEvaluationHighlight,
  onSelectDimension,
  measurementMode,
  measurementUnit,
  manualMeasurements,
  selectedManualId,
  onCreateMeasurement,
  onSelectManual,
  onDeleteManual,
}: {
  nodes: Record<string, NodeData>;
  levelId: string;
  viewBox: ViewBox;
  rotation: number;
  setViewBox: (v: ViewBox) => void;
  visibility: Visibility;
  selectedId: string | null;
  evaluationHighlights: EvaluationHighlight[];
  activeEvaluationHighlight: EvaluationHighlight | null;
  buildingEnvelope: BuildingEnvelope | null;
  showBuildingEnvelope: boolean;
  roomAnalysis: RoomRegionAnalysis | null;
  showRoomRegions: boolean;
  onSelect: (id: string | null) => void;
  onClearEvaluationHighlight: () => void;
  onActivateEvaluationHighlight: (highlight: EvaluationHighlight) => void;
  onSelectDimension: (dimension: DimensionSegment) => void;
  measurementMode: MeasurementMode;
  measurementUnit: MeasurementUnit;
  manualMeasurements: ManualMeasurement[];
  selectedManualId: string | null;
  onCreateMeasurement: (measurement: Omit<ManualMeasurement, "id" | "createdAt">) => void;
  onSelectManual: (id: string | null) => void;
  onDeleteManual: (id: string) => void;
}) {
  const drag = useRef<{ x: number; y: number; box: ViewBox; moved: boolean } | null>(null), suppressClick = useRef(false), svgRef = useRef<SVGSVGElement>(null), sceneRef = useRef<SVGGElement>(null),
    [measurementStart, setMeasurementStart] = useState<MeasurementSnap | null>(null),
    [measurementHover, setMeasurementHover] = useState<MeasurementSnap | null>(null),
    [orthogonalLock, setOrthogonalLock] = useState(false),
    rendered = objectsOnLevel(nodes, levelId),
    items = rendered.filter((n) => n.type === "item"),
    zones = rendered.filter((n) => n.type === "zone"),
    wallNodes = rendered.filter((n) => n.type === "wall") as PascalWall[],
    exactWalls = useMemo(
      () => buildExperimentalWalls(wallNodes),
      [wallNodes],
    ),
    stairEntries = stairEntriesOnLevel(nodes, levelId),
    exteriorDimensions = useMemo(() => buildExteriorDimensions(nodes, levelId), [nodes, levelId]),
    cx = viewBox.minX + viewBox.width / 2,
    cz = viewBox.minZ + viewBox.height / 2,
    vb = `${viewBox.minX} ${viewBox.minZ} ${viewBox.width} ${viewBox.height}`;
  const highlightsOnLevel = evaluationHighlights.filter((highlight) => (resolveAncestorLevelId(highlight.primaryId, nodes).levelId ?? roomAnalysis?.rooms.find((room) => room.roomRegionId === highlight.primaryId)?.levelId) === levelId);
  const snapSegments = useMemo(() => buildMeasurementSnapSegments(nodes, levelId), [nodes, levelId]);
  const activeMeasurementMode = resolveMeasurementMode(measurementStart?.point ?? null, measurementHover?.point ?? null, orthogonalLock);
  useEffect(() => { setMeasurementStart(null); setMeasurementHover(null); setOrthogonalLock(false); }, [measurementMode, levelId]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Shift" && !event.repeat) setOrthogonalLock((locked) => !locked);
      if (event.key === "Escape") { setMeasurementStart(null); setMeasurementHover(null); }
      if ((event.key === "Delete" || event.key === "Backspace") && selectedManualId) { event.preventDefault(); onDeleteManual(selectedManualId); }
    };
    window.addEventListener("keydown", onKeyDown); return () => { window.removeEventListener("keydown", onKeyDown); };
  }, [selectedManualId, onDeleteManual]);
  const eventWorldPoint = (event: { clientX: number; clientY: number }): [number, number] | null => {
    const matrix = sceneRef.current?.getScreenCTM(); if (!matrix) return null;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse()); return [point.x, point.y];
  };
  const snapAtEvent = (event: { clientX: number; clientY: number }) => {
    const point = eventWorldPoint(event); if (!point) return null;
    const width = svgRef.current?.clientWidth || 1, height = svgRef.current?.clientHeight || 1, tolerance = Math.max(viewBox.width / width, viewBox.height / height) * 12;
    return snapMeasurementPoint(point, snapSegments, tolerance);
  };
  const commitMeasurementPoint = (snap: MeasurementSnap) => {
    if (!measurementStart) { setMeasurementStart(snap); setMeasurementHover(snap); return; }
    if (measurementMode === "off") return;
    const mode = resolveMeasurementMode(measurementStart.point, snap.point, orthogonalLock), geometry = buildManualMeasurementGeometry(measurementStart.point, snap.point, mode);
    if (geometry.valueMeters > .0005) onCreateMeasurement({ levelId, mode, start: measurementStart, end: snap });
    setMeasurementStart(null); setMeasurementHover(null);
  };
  return (
    <div
      className={`plan ${measurementMode !== "off" ? "measuring" : ""}`}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
      onWheel={(e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 0.9 : 1.1;
        const matrix = svgRef.current?.getScreenCTM();
        if (!matrix) return;
        const point = new DOMPoint(e.clientX, e.clientY).matrixTransform(matrix.inverse());
        setViewBox(zoomViewBoxAtPoint(viewBox, { x: point.x, z: point.y }, factor));
      }}
      onPointerDown={(e) => {
        if (measurementMode !== "off" || e.button !== 0) return;
        drag.current = { x: e.clientX, y: e.clientY, box: viewBox, moved: false };
      }}
      onPointerMove={(e) => {
        if (measurementMode !== "off") return;
        if (!drag.current) return;
        const screenDx = e.clientX - drag.current.x, screenDz = e.clientY - drag.current.y;
        if (!drag.current.moved && Math.hypot(screenDx, screenDz) < 3) return;
        if (!drag.current.moved) {
          drag.current.moved = true;
          e.currentTarget.setPointerCapture?.(e.pointerId);
        }
        const dx =
            (screenDx * drag.current.box.width) /
            (e.currentTarget.clientWidth || 1),
          dz =
            (screenDz * drag.current.box.height) /
            (e.currentTarget.clientHeight || 1),
          pan = rotatedPanDelta(dx, dz, rotation);
        setViewBox({
          ...drag.current.box,
          minX: drag.current.box.minX + pan.x,
          minZ: drag.current.box.minZ + pan.z,
        });
      }}
      onPointerUp={(e) => {
        if (!drag.current) return;
        if (drag.current?.moved) {
          suppressClick.current = true;
          window.setTimeout(() => { suppressClick.current = false; }, 0);
        }
        drag.current = null;
        if (e.currentTarget.hasPointerCapture?.(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => { drag.current = null; }}
    >
      <svg ref={svgRef} viewBox={vb}
        onPointerMove={(event) => { if (measurementMode !== "off") { const snap = snapAtEvent(event); if (snap) setMeasurementHover(snap); } }}
        onPointerLeave={() => { if (!measurementStart) setMeasurementHover(null); }}
        onContextMenu={(event) => { if (measurementMode !== "off") { event.preventDefault(); setMeasurementStart(null); setMeasurementHover(null); } }}
        onClickCapture={(event) => {
          if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; return; }
          const target = event.target as Element, deleteId = target.closest("[data-delete-measurement]")?.getAttribute("data-delete-measurement"), measurementId = target.closest("[data-manual-measurement]")?.getAttribute("data-manual-measurement");
          if (deleteId || measurementId) {
            event.preventDefault(); event.stopPropagation();
            if (deleteId) onDeleteManual(deleteId); else if (measurementId) onSelectManual(measurementId);
            return;
          }
          if (measurementMode === "off") return;
          event.preventDefault(); event.stopPropagation();
          const snap = snapAtEvent(event); if (snap) commitMeasurementPoint(snap);
        }}
        onClick={(event) => { if (!(event.target as Element).closest("[data-selectable]")) { onSelect(null); onSelectManual(null); } }}>
        <defs>
          <marker
            id={`arrow-${levelId}`}
            markerWidth=".18"
            markerHeight=".18"
            refX=".16"
            refY=".09"
            orient="auto"
          >
            <path d="M0,0 L.18,.09 L0,.18z" fill="#e75c3c" />
          </marker>
          <marker id="stair-up" markerWidth=".18" markerHeight=".18" refX=".16" refY=".09" orient="auto"><path d="M0,0 L.18,.09 L0,.18z" fill="#171717" /></marker>
          <marker id="stair-down" markerWidth=".18" markerHeight=".18" refX=".16" refY=".09" orient="auto"><path d="M0,0 L.18,.09 L0,.18z" fill="#59635f" /></marker>
        </defs>
        <rect
          x={viewBox.minX}
          y={viewBox.minZ}
          width={viewBox.width}
          height={viewBox.height}
          fill="#f7f8f5"
        />
        <g ref={sceneRef} style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${cx}px ${cz}px`, transition: "transform 240ms cubic-bezier(.2,.8,.2,1)" }}>
          <g className={highlightsOnLevel.length ? "evaluation-scene-dimmed" : undefined}>
          {visibility.slabs && rendered.filter((n) => n.type === "slab" && n.visible !== false).map((n) => <Slab key={n.id} node={n} selected={selectedId === n.id} onSelect={onSelect} />)}
          {visibility.zones &&
            zones.map((n) => <Polygon key={n.id} node={n} onSelect={onSelect} />)}
          {visibility.walls &&
            exactWalls.map((n) => (
                <Wall
                  key={n.wallId}
                  node={nodes[n.wallId]}
                  footprint={n.footprint}
                  valid={n.validation.valid}
                  diagnosticCodes={n.validation.codes}
                  selected={selectedId === n.wallId}
                  onSelect={onSelect}
                />
              ))}
          {visibility.shelves && rendered.filter((n) => n.type === "shelf").map((n) => <Shelf key={n.id} node={n} nodes={nodes} selected={selectedId === n.id} onSelect={onSelect} />)}
          {visibility.openings &&
            rendered
              .filter((n) => n.type === "door" || n.type === "window")
              .map((n) => (
                <Opening
                  key={n.id}
                  node={n}
                  nodes={nodes}
                  selected={selectedId === n.id}
                  onSelect={onSelect}
                />
              ))}
          {visibility.stairs && rendered
            .filter((n) => n.type === "stair")
            .map((n) => (
              <Stair key={n.id} node={n} nodes={nodes} onSelect={onSelect} />
            ))}
          {visibility.stairs && stairEntries.map((n) => <StairEntry key={`entry-${n.id}`} node={n} onSelect={onSelect} />)}
          {items.map((n) => (
            <Furniture
              key={n.id}
              node={n}
              nodes={nodes}
              visibility={visibility}
              selected={selectedId === n.id}
              viewRotation={rotation}
              markerId={`arrow-${levelId}`}
              onSelect={onSelect}
            />
          ))}
          {visibility.zones && zones.map((n) => <ZoneLabel key={`zone-label-${n.id}`} node={n} viewRotation={rotation} />)}
          {visibility.dimensions && <ExteriorDimensions report={exteriorDimensions} viewRotation={rotation} unit={measurementUnit} onSelect={onSelectDimension} />}
          <ManualMeasurements measurements={manualMeasurements} preview={measurementMode !== "off" && measurementStart && measurementHover ? { mode: activeMeasurementMode, start: measurementStart, end: measurementHover } : null} unit={measurementUnit} viewRotation={rotation} selectedId={selectedManualId} onSelect={onSelectManual} onDelete={onDeleteManual} />
          {measurementMode !== "off" && measurementHover && <SnapIndicator snap={measurementHover} active={Boolean(measurementStart)} />}
          </g>
          {highlightsOnLevel.length > 0 && <EvaluationHighlightOverlay highlights={highlightsOnLevel} activeHighlight={activeEvaluationHighlight} nodes={nodes} exactWalls={exactWalls} onActivate={onActivateEvaluationHighlight} />}
          {showBuildingEnvelope && buildingEnvelope?.usableForEvaluation && <BuildingEnvelopeOverlay envelope={buildingEnvelope} />}
          {roomAnalysis && (showRoomRegions || highlightsOnLevel.some((highlight) => highlight.ruleId === "G1-012")) && <RoomRegionOverlay analysis={roomAnalysis} nodes={nodes} levelId={levelId} showAll={showRoomRegions} highlights={highlightsOnLevel} onActivate={onActivateEvaluationHighlight} />}
        </g>
      </svg>
      {measurementMode !== "off" && <div className="measure-hint">{measurementStart ? `${orthogonalLock ? activeMeasurementMode === "horizontal" ? "水平正交已开启" : "垂直正交已开启" : "自由对齐"} · 点击第二点 · Shift 切换正交 · Esc 退出` : `${orthogonalLock ? "正交已开启" : "正交已关闭"} · 点击第一点 · Shift 切换正交 · Esc 退出`}</div>}
      <Compass rotation={rotation} />
      {highlightsOnLevel.length > 0 && <div className="evaluation-highlight-legend"><span><i className="primary" />问题对象（点击红框查看说明）</span><span><i className="related" />关联对象</span><span><i className="muted" />其他对象</span><button onClick={onClearEvaluationHighlight}>关闭高亮</button></div>}
      {showRoomRegions && <div className="room-region-legend"><span><i className="room" />Room Region（物理空间）</span><span><i className="zone" />Zone（功能区域）</span><span><i className="warning" />未匹配/部分匹配</span></div>}
      <div className="legend">{formatPanelLength(viewBox.width, measurementUnit)} × {formatPanelLength(viewBox.height, measurementUnit)}</div>
    </div>
  );
}
function BuildingEnvelopeOverlay({ envelope }: { envelope: BuildingEnvelope }) {
  return <g className="building-envelope-overlay" pointerEvents="none">{envelope.polygons.map((polygon, index) => <g key={index}>{polygon.map((ring, ringIndex) => <polygon key={ringIndex} points={ring.map(([x, z]) => `${x},${z}`).join(" ")} fill={ringIndex === 0 ? "#ed8b2c" : "#f7f8f5"} fillOpacity={ringIndex === 0 ? ".05" : "1"} stroke="#ed8b2c" strokeWidth={ringIndex === 0 ? "2" : "1"} vectorEffect="non-scaling-stroke" />)}</g>)}</g>;
}
function RoomRegionOverlay({ analysis, nodes, levelId, showAll, highlights, onActivate }: { analysis: RoomRegionAnalysis; nodes: Record<string, NodeData>; levelId: string; showAll: boolean; highlights: EvaluationHighlight[]; onActivate: (highlight: EvaluationHighlight) => void }) {
  const rooms = analysis.rooms.filter((room) => room.levelId === levelId), matches = new Map(analysis.zoneMatches.map((match) => [match.zoneId, match]));
  return <g className="room-region-overlay">
    {rooms.map((room, index) => { const highlight = highlights.find((item) => item.primaryId === room.roomRegionId), warning = !room.usableForEvaluation || analysis.unmatchedRoomRegionIds.includes(room.roomRegionId), outer = room.polygons[0]?.[0] ?? [], center = outer.length ? { x: outer.reduce((sum, point) => sum + point[0], 0) / outer.length, z: outer.reduce((sum, point) => sum + point[1], 0) / outer.length } : null; if (!showAll && !highlight) return null; return <g key={room.roomRegionId} data-room-region={room.roomRegionId} className={highlight ? "problem-room" : warning ? "warning-room" : "matched-room"} onClick={highlight ? (event) => { event.stopPropagation(); onActivate(highlight); } : undefined}>{room.polygons.flatMap((polygon, polygonIndex) => polygon.map((ring, ringIndex) => <polygon key={`${polygonIndex}-${ringIndex}`} points={ring.map(([x, z]) => `${x},${z}`).join(" ")} fill={ringIndex ? "#f7f8f5" : highlight ? "#e23d35" : warning ? "#d8a449" : "#4f8f72"} fillOpacity={ringIndex ? 1 : .14} stroke={highlight ? "#e23d35" : warning ? "#d8a449" : "#4f8f72"} strokeWidth={highlight ? "3" : "1.5"} vectorEffect="non-scaling-stroke" />))}{showAll && center && <text x={center.x} y={center.z} className="room-region-label" textAnchor="middle" dominantBaseline="middle">R{index + 1} · {room.areaSquareMeters.toFixed(1)} m²</text>}</g>; })}
    {showAll && Object.values(nodes).filter((node) => node.type === "zone" && resolveAncestorLevelId(node.id, nodes).levelId === levelId).map((zone) => { const points = zonePoints(zone), match = matches.get(zone.id), warning = match?.relationship === "unmatched-zone" || match?.relationship === "zone-crosses-rooms" || match?.relationship === "partial"; return points.length >= 3 ? <polygon key={zone.id} data-zone-match={match?.relationship ?? "unmatched-zone"} points={points.map((point) => `${point.x},${point.z}`).join(" ")} fill="none" stroke={warning ? "#d86756" : "#3569a8"} strokeDasharray="6 4" strokeWidth="2" vectorEffect="non-scaling-stroke" /> : null; })}
  </g>;
}
function EvaluationHighlightOverlay({ highlights, activeHighlight, nodes, exactWalls, onActivate }: { highlights: EvaluationHighlight[]; activeHighlight: EvaluationHighlight | null; nodes: Record<string, NodeData>; exactWalls: ReturnType<typeof buildExperimentalWalls>; onActivate: (highlight: EvaluationHighlight) => void }) {
  const wallById = new Map(exactWalls.map((wall) => [wall.wallId, wall]));
  const marked = new Map<string, { highlight: EvaluationHighlight; role: "primary" | "related" }>();
  highlights.forEach((highlight) => [highlight.primaryId, ...highlight.relatedIds].forEach((id) => {
    const role = evaluationHighlightRole(highlight, id);
    if (role && (!marked.has(id) || role === "primary")) marked.set(id, { highlight, role });
  }));
  return <g className="evaluation-highlight-overlay">{[...marked.entries()].map(([id, marker]) => {
    const { highlight, role } = marker, node = nodes[id];
    if (!node || !role) return null;
    const color = role === "primary" ? "#e23d35" : "#ed8b2c", fillOpacity = role === "primary" ? .28 : .18, active = activeHighlight?.primaryId === highlight.primaryId;
    const activate = (event: React.MouseEvent<SVGElement>) => { event.preventDefault(); event.stopPropagation(); onActivate(highlight); };
    if (node.type === "wall") {
      const wall = wallById.get(id);
      if (wall?.validation.valid && wall.footprint.length >= 3) return <polygon key={id} className={active ? "active" : undefined} data-evaluation-highlight={id} data-highlight-role={role} points={wall.footprint.map((point) => `${point.x},${point.y}`).join(" ")} fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="3" vectorEffect="non-scaling-stroke" onClick={activate} />;
      if (Array.isArray(node.start) && node.start.length >= 2 && node.start.slice(0, 2).every(Number.isFinite)) return <g key={id} className={active ? "active" : undefined} data-evaluation-highlight={id} data-highlight-role={role} onClick={activate}><circle cx={node.start[0]} cy={node.start[1]} r=".24" fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="3" vectorEffect="non-scaling-stroke"/><line x1={node.start[0] - .32} y1={node.start[1]} x2={node.start[0] + .32} y2={node.start[1]} stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke"/><line x1={node.start[0]} y1={node.start[1] - .32} x2={node.start[0]} y2={node.start[1] + .32} stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke"/></g>;
    }
    if (node.type === "door" || node.type === "window") {
      const transform = resolveWallOpeningTransform(node, nodes), width = Number(node.width);
      if (transform && Number.isFinite(width) && width > 0) return <g key={id} className={active ? "active" : undefined} data-evaluation-highlight={id} data-highlight-role={role} transform={`translate(${transform.x} ${transform.z}) rotate(${transform.rotationY * 180 / Math.PI})`} onClick={activate}><rect x={-width / 2} y="-.16" width={width} height=".32" fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="3" vectorEffect="non-scaling-stroke" /></g>;
    }
    if (node.type === "stair") {
      const corners = stairCorners(node, nodes);
      if (corners.length >= 3) return <polygon key={id} className={active ? "active" : undefined} data-evaluation-highlight={id} data-highlight-role={role} points={corners.map((point) => `${point.x},${point.z}`).join(" ")} fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="3" vectorEffect="non-scaling-stroke" onClick={activate} />;
    }
    if (node.type === "zone") {
      const points = zonePoints(node);
      if (points.length >= 3) return <polygon key={id} className={active ? "active" : undefined} data-evaluation-highlight={id} data-highlight-role={role} points={points.map((point) => `${point.x},${point.z}`).join(" ")} fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="3" vectorEffect="non-scaling-stroke" onClick={activate} />;
    }
    return null;
  })}</g>;
}
function Compass({ rotation }: { rotation: number }) {
  return (
    <div className="compass" title={`视图旋转 ${rotation}°`}>
      <div
        className="compass-arrow"
        style={{ transform: `rotate(${DEFAULT_CANVAS_ROTATION - rotation}deg)` }}
      >
        ▲
      </div>
      <b>N</b>
    </div>
  );
}
function Polygon({ node, onSelect }: { node: NodeData; onSelect: (id: string) => void }) {
  const polygon = zonePoints(node), color = zoneColor(node);
  if (polygon.length < 3) return null;
  const points = polygon.map((point) => `${point.x},${point.z}`).join(" ");
  return <polygon data-selectable points={points} fill={color} fillOpacity=".12" stroke={color} strokeOpacity=".32" strokeWidth=".03" onClick={() => onSelect(node.id)} />;
}
function ZoneLabel({ node, viewRotation }: { node: NodeData; viewRotation: number }) {
  const label = zoneLabelPoint(node), color = zoneColor(node);
  if (!label) return null;
  return <text x={label.x} y={label.z} className="zone-label" fontSize=".22" fontWeight="700" textAnchor="middle" dominantBaseline="middle" style={{ fill: color, transform: `rotate(${-viewRotation}deg)`, transformOrigin: `${label.x}px ${label.z}px`, transition: "transform 240ms cubic-bezier(.2,.8,.2,1)" }} stroke="#ffffff" strokeWidth=".035" strokeOpacity=".9" paintOrder="stroke" pointerEvents="none">{node.name || "Zone"}</text>;
}
function ExteriorDimensions({ report, viewRotation, unit, onSelect }: { report: ReturnType<typeof buildExteriorDimensions>; viewRotation: number; unit: MeasurementUnit; onSelect: (dimension: DimensionSegment) => void }) {
  const color = "#4b5563";
  return <g className="exterior-dimensions">{buildAlignedDimensionDisplay(report).map((dimension) => {
    const displayValue = formatMeasurement(dimension.valueMeters, unit), display = dimensionDisplayGeometry(report, dimension), offset = dimension.dimensionLayer === "inner-chain" ? INNER_CHAIN_OFFSET_M : OVERALL_CHAIN_OFFSET_M,
      start: [number, number] = [display.faceStart[0] + dimension.outwardNormal[0] * offset, display.faceStart[1] + dimension.outwardNormal[1] * offset],
      end: [number, number] = [display.faceEnd[0] + dimension.outwardNormal[0] * offset, display.faceEnd[1] + dimension.outwardNormal[1] * offset],
      midpoint: [number, number] = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2],
      textWidth = Math.max(.24, displayValue.length * .105), fitsInside = dimension.valueMeters > textWidth + .16,
      label: [number, number] = fitsInside ? midpoint : [end[0] + dimension.direction[0] * (textWidth / 2 + .14), end[1] + dimension.direction[1] * (textWidth / 2 + .14)],
      gapHalf = Math.min(textWidth / 2 + .05, dimension.valueMeters * .4),
      beforeGap: [number, number] = [midpoint[0] - dimension.direction[0] * gapHalf, midpoint[1] - dimension.direction[1] * gapHalf],
      afterGap: [number, number] = [midpoint[0] + dimension.direction[0] * gapHalf, midpoint[1] + dimension.direction[1] * gapHalf],
      extensionStart: [number, number] = [start[0] + dimension.outwardNormal[0] * EXTENSION_OVERSHOOT_M, start[1] + dimension.outwardNormal[1] * EXTENSION_OVERSHOOT_M],
      extensionEnd: [number, number] = [end[0] + dimension.outwardNormal[0] * EXTENSION_OVERSHOOT_M, end[1] + dimension.outwardNormal[1] * EXTENSION_OVERSHOOT_M],
      tick: [number, number] = [(dimension.direction[0] + dimension.outwardNormal[0]) * .065, (dimension.direction[1] + dimension.outwardNormal[1]) * .065], angle = uprightDimensionAngle(dimension.direction, viewRotation);
    return <g data-selectable key={dimension.id} onClick={() => onSelect(dimension)} style={{ cursor: "pointer" }}>
      <line x1={display.edgeStart[0]} y1={display.edgeStart[1]} x2={extensionStart[0]} y2={extensionStart[1]} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <line x1={display.edgeEnd[0]} y1={display.edgeEnd[1]} x2={extensionEnd[0]} y2={extensionEnd[1]} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      {fitsInside ? <><line x1={start[0]} y1={start[1]} x2={beforeGap[0]} y2={beforeGap[1]} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke"/><line x1={afterGap[0]} y1={afterGap[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke"/></> : <line x1={start[0]} y1={start[1]} x2={label[0] + dimension.direction[0] * textWidth / 2} y2={label[1] + dimension.direction[1] * textWidth / 2} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke"/>}
      {[start, end].map((point, index) => <line key={index} x1={point[0] - tick[0]} y1={point[1] - tick[1]} x2={point[0] + tick[0]} y2={point[1] + tick[1]} stroke={color} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />)}
      <text x={label[0]} y={label[1]} transform={`rotate(${angle} ${label[0]} ${label[1]})`} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Mono, monospace" fontSize=".18" fill={color} stroke="#f7f8f5" strokeWidth=".04" paintOrder="stroke">{displayValue}</text>
    </g>;
  })}</g>;
}
function ManualMeasurements({ measurements, preview, unit, viewRotation, selectedId, onSelect, onDelete }: { measurements: ManualMeasurement[]; preview: { mode: Exclude<MeasurementMode, "off">; start: MeasurementSnap; end: MeasurementSnap } | null; unit: MeasurementUnit; viewRotation: number; selectedId: string | null; onSelect: (id: string | null) => void; onDelete: (id: string) => void }) {
  return <g className="manual-measurements">
    {measurements.map((measurement) => <ManualMeasurementGraphic key={measurement.id} measurement={measurement} unit={unit} viewRotation={viewRotation} selected={selectedId === measurement.id} onSelect={onSelect} onDelete={onDelete} />)}
    {preview && <ManualMeasurementGraphic measurement={{ id: "measurement-preview", levelId: "", createdAt: 0, ...preview }} unit={unit} viewRotation={viewRotation} selected={false} preview />}
  </g>;
}
function ManualMeasurementGraphic({ measurement, unit, viewRotation, selected, preview = false, onSelect, onDelete }: { measurement: ManualMeasurement; unit: MeasurementUnit; viewRotation: number; selected: boolean; preview?: boolean; onSelect?: (id: string | null) => void; onDelete?: (id: string) => void }) {
  const geometry = buildManualMeasurementGeometry(measurement.start.point, measurement.end.point, measurement.mode), color = preview ? "#d97706" : selected ? "#e75c3c" : "#246b72", label = formatMeasurement(geometry.valueMeters, unit), angle = uprightDimensionAngle(geometry.direction, viewRotation), tick: [number, number] = [geometry.normal[0] * .08, geometry.normal[1] * .08], deletePoint: [number, number] = [geometry.labelPoint[0] + geometry.normal[0] * .32, geometry.labelPoint[1] + geometry.normal[1] * .32];
  if (geometry.valueMeters <= .0005) return null;
  return <g data-selectable={!preview || undefined} data-manual-measurement={!preview ? measurement.id : undefined} onClick={(event) => { if (!preview) { event.stopPropagation(); onSelect?.(measurement.id); } }} style={{ cursor: preview ? "crosshair" : "pointer" }}>
    {geometry.extensionLines.map((line, index) => <line key={index} x1={line.start[0]} y1={line.start[1]} x2={line.end[0]} y2={line.end[1]} stroke={color} strokeWidth="1" strokeDasharray={preview ? "4 3" : undefined} vectorEffect="non-scaling-stroke" />)}
    <line x1={geometry.measurementStart[0]} y1={geometry.measurementStart[1]} x2={geometry.measurementEnd[0]} y2={geometry.measurementEnd[1]} stroke={color} strokeWidth={selected ? "1.8" : "1.2"} strokeDasharray={preview ? "5 4" : undefined} vectorEffect="non-scaling-stroke" />
    {[geometry.measurementStart, geometry.measurementEnd].map((point, index) => <line key={index} x1={point[0] - tick[0]} y1={point[1] - tick[1]} x2={point[0] + tick[0]} y2={point[1] + tick[1]} stroke={color} strokeWidth="1.3" vectorEffect="non-scaling-stroke" />)}
    <circle cx={measurement.start.point[0]} cy={measurement.start.point[1]} r=".045" fill={color} />
    <circle cx={measurement.end.point[0]} cy={measurement.end.point[1]} r=".045" fill={color} />
    <text x={geometry.labelPoint[0]} y={geometry.labelPoint[1]} transform={`rotate(${angle} ${geometry.labelPoint[0]} ${geometry.labelPoint[1]})`} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Mono, monospace" fontSize=".18" fill={color} stroke="#f7f8f5" strokeWidth=".045" paintOrder="stroke" pointerEvents="none">{label}</text>
    {selected && !preview && <g data-delete-measurement={measurement.id} onClick={(event) => { event.stopPropagation(); onDelete?.(measurement.id); }} style={{ cursor: "pointer" }}><circle cx={deletePoint[0]} cy={deletePoint[1]} r=".14" fill="#fff" stroke="#d84f42" strokeWidth="1.4" vectorEffect="non-scaling-stroke"/><line x1={deletePoint[0] - .05} y1={deletePoint[1] - .05} x2={deletePoint[0] + .05} y2={deletePoint[1] + .05} stroke="#d84f42" strokeWidth="1.8" vectorEffect="non-scaling-stroke"/><line x1={deletePoint[0] + .05} y1={deletePoint[1] - .05} x2={deletePoint[0] - .05} y2={deletePoint[1] + .05} stroke="#d84f42" strokeWidth="1.8" vectorEffect="non-scaling-stroke"/></g>}
  </g>;
}
function SnapIndicator({ snap, active }: { snap: MeasurementSnap; active: boolean }) {
  const color = snap.kind === "free" ? "#d97706" : "#16a085";
  return <g pointerEvents="none"><circle cx={snap.point[0]} cy={snap.point[1]} r={active ? ".095" : ".075"} fill="#fff" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke"/><line x1={snap.point[0] - .05} y1={snap.point[1]} x2={snap.point[0] + .05} y2={snap.point[1]} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke"/><line x1={snap.point[0]} y1={snap.point[1] - .05} x2={snap.point[0]} y2={snap.point[1] + .05} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke"/></g>;
}
function Slab({ node, selected, onSelect }: { node: NodeData; selected: boolean; onSelect: (id: string) => void }) {
  const geometry = buildSlabPlanGeometry(node);
  if (!geometry) return null;
  return <path data-selectable d={geometry.path} fill={selected ? "#dbe8dc" : "#e8eee8"} fillRule="evenodd" clipRule="evenodd" stroke={selected ? "#e75c3c" : "#b5c2b8"} strokeWidth={selected ? ".04" : ".018"} opacity=".78" onClick={() => onSelect(node.id)} />;
}
function Wall({
  node,
  footprint,
  valid,
  diagnosticCodes,
  selected,
  onSelect,
}: {
  node: NodeData;
  footprint?: Array<{ x: number; y: number }>;
  valid?: boolean;
  diagnosticCodes?: string[];
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  if (!Array.isArray(node.start) || !Array.isArray(node.end)) return null;
  if (footprint?.length && valid)
    return (
      <polygon
        data-selectable
        points={footprint.map((point) => `${point.x},${point.y}`).join(" ")}
        fill={selected ? "#e75c3c" : "#303a3b"}
        stroke="#202929"
        strokeWidth=".018"
        vectorEffect="non-scaling-stroke"
        onClick={() => onSelect(node.id)}
      />
    );
  if (footprint && !valid)
    return (
      <g
        data-selectable
        aria-label={`experimental wall diagnostic: ${diagnosticCodes?.join(", ") || "unknown"}`}
        onClick={() => onSelect(node.id)}
      >
        <title>{diagnosticCodes?.join(", ") || "wall_invalid_footprint"}</title>
        <line
          x1={node.start[0]}
          y1={node.start[1]}
          x2={node.end[0]}
          y2={node.end[1]}
          stroke="#d95446"
          strokeWidth=".05"
        />
        <circle cx={node.start[0]} cy={node.start[1]} r=".12" fill="#d95446" />
      </g>
    );
  return null;
}
function Shelf({ node, nodes, selected, onSelect }: { node: NodeData; nodes: Record<string, NodeData>; selected: boolean; onSelect: (id: string) => void }) {
  const data = resolveShelfData(node), matrix = shelfMatrix(node, nodes);
  if (!matrix || !hasValidShelfFootprint(node)) return null;
  return <g data-selectable transform={svgMatrixString(matrix)} onClick={() => onSelect(node.id)} className="shelf">
    <rect x={-data.width / 2} y={-data.depth / 2} width={data.width} height={data.depth} fill="#d6d3d1" stroke={selected ? "#e75c3c" : "#1f2937"} strokeWidth={selected ? ".045" : ".015"} opacity=".9" />
    {shelfDividerXs(data).map((x) => <line key={x} x1={x} x2={x} y1={-data.depth / 2 + data.thickness} y2={data.depth / 2 - data.thickness} stroke="#1f2937" strokeWidth=".012" opacity=".7" />)}
  </g>;
}
function Opening({
  node,
  nodes,
  selected,
  onSelect,
}: {
  node: NodeData;
  nodes: Record<string, NodeData>;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const transform = resolveWallOpeningTransform(node, nodes);
  if (!transform) return null;
  const width = Number.isFinite(node.width) ? node.width : 0.9,
    depth = 0.12,
    angle = (transform.rotationY * 180) / Math.PI;
  if (node.type === "door") {
    const color = selected ? "#e75c3c" : "#9b6736",
      doorType = node.doorType ?? "hinged",
      isDouble = doorType === "double" || doorType === "french",
      rotationY = Array.isArray(node.rotation) && Number.isFinite(node.rotation[1]) ? node.rotation[1] : 0,
      normalizedRotation = ((rotationY % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2),
      flipped = normalizedRotation > Math.PI / 2 && normalizedRotation < Math.PI * 3 / 2,
      baseHinges = node.hingesSide ?? "left",
      hinges = flipped ? (baseHinges === "left" ? "right" : "left") : baseHinges,
      baseSwing = node.swingDirection ?? "inward",
      swing = flipped ? (baseSwing === "inward" ? "outward" : "inward") : baseSwing,
      swingSign = swing === "inward" ? 1 : -1;
    const leaf = (hingeX: number, closedVectorX: number, signedQuarterTurn: number, key: string) => {
      const radius = Math.abs(closedVectorX), closedTipX = hingeX + closedVectorX,
        openTipX = hingeX, openTipY = closedVectorX * Math.sin(signedQuarterTurn),
        sweepFlag = signedQuarterTurn >= 0 ? 1 : 0;
      return <React.Fragment key={key}><line x1={hingeX} y1="0" x2={openTipX} y2={openTipY} stroke={color} strokeWidth={selected ? "2.4" : "1.7"} vectorEffect="non-scaling-stroke"/><path d={`M ${closedTipX} 0 A ${radius} ${radius} 0 0 ${sweepFlag} ${openTipX} ${openTipY}`} fill="none" stroke={color} strokeWidth={selected ? "1.6" : "1.1"} strokeDasharray="5 4" strokeLinecap="round" vectorEffect="non-scaling-stroke"/></React.Fragment>;
    };
    return (
      <g
        data-selectable
        transform={`translate(${transform.x} ${transform.z}) rotate(${angle})`}
        onClick={() => onSelect(node.id)}
      >
        <rect
          x={-width / 2}
          y={-depth / 2}
          width={width}
          height={depth}
          fill="#f7f8f5"
          stroke={color}
          strokeWidth={selected ? ".045" : ".025"}
        />
        {node.openingKind !== "opening" && (isDouble
          ? <>{leaf(-width / 2, width / 2, swingSign * Math.PI / 2, "left")}{leaf(width / 2, -width / 2, -swingSign * Math.PI / 2, "right")}</>
          : doorType === "hinged" && leaf(hinges === "left" ? -width / 2 : width / 2, hinges === "left" ? width : -width, swingSign * (hinges === "left" ? 1 : -1) * Math.PI / 2, "single"))}
      </g>
    );
  }
  return (
    <g
      data-selectable
      transform={`translate(${transform.x} ${transform.z}) rotate(${angle})`}
      onClick={() => onSelect(node.id)}
    >
      <rect
        x={-width / 2}
        y={-depth / 2}
        width={width}
        height={depth}
        fill="#f7f8f5"
        stroke={selected ? "#e75c3c" : "#287b8e"}
        strokeWidth={selected ? 0.045 : 0.025}
      />
      <line x1={-width / 2} x2={width / 2} stroke="#65a9b8" strokeWidth=".025" />
    </g>
  );
}
function Stair({
  node,
  nodes,
  onSelect,
}: {
  node: NodeData;
  nodes: Record<string, NodeData>;
  onSelect: (id: string) => void;
}) {
  if (node.stairType === 'spiral') {
    const geometry = buildSpiralStairPlanGeometry(node); if (!geometry) return null;
    return <g data-selectable onClick={() => onSelect(node.id)}><path d={geometry.footprintPath} fill="rgba(255,255,255,.08)" stroke="#171717" strokeWidth=".025" />{geometry.treadLines.map((line,index)=><line key={index} x1={line.start.x} y1={line.start.z} x2={line.end.x} y2={line.end.z} stroke="#262626" strokeWidth={index===geometry.treadLines.length-1?'.035':'.018'} />)}{geometry.railingPaths.map((path,index)=><polyline key={index} points={path.map(p=>`${p.x},${p.z}`).join(' ')} fill="none" stroke="#171717" strokeWidth=".025" />)}{geometry.centerColumn&&<circle cx={geometry.centerColumn.x} cy={geometry.centerColumn.z} r={Math.max(geometry.innerRadius*.18,.06)} fill="#d6d3d1" stroke="#171717" strokeWidth=".02"/>}<line x1={geometry.upDirection.from.x} y1={geometry.upDirection.from.z} x2={geometry.upDirection.to.x} y2={geometry.upDirection.to.z} stroke="#171717" strokeWidth=".03" markerEnd="url(#stair-up)"/></g>;
  }
  if (node.stairType === 'curved') {
    const geometry = buildCurvedStairPlanGeometry(node); if (!geometry) return null;
    return <g data-selectable onClick={() => onSelect(node.id)}><path d={geometry.footprintPath} fill="rgba(255,255,255,.08)" stroke="#171717" strokeWidth=".025" />{geometry.treadLines.map((line,index)=><line key={index} x1={line.start.x} y1={line.start.z} x2={line.end.x} y2={line.end.z} stroke="#262626" strokeWidth={index===0 || index===geometry.treadLines.length-1?'.03':'.018'} />)}<line x1={geometry.upDirection.from.x} y1={geometry.upDirection.from.z} x2={geometry.upDirection.to.x} y2={geometry.upDirection.to.z} stroke="#171717" strokeWidth=".03" markerEnd="url(#stair-up)"/></g>;
  }
  const geometry = buildStraightStairPlanGeometry(node, nodes); if (!geometry) return null;
  return <g data-selectable onClick={() => onSelect(node.id)}>{geometry.segments.map((segment) => <g key={segment.node.id}><polygon points={segment.polygon.map((point) => `${point.x},${point.z}`).join(' ')} fill="rgba(255,255,255,.08)" stroke="#171717" strokeWidth=".025" />{segment.treads.map((tread, index) => <line key={index} x1={tread.start.x} y1={tread.start.z} x2={tread.end.x} y2={tread.end.z} stroke="#262626" strokeWidth=".018" />)}</g>)}<line x1={geometry.upDirection.from.x} y1={geometry.upDirection.from.z} x2={geometry.upDirection.to.x} y2={geometry.upDirection.to.z} stroke="#171717" strokeWidth=".03" fill="none" markerEnd="url(#stair-up)"/></g>;
}
function StairEntry({ node, onSelect }: { node: NodeData; onSelect: (id: string) => void }) {
  const entry = buildSpiralStairDestinationEntry(node); if (!entry) return null;
  return <g data-selectable onClick={() => onSelect(node.id)}><path d={`M ${entry.footprint.map(p=>`${p.x} ${p.z}`).join(' L ')} Z`} fill="rgba(255,255,255,.02)" stroke="#59635f" strokeWidth=".025" strokeDasharray=".08 .05"/><line x1={entry.downDirection.from.x} y1={entry.downDirection.from.z} x2={entry.downDirection.to.x} y2={entry.downDirection.to.z} stroke="#59635f" strokeWidth=".03" markerEnd="url(#stair-down)"/></g>;
}
function useFloorplanImageCrop(imageUrl?: string): FloorplanImageCropCacheEntry | null {
  const [entry, setEntry] = useState<FloorplanImageCropCacheEntry | null>(() => imageUrl ? peekFloorplanImageCrop(imageUrl) : null);
  useEffect(() => {
    let cancelled = false; setEntry(imageUrl ? peekFloorplanImageCrop(imageUrl) : null);
    if (imageUrl) loadFloorplanImageCrop(imageUrl).then((result) => { if (!cancelled) setEntry(result); });
    return () => { cancelled = true; };
  }, [imageUrl]);
  return entry;
}
function Furniture({
  node,
  nodes,
  visibility,
  selected,
  viewRotation,
  markerId,
  onSelect,
}: {
  node: NodeData;
  nodes: Record<string, NodeData>;
  visibility: Visibility;
  selected: boolean;
  viewRotation: number;
  markerId: string;
  onSelect: (id: string) => void;
}) {
  const dimensions = finalDimensions(node),
    transform = resolveItemPlanTransform(node.id, nodes), imageUrl = node.asset?.floorPlanUrl as string | undefined, cropEntry = useFloorplanImageCrop(imageUrl);
  if (!dimensions || transform.status === "error") return null;
  const matrix = composePascalTransformWithWorldToSvg(transform),
    cropPlacement = cropEntry && !cropEntry.isFallback ? computeCropPlacement({ x: cropEntry.cropX, y: cropEntry.cropY, width: cropEntry.cropWidth, height: cropEntry.cropHeight }, dimensions.width, dimensions.depth) : null,
    labelY = dimensions.depth / 2 + 0.15,
    labelCounterRotation = transform.rotationY * 180 / Math.PI - viewRotation;
  return (
    <g
      data-selectable
      className="furniture"
      transform={svgMatrixString(matrix)}
      onClick={() => onSelect(node.id)}
    >
      {visibility.images && imageUrl && (
        cropEntry && cropPlacement
          ? <svg x={-dimensions.width / 2 + cropPlacement.offsetX} y={-dimensions.depth / 2 + cropPlacement.offsetY} width={cropPlacement.drawWidth} height={cropPlacement.drawHeight} viewBox={`${cropEntry.cropX} ${cropEntry.cropY} ${cropEntry.cropWidth} ${cropEntry.cropHeight}`} preserveAspectRatio="none" overflow="hidden"><image href={imageUrl} x="0" y="0" width={cropEntry.naturalWidth} height={cropEntry.naturalHeight} preserveAspectRatio="xMidYMid meet" /></svg>
          : <image href={imageUrl} x={-dimensions.width / 2} y={-dimensions.depth / 2} width={dimensions.width} height={dimensions.depth} preserveAspectRatio="none" />
      )}
      {(visibility.boxes || selected) && (
        <rect
          x={-dimensions.width / 2}
          y={-dimensions.depth / 2}
          width={dimensions.width}
          height={dimensions.depth}
          fill="none"
          stroke={selected ? "#e75c3c" : "#b88348"}
          strokeWidth={selected ? 0.06 : 0.025}
        />
      )}{" "}
      {visibility.images && !imageUrl && (
        <>
          <line
            x1={-dimensions.width / 2}
            y1={-dimensions.depth / 2}
            x2={dimensions.width / 2}
            y2={dimensions.depth / 2}
            stroke="#b88348"
            strokeWidth=".025"
          />
          <line
            x1={dimensions.width / 2}
            y1={-dimensions.depth / 2}
            x2={-dimensions.width / 2}
            y2={dimensions.depth / 2}
            stroke="#b88348"
            strokeWidth=".025"
          />
        </>
      )}
      {visibility.centers && <circle r=".04" fill="#e75c3c" />}
      {visibility.centers && (
        <line
          x2="0"
          y2={dimensions.depth / 2}
          stroke="#e75c3c"
          strokeWidth=".025"
          markerEnd={`url(#${markerId})`}
        />
      )}{" "}
      {visibility.names && (
        <text
          y={labelY}
          textAnchor="middle"
          className="item-label"
          fontSize=".14"
          style={{ transform: `rotate(${labelCounterRotation}deg)`, transformOrigin: `0px ${labelY}px`, transition: "transform 240ms cubic-bezier(.2,.8,.2,1)" }}
        >
          {node.name || node.asset?.name || node.id}
        </text>
      )}
    </g>
  );
}
function Inspector({
  node,
  nodes,
  coverage,
  dimension,
  manualMeasurement,
  measurementUnit,
}: {
  node: NodeData | null;
  nodes: Record<string, NodeData>;
  coverage: ReturnType<typeof auditSceneCoverage>;
  dimension: DimensionSegment | null;
  manualMeasurement: ManualMeasurement | null;
  measurementUnit: MeasurementUnit;
}) {
  if (manualMeasurement) { const geometry = buildManualMeasurementGeometry(manualMeasurement.start.point, manualMeasurement.end.point, manualMeasurement.mode); return <InspectorSection title="手动尺寸" rows={[["数值", formatMeasurement(geometry.valueMeters, measurementUnit)], ["模式", manualMeasurement.mode], ["楼层", levelName(manualMeasurement.levelId, nodes)], ["起点吸附", manualMeasurement.start.kind], ["终点吸附", manualMeasurement.end.kind]]} />; }
  if (dimension) return <InspectorSection title="外围尺寸" rows={[["数值", formatMeasurement(dimension.valueMeters, measurementUnit)], ["标注层", dimension.dimensionLayer], ["楼层", levelName(dimension.levelId, nodes)], ["来源墙体", String(dimension.sourceWallIds.length)], ["来源洞口", String(dimension.sourceOpeningIds.length)]]} />;
  if (!node)
    return (
      <section className="side-section inspector">
        <h2>检查面板</h2>
        <p>点击对象查看原始字段与派生几何。</p>
      </section>
    );
  if (node.type === "item") return <ItemInspector node={node} nodes={nodes} unit={measurementUnit} />;
  if (node.type === "shelf") {
    const shelf = resolveShelfData(node);
    return <InspectorSection title={node.name || "Shelf"} node={node} rows={baseNodeRows(node, nodes).concat([["尺寸 W/D/H", `${formatPanelLength(shelf.width, measurementUnit)} / ${formatPanelLength(shelf.depth, measurementUnit)} / ${formatPanelLength(shelf.height, measurementUnit)}`], ["分格", `${shelf.rows} 行 × ${shelf.columns} 列`], ["样式", shelf.style], ["子 Item", String((node.children ?? []).length)]])} />;
  }
  if (node.type === "slab") {
    const geometry = buildSlabPlanGeometry(node), audit = coverage.entries.find((entry) => entry.nodeId === node.id);
    return <InspectorSection title={node.name || "Slab（楼地面）"} node={node} rows={baseNodeRows(node, nodes).concat([["净面积", geometry ? formatArea(geometry.netArea, measurementUnit) : "未解析"], ["标高", formatPanelLength(node.elevation ?? .05, measurementUnit)], ["轮廓 / 洞", `${node.polygon?.length ?? 0} / ${node.holes?.length ?? 0}`], ["渲染状态", audit?.actualRenderStatus ?? "—"]])} />;
  }
  return <GenericNodeInspector node={node} nodes={nodes} unit={measurementUnit} />;
}
function levelName(levelId: string | undefined, nodes: Record<string, NodeData>) { return levelId ? nodes[levelId]?.name || levelId : "未确定"; }
function baseNodeRows(node: NodeData, nodes: Record<string, NodeData>): Array<[string, string]> { const ancestor = resolveAncestorLevelId(node.id, nodes); return [["类型", node.type], ["所属楼层", levelName(ancestor.levelId, nodes)], ["父节点", node.parentId ? nodes[node.parentId]?.name || nodes[node.parentId]?.type || node.parentId : "—"]]; }
function InspectorSection({ title, rows, node }: { title: string; rows: Array<[string, string]>; node?: NodeData }) { return <section className="side-section inspector"><h2>{title}</h2><dl>{rows.map(([label, value]) => <React.Fragment key={label}><dt>{label}</dt><dd>{value}</dd></React.Fragment>)}</dl>{node && <details><summary>原始 JSON</summary><pre>{JSON.stringify(node, null, 2)}</pre></details>}</section>; }
function ItemInspector({ node, nodes, unit }: { node: NodeData; nodes: Record<string, NodeData>; unit: MeasurementUnit }) {
  const dimensions = finalDimensions(node), transform = resolveItemPlanTransform(node.id, nodes), imageUrl = node.asset?.floorPlanUrl as string | undefined, cropEntry = useFloorplanImageCrop(imageUrl), placement = dimensions && cropEntry && !cropEntry.isFallback && cropEntry.cropWidth > 0 && cropEntry.cropHeight > 0 ? computeCropPlacement({ x: cropEntry.cropX, y: cropEntry.cropY, width: cropEntry.cropWidth, height: cropEntry.cropHeight }, dimensions.width, dimensions.depth) : null;
  const imageStatus = !imageUrl ? "无平面图图片" : !cropEntry ? "图片加载中" : cropEntry.isFallback ? `整图回退：${cropEntry.fallbackReason}` : "已加载并裁剪";
  return <InspectorSection title={node.name || node.asset?.name || "家具"} node={node} rows={baseNodeRows(node, nodes).concat([["尺寸 W/H/D", dimensions ? `${formatPanelLength(dimensions.width, unit)} / ${formatPanelLength(dimensions.height, unit)} / ${formatPanelLength(dimensions.depth, unit)}` : "无效"], ["朝向", transform.status === "ok" ? `${normalizeDegrees(transform.rotationY)}°` : "未解析"], ["平面图", imageStatus], ["图片贴合", placement ? "四边贴合" : "—"]])} />;
}
function GenericNodeInspector({ node, nodes, unit }: { node: NodeData; nodes: Record<string, NodeData>; unit: MeasurementUnit }) {
  const rows = baseNodeRows(node, nodes);
  if (node.type === "level") rows.splice(1, 0, ["名称", node.name || "未命名"], ["子节点", String(Object.values(nodes).filter((candidate) => candidate.parentId === node.id).length)]);
  if (node.type === "wall") { const length = Array.isArray(node.start) && Array.isArray(node.end) ? Math.hypot(node.end[0] - node.start[0], node.end[1] - node.start[1]) : null; rows.push(["长度", length === null ? "未解析" : formatPanelLength(length, unit)], ["墙厚", formatPanelLength(node.thickness ?? .1, unit)], ["几何", Number.isFinite(node.curveOffset) && node.curveOffset !== 0 ? "曲墙" : "直墙"]); }
  if (node.type === "door" || node.type === "window") rows.push(["宿主墙", node.wallId ? nodes[node.wallId]?.name || "墙体" : "未关联"], ["尺寸 W/H", `${formatPanelLength(node.width ?? .9, unit)} / ${formatPanelLength(node.height ?? 2, unit)}`], ["类型", node.type === "door" ? node.doorType ?? "hinged" : node.windowType ?? "window"], ["开口", node.openingKind ?? "door/window"]);
  if (node.type === "zone") { const points = zonePoints(node), area = Math.abs(points.reduce((sum, point, index) => { const next = points[(index + 1) % points.length]; return sum + point.x * next.z - point.z * next.x; }, 0) / 2); rows.push(["面积", points.length > 2 ? formatArea(area, unit) : "未解析"], ["轮廓点", String(points.length)]); }
  if (node.type === "stair") rows.push(["楼梯类型", node.stairType ?? "straight"], ["宽度", Number.isFinite(node.width) ? formatPanelLength(node.width, unit) : "—"], ["级数", String(node.stepCount ?? node.steps?.length ?? "—")]);
  return <InspectorSection title={node.name || node.type} node={node} rows={rows} />;
}
function Stats({ nodes }: { nodes: Record<string, NodeData> }) {
  const c = (type: string) =>
    Object.values(nodes).filter((n) => n.type === type).length;
  const shelves = Object.values(nodes).filter((n) => n.type === "shelf"), invalidShelves = shelves.filter((s) => !hasValidShelfFootprint(s)), parentIssueShelves = shelves.filter((s) => resolveShelfPlanTransform(s.id, nodes).status === 'error'), styles = shelves.reduce<Record<string, number>>((counts, shelf) => { const style = resolveShelfData(shelf).style; counts[style] = (counts[style] || 0) + 1; return counts; }, {});
  return (
    <section className="side-section">
      <h2>文件统计</h2>
      <div className="stat-grid">
        <span>
          节点<b>{Object.keys(nodes).length}</b>
        </span>
        <span>
          Level<b>{c("level")}</b>
        </span>
        <span>
          Wall<b>{c("wall")}</b>
        </span>
        <span>
          Item<b>{c("item")}</b>
        </span>
        <span>Shelf<b>{shelves.length}</b></span>
        <span>无效 Shelf<b>{invalidShelves.length}</b></span>
        <span>父级异常 Shelf<b>{parentIssueShelves.length}</b></span>
        {Object.entries(styles).map(([style, count]) => <span key={style}>{style}<b>{count}</b></span>)}
      </div>
    </section>
  );
}
const evaluationStatusLabel: Record<RuleStatus, string> = { pass: "通过", issue: "存在问题", unable_to_determine: "无法判断", not_applicable: "不适用" };
const evaluationOriginLabel = { source_data: "源数据", parser: "解析", handoff: "交接映射", rule: "评价规则", geometry_tolerance: "几何容差", insufficient_information: "信息不足" };
const evaluationValue = (value: unknown) => value === null || value === undefined ? "—" : typeof value === "string" ? value : String(value);
function EvaluationPanel({ report, nodes, roomAnalysis, error, focusMessage, activeHighlight, disabled, onRun, onFocus, onRegisterRule }: { report: EvaluationReport | null; nodes: Record<string, NodeData>; roomAnalysis: RoomRegionAnalysis | null; error: string | null; focusMessage: string | null; activeHighlight: EvaluationHighlight | null; disabled: boolean; onRun: () => void; onFocus: (ruleId: string, target: EvaluationFocusTarget, targetIndex: number) => void; onRegisterRule: (ruleId: string, element: HTMLElement | null) => void }) {
  return (
    <section className="side-section evaluation-panel">
      <div className="side-heading"><h2>G1 基础检查</h2><button className="primary" disabled={disabled} onClick={onRun}>运行基础检查</button></div>
      {error && <div className="evaluation-error"><b>评价失败</b><span>{error}</span></div>}
      {focusMessage && <div className="evaluation-focus-message">{focusMessage}</div>}
      {!report && !error && <p>解析完成后手动运行；评价不会随画布变化自动重复。</p>}
      {report && <>
        <div className={`evaluation-overall status-${report.overallStatus}`}><span>整体状态</span><b>{evaluationStatusLabel[report.overallStatus]}</b></div>
        <div className="evaluation-counts">
          {(Object.keys(evaluationStatusLabel) as RuleStatus[]).map((status) => <span key={status}>{evaluationStatusLabel[status]} <b>{report.counts[status]}</b></span>)}
        </div>
        <div className="evaluation-rules">
          {report.rules.map((item) => { const presentation = designerRulePresentation(item, nodes, roomAnalysis), locations = [...new Set(presentation.targets.map((target) => target.levelName))], activeIndex = activeHighlight?.ruleId === item.ruleId ? activeHighlight.targetIndex : 0, targetIndex = Math.min(activeIndex, Math.max(0, presentation.targets.length - 1)), target = presentation.targets[targetIndex], isActive = activeHighlight?.ruleId === item.ruleId; return <article key={item.ruleId} ref={(element) => onRegisterRule(item.ruleId, element)} className={`evaluation-rule status-${item.status}${isActive ? " active-evaluation-rule" : ""}`}>
            <div className="evaluation-rule-heading"><strong>{presentation.title}</strong><em>{evaluationStatusLabel[item.status]}</em></div>
            <p>{presentation.description}</p>
            <div className="designer-guidance"><span><b>为什么要处理</b>{presentation.rationale}</span><span><b>建议</b>{presentation.recommendation}</span>{presentation.supplemental && <span className="supplemental">{presentation.supplemental}</span>}</div>
            <div className="evaluation-card-meta"><span>问题数量 <b>{presentation.problemCountLabel}</b></span><span>所在楼层 <b>{locations.length ? locations.join("、") : "—"}</b></span></div>
            {target && <div className="evaluation-object-nav">
              <span className="evaluation-object-label">{target.label}</span>
              <div><button disabled={targetIndex === 0} aria-label={`${presentation.title} 上一处`} onClick={() => onFocus(item.ruleId, presentation.targets[targetIndex - 1]!, targetIndex - 1)}>上一处</button><b>{targetIndex + 1} / {presentation.targets.length}</b><button disabled={targetIndex >= presentation.targets.length - 1} aria-label={`${presentation.title} 下一处`} onClick={() => onFocus(item.ruleId, presentation.targets[targetIndex + 1]!, targetIndex + 1)}>下一处</button></div>
              <button className="view-on-canvas" onClick={() => onFocus(item.ruleId, target, targetIndex)}>在图中查看</button>
            </div>}
            <details>
              <summary>技术明细</summary>
              <small><b>规则</b>{item.ruleId} · {item.ruleName}</small>
              {item.normalizedObjectIds.length > 0 && <small><b>标准化 ID</b>{item.normalizedObjectIds.join(", ")}</small>}
              {item.pascalSourceIds.length > 0 && <small><b>Pascal ID</b>{item.pascalSourceIds.join(", ")}</small>}
              {item.missingData.length > 0 && <small><b>缺失数据</b>{item.missingData.join("；")}</small>}
              <small><b>置信度</b>{item.confidence.level} ({item.confidence.score}){item.confidence.reasons.length ? ` · ${item.confidence.reasons.join("；")}` : ""}</small>
              {item.diagnostics.length > 0 && <small><b>原始字段与诊断</b>{item.diagnostics.map((diagnostic) => `${diagnostic.field ?? diagnostic.code}: 实际=${evaluationValue(diagnostic.actualValue)}；要求=${diagnostic.expectedValue ?? "—"}；来源=${diagnostic.origin ? evaluationOriginLabel[diagnostic.origin] : "—"}；${diagnostic.message}`).join("；")}</small>}
              {item.measurements.length > 0 && <small><b>测量值</b>{item.measurements.map((measurement) => `${measurement.normalizedObjectId ? `${measurement.normalizedObjectId}.` : ""}${measurement.name}=${evaluationValue(measurement.value)}${measurement.unit ? ` ${measurement.unit}` : ""}`).join("；")}</small>}
              {item.thresholds.length > 0 && <small><b>阈值/容差</b>{item.thresholds.map((threshold) => `${threshold.name}=${evaluationValue(threshold.value)}${threshold.unit ? ` ${threshold.unit}` : ""}`).join("；")}</small>}
            </details>
          </article>; })}
        </div>
      </>}
    </section>
  );
}
function transformDiagnostics(nodes: Record<string, NodeData>): Diagnostic[] {
  const itemDiagnostics = Object.values(nodes)
    .filter((n) => n.type === "item")
    .flatMap((node) => {
      const r = resolveItemPlanTransform(node.id, nodes);
      return r.status === "error"
        ? [
            {
              severity: "error" as const,
              code: r.error || "unsupported_parent_transform",
              message: "无法确定家具楼层坐标",
              nodeId: node.id,
            },
          ]
        : [];
    });
  const shelfDiagnostics = Object.values(nodes).filter((node) => node.type === 'shelf').flatMap((node) => {
    const transform = resolveShelfPlanTransform(node.id, nodes), data = resolveShelfData(node), diagnostics: Diagnostic[] = [];
    if (!hasValidShelfFootprint(node)) diagnostics.push({ severity: 'error', code: 'invalid_shelf_dimensions', message: 'Shelf width/depth 无效；未绘制虚假占地', nodeId: node.id, sourcePath: `nodes.${node.id}` });
    if (node.rows !== undefined && (!Number.isInteger(node.rows) || node.rows < 1 || node.rows > 8)) diagnostics.push({ severity: 'error', code: 'invalid_shelf_rows', message: 'Shelf rows 必须为 1–8 的整数', nodeId: node.id, sourcePath: `nodes.${node.id}.rows` });
    if (node.columns !== undefined && (!Number.isInteger(node.columns) || node.columns < 1 || node.columns > 6)) diagnostics.push({ severity: 'error', code: 'invalid_shelf_columns', message: 'Shelf columns 必须为 1–6 的整数', nodeId: node.id, sourcePath: `nodes.${node.id}.columns` });
    if (transform.status === 'error') diagnostics.push({ severity: 'error', code: transform.error === 'parent_cycle' ? 'shelf_parent_cycle' : transform.error === 'missing_parent' ? 'missing_shelf_parent' : 'unsupported_shelf_parent_transform', message: '无法确定 Shelf 的楼层坐标', nodeId: node.id, sourcePath: `nodes.${node.id}.parentId` });
    void data; return diagnostics;
  });
  return [...itemDiagnostics, ...shelfDiagnostics];
}
function Diagnostics({ diagnostics }: { diagnostics: Diagnostic[] }) {
  return (
    <section className="side-section diagnostics-panel">
      <details>
        <summary className="side-heading"><h2>诊断</h2><span className="pill">{diagnostics.length}</span></summary>
        {diagnostics.slice(0, 30).map((d, i) => (
          <div className={`diag ${d.severity}`} key={`${d.code}-${i}`}>
            <b>{d.code}</b>
            <span>{d.message}</span>
            <small>{d.nodeId || ""}</small>
          </div>
        ))}
      </details>
    </section>
  );
}
function CoverageReport({
  coverage,
}: {
  coverage: ReturnType<typeof auditSceneCoverage>;
}) {
  return (
    <section className="side-section diagnostics-panel">
      <div className="side-heading">
        <h2>解析覆盖</h2>
        <span className="pill">{Object.keys(coverage.byKind).length}</span>
      </div>
      <small>
        Core {coverage.summary.builtInNodes} · 完整 {coverage.summary.fullySupportedNodes} ·
        部分 {coverage.summary.partiallySupportedNodes} · 未知 {coverage.summary.unknownPluginNodes} ·
        未渲染 {coverage.summary.parsedNotRenderedNodes} · 无效 {coverage.summary.invalidNodes}
      </small>
      {Object.entries(coverage.byKind).map(([kind, entries]) => (
        <details key={kind}>
          <summary>{kind} · {entries.length} · {entries[0].overallStatus}</summary>
          <table className="coverage-table">
            <thead><tr><th>Variant</th><th>解析</th><th>坐标</th><th>预计</th><th>实际</th><th>状态</th></tr></thead>
            <tbody>{entries.map((entry) => <tr key={entry.nodeId}><td>{entry.variant || "—"}</td><td>{entry.schemaStatus}</td><td>{entry.transformStatus}</td><td>{entry.expectedVisibility.join(", ")}</td><td>{entry.actualRenderStatus}</td><td>{entry.overallStatus}</td></tr>)}</tbody>
          </table>
          <pre>{JSON.stringify(entries.map((entry) => ({ nodeId: entry.nodeId, variant: entry.variant, parentChain: entry.parentChain, sourcePath: entry.sourcePath, evidence: entry.evidence, reason: entry.reason })), null, 2)}</pre>
        </details>
      ))}
      {coverage.unknownKinds.length > 0 && <pre>{JSON.stringify({ unknownKinds: coverage.unknownKinds, installedPlugins: coverage.installedPlugins }, null, 2)}</pre>}
    </section>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
