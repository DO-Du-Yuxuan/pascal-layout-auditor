import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import sampleText from "../sample-data/9618b316-3eab-4fcf-9a21-0f7316479968.json?raw";
import "./styles.css";
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
  zoomExtents,
} from "./geometry/transform";
import { inspectNodes } from "./diagnostics/check";

type Visibility = {
  images: boolean;
  boxes: boolean;
  centers: boolean;
  axes: boolean;
  names: boolean;
  zones: boolean;
  walls: boolean;
  openings: boolean;
};
type CanvasState = {
  id: number;
  levelId: string;
  viewBox: ViewBox;
  rotation: number;
};
const visibilityDefault: Visibility = {
  images: true,
  boxes: true,
  centers: false,
  axes: true,
  names: false,
  zones: true,
  walls: true,
  openings: true,
};
const emptyView: ViewBox = { minX: -5, minZ: -5, width: 10, height: 10 };

function App() {
  const [data, setData] = useState<Parsed | null>(null),
    [file, setFile] = useState("未导入文件"),
    [canvases, setCanvases] = useState<CanvasState[]>([
      { id: 1, levelId: "", viewBox: emptyView, rotation: 0 },
    ]),
    [nextId, setNextId] = useState(2),
    [selectedId, setSelectedId] = useState<string | null>(null),
    [visibility, setVisibility] = useState(visibilityDefault);
  const input = useRef<HTMLInputElement>(null);
  const nodes = data?.nodes || {};
  const levels = Object.values(nodes).filter((n) => n.type === "level");
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
      setFile(name);
      setSelectedId(null);
      setCanvases([
        {
          id: 1,
          levelId: first,
          viewBox: computeViewBox(parsed.nodes, first),
          rotation: 0,
        },
      ]);
      setNextId(2);
    } catch {
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
        viewBox: computeViewBox(nodes, levelId),
        rotation: 0,
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
  const diagnostics = useMemo(
    () => (data ? [...data.diagnostics, ...transformDiagnostics(nodes)] : []),
    [data, nodes],
  );
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
          <button onClick={() => load(sampleText, "reference-layout.json")}>
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
                images: "家具图片",
                boxes: "数学占地框",
                centers: "中心点",
                axes: "局部 +Z 轴",
                names: "家具名称",
                zones: "Zone",
                walls: "墙体",
                openings: "门窗",
              }).map(([key, label]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={visibility[key as keyof Visibility]}
                    onChange={() =>
                      setVisibility((v) => ({
                        ...v,
                        [key]: !v[key as keyof Visibility],
                      }))
                    }
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>
          <Stats nodes={nodes} />
          <Inspector
            node={selectedId ? nodes[selectedId] : null}
            nodes={nodes}
            viewBox={canvases[0]?.viewBox || emptyView}
          />
          <Diagnostics diagnostics={diagnostics} />
        </aside>
        <section className="canvas-workspace">
          <div className="canvas-workspace-head">
            <div>
              <span className="eyebrow">PLAN VIEWS</span>
              <h1>画布工作区</h1>
            </div>
            <div>
              <button className="primary" onClick={addCanvas}>
                + 添加画布
              </button>
            </div>
          </div>
          <Drop onLoad={load} />
          <div className={`canvas-grid count-${Math.min(canvases.length, 4)}`}>
            {canvases.map((canvas) => (
              <CanvasPanel
                key={canvas.id}
                canvas={canvas}
                nodes={nodes}
                levels={levels}
                visibility={visibility}
                selectedId={selectedId}
                onSelect={setSelectedId}
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
function Drop({ onLoad }: { onLoad: (text: string, name: string) => void }) {
  return (
    <div
      className="drop compact"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        file?.text().then((text) => onLoad(text, file.name));
      }}
    >
      <span>拖入 Pascal JSON</span>
      <small>或使用顶部“导入 JSON”</small>
    </div>
  );
}
function CanvasPanel({
  canvas,
  nodes,
  levels,
  visibility,
  selectedId,
  onSelect,
  onUpdate,
  onRemove,
  canRemove,
}: {
  canvas: CanvasState;
  nodes: Record<string, NodeData>;
  levels: NodeData[];
  visibility: Visibility;
  selectedId: string | null;
  onSelect: (id: string) => void;
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
                viewBox: computeViewBox(nodes, e.target.value),
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
              onUpdate(canvas.id, { viewBox: computeViewBox(nodes, levelId) })
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
        onSelect={onSelect}
      />
    </article>
  );
}
function objectsOnLevel(nodes: Record<string, NodeData>, levelId: string) {
  return Object.values(nodes).filter(
    (node) => resolveAncestorLevelId(node.id, nodes).levelId === levelId,
  );
}
function computeViewBox(
  nodes: Record<string, NodeData>,
  levelId: string,
): ViewBox {
  const points: { x: number; z: number }[] = [];
  for (const node of objectsOnLevel(nodes, levelId)) {
    if (node.type === "wall") {
      for (const point of [node.start, node.end])
        if (Array.isArray(point)) points.push({ x: point[0], z: point[1] });
    } else if (
      (node.type === "zone" ||
        node.type === "slab" ||
        node.type === "ceiling") &&
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
    }
  }
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
  onSelect,
}: {
  nodes: Record<string, NodeData>;
  levelId: string;
  viewBox: ViewBox;
  rotation: number;
  setViewBox: (v: ViewBox) => void;
  visibility: Visibility;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const drag = useRef<{ x: number; y: number; box: ViewBox } | null>(null),
    rendered = objectsOnLevel(nodes, levelId),
    items = rendered.filter((n) => n.type === "item"),
    cx = viewBox.minX + viewBox.width / 2,
    cz = viewBox.minZ + viewBox.height / 2,
    vb = `${viewBox.minX} ${viewBox.minZ} ${viewBox.width} ${viewBox.height}`;
  return (
    <div
      className="plan"
      onWheel={(e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 0.9 : 1.1;
        setViewBox({
          width: viewBox.width * factor,
          height: viewBox.height * factor,
          minX: viewBox.minX + (viewBox.width - viewBox.width * factor) / 2,
          minZ: viewBox.minZ + (viewBox.height - viewBox.height * factor) / 2,
        });
      }}
      onPointerDown={(e) =>
        (drag.current = { x: e.clientX, y: e.clientY, box: viewBox })
      }
      onPointerMove={(e) => {
        if (!drag.current) return;
        const dx =
            ((e.clientX - drag.current.x) * drag.current.box.width) /
            (e.currentTarget.clientWidth || 1),
          dz =
            ((e.clientY - drag.current.y) * drag.current.box.height) /
            (e.currentTarget.clientHeight || 1),
          pan = rotatedPanDelta(dx, dz, rotation);
        setViewBox({
          ...drag.current.box,
          minX: drag.current.box.minX + pan.x,
          minZ: drag.current.box.minZ + pan.z,
        });
      }}
      onPointerUp={() => (drag.current = null)}
    >
      <svg viewBox={vb}>
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
        </defs>
        <rect
          x={viewBox.minX}
          y={viewBox.minZ}
          width={viewBox.width}
          height={viewBox.height}
          fill="#f7f8f5"
        />
        <g transform={`rotate(${rotation} ${cx} ${cz})`}>
          {visibility.zones &&
            rendered
              .filter((n) => n.type === "zone")
              .map((n) => <Polygon key={n.id} node={n} />)}
          {visibility.walls &&
            rendered
              .filter((n) => n.type === "wall")
              .map((n) => (
                <Wall
                  key={n.id}
                  node={n}
                  selected={selectedId === n.id}
                  onSelect={onSelect}
                />
              ))}
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
          {rendered
            .filter((n) => n.type === "stair")
            .map((n) => (
              <Stair key={n.id} node={n} onSelect={onSelect} />
            ))}
          {items.map((n) => (
            <Furniture
              key={n.id}
              node={n}
              nodes={nodes}
              visibility={visibility}
              selected={selectedId === n.id}
              markerId={`arrow-${levelId}`}
              onSelect={onSelect}
            />
          ))}
        </g>
      </svg>
      <Compass rotation={rotation} />
      <div className="legend">{vb} m</div>
    </div>
  );
}
function Compass({ rotation }: { rotation: number }) {
  return (
    <div className="compass" title={`视图旋转 ${rotation}°`}>
      <div
        className="compass-arrow"
        style={{ transform: `rotate(${-rotation}deg)` }}
      >
        ▲
      </div>
      <b>N</b>
    </div>
  );
}
function Polygon({ node }: { node: NodeData }) {
  if (!Array.isArray(node.polygon)) return null;
  const points = node.polygon
      .map((p: any) => `${p[0]},${p[2] ?? p[1]}`)
      .join(" "),
    first = node.polygon[0];
  return (
    <g>
      <polygon
        points={points}
        fill="#c9d9cf"
        opacity=".42"
        stroke="#9bb3a5"
        strokeWidth=".03"
      />
      {first && (
        <text
          x={first[0]}
          y={first[2] ?? first[1]}
          className="zone-label"
          fontSize=".22"
        >
          {node.name || "Zone"}
        </text>
      )}
    </g>
  );
}
function Wall({
  node,
  selected,
  onSelect,
}: {
  node: NodeData;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  if (!Array.isArray(node.start) || !Array.isArray(node.end)) return null;
  return (
    <line
      x1={node.start[0]}
      y1={node.start[1]}
      x2={node.end[0]}
      y2={node.end[1]}
      stroke={selected ? "#e75c3c" : "#303a3b"}
      strokeWidth={selected ? 0.14 : 0.1}
      strokeLinecap="square"
      onClick={() => onSelect(node.id)}
    />
  );
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
  if (node.type === "door")
    return (
      <g
        transform={`translate(${transform.x} ${transform.z}) rotate(${angle})`}
        onClick={() => onSelect(node.id)}
      >
        <rect
          x={-width / 2}
          y={-depth / 2}
          width={width}
          height={depth}
          fill="#f7f8f5"
          stroke={selected ? "#e75c3c" : "#9b6736"}
          strokeWidth={selected ? ".045" : ".025"}
        />
      </g>
    );
  return (
    <g
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
  onSelect,
}: {
  node: NodeData;
  onSelect: (id: string) => void;
}) {
  const p = Array.isArray(node.position) ? node.position : [0, 0, 0];
  return (
    <text
      x={p[0]}
      y={p[2] ?? 0}
      fontSize=".25"
      fill="#59635f"
      onClick={() => onSelect(node.id)}
    >
      STAIR
    </text>
  );
}
function Furniture({
  node,
  nodes,
  visibility,
  selected,
  markerId,
  onSelect,
}: {
  node: NodeData;
  nodes: Record<string, NodeData>;
  visibility: Visibility;
  selected: boolean;
  markerId: string;
  onSelect: (id: string) => void;
}) {
  const dimensions = finalDimensions(node),
    transform = resolveItemPlanTransform(node.id, nodes);
  if (!dimensions || transform.status === "error") return null;
  const matrix = composePascalTransformWithWorldToSvg(transform),
    imageUrl = node.asset?.floorPlanUrl;
  return (
    <g
      className="furniture"
      transform={svgMatrixString(matrix)}
      onClick={() => onSelect(node.id)}
    >
      {visibility.images && imageUrl && (
        <image
          href={imageUrl}
          x={-dimensions.width / 2}
          y={-dimensions.depth / 2}
          width={dimensions.width}
          height={dimensions.depth}
          preserveAspectRatio="none"
        />
      )}
      {visibility.boxes && (
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
      {!imageUrl && (
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
      {visibility.axes && (
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
          y={dimensions.depth / 2 + 0.15}
          textAnchor="middle"
          className="item-label"
          fontSize=".14"
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
  viewBox,
}: {
  node: NodeData | null;
  nodes: Record<string, NodeData>;
  viewBox: ViewBox;
}) {
  if (!node)
    return (
      <section className="side-section inspector">
        <h2>检查面板</h2>
        <p>点击对象查看原始字段与派生几何。</p>
      </section>
    );
  if (node.type === "item") {
    const d = finalDimensions(node),
      t = resolveItemPlanTransform(node.id, nodes);
    return (
      <section className="side-section inspector">
        <h2>{node.name || node.asset?.name || "家具"}</h2>
        <dl>
          <dt>尺寸 W/H/D</dt>
          <dd>{d ? `${d.width}/${d.height}/${d.depth}m` : "无效"}</dd>
          <dt>位置 x/z</dt>
          <dd>{t.status === "ok" ? `${t.x}/${t.z}` : "未解析"}</dd>
          <dt>角度</dt>
          <dd>
            {t.status === "ok" ? `${normalizeDegrees(t.rotationY)}°` : "—"}
          </dd>
          <dt>所属楼层</dt>
          <dd>{t.ancestorLevelId || "未确定"}</dd>
          <dt>viewBox</dt>
          <dd>{`${viewBox.minX} ${viewBox.minZ} ${viewBox.width} ${viewBox.height}`}</dd>
        </dl>
        <pre>
          {JSON.stringify(
            {
              id: node.id,
              parentId: node.parentId,
              position: node.position,
              rotation: node.rotation,
              scale: node.scale,
              dimensions: node.asset?.dimensions,
            },
            null,
            2,
          )}
        </pre>
      </section>
    );
  }
  return (
    <section className="side-section inspector">
      <h2>{node.name || node.id}</h2>
      <pre>{JSON.stringify(node, null, 2)}</pre>
    </section>
  );
}
function Stats({ nodes }: { nodes: Record<string, NodeData> }) {
  const c = (type: string) =>
    Object.values(nodes).filter((n) => n.type === type).length;
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
      </div>
    </section>
  );
}
function transformDiagnostics(nodes: Record<string, NodeData>): Diagnostic[] {
  return Object.values(nodes)
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
}
function Diagnostics({ diagnostics }: { diagnostics: Diagnostic[] }) {
  return (
    <section className="side-section diagnostics-panel">
      <div className="side-heading">
        <h2>诊断</h2>
        <span className="pill">{diagnostics.length}</span>
      </div>
      {diagnostics.slice(0, 30).map((d, i) => (
        <div className={`diag ${d.severity}`} key={`${d.code}-${i}`}>
          <b>{d.code}</b>
          <span>{d.message}</span>
          <small>{d.nodeId || ""}</small>
        </div>
      ))}
    </section>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
