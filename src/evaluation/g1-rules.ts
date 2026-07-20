import type { EvaluationHandoff } from "../parser/evaluation-handoff";
import { relateOpeningToHostBoundary } from "./geometry";
import { G1_GEOMETRY_TOLERANCES as T } from "./tolerances";
import type { G1Rule, RuleDiagnostic, RuleResult, RuleStatus } from "./types";

type Entity = { id: string; rawPascalId: string; levelId: string | null; parentId: string | null; name?: string | null };
const collections = ["levels", "spaces", "walls", "doors", "windows", "furniture", "equipment", "columns", "shelves", "stairs", "shafts"] as const;
const entities = (h: EvaluationHandoff) => collections.flatMap((key) => h[key] as Entity[]);
const ids = (items: Entity[]) => [...new Set(items.map((item) => item.id))];
const rawIds = (items: Entity[]) => [...new Set(items.map((item) => item.rawPascalId))];
const confidence = (level: "high" | "medium" | "low", reasons: string[] = []) => ({ level, score: level === "high" ? 1 : level === "medium" ? 0.75 : 0.4, reasons });
const result = (ruleId: string, ruleName: string, status: RuleStatus, summary: string, partial: Partial<RuleResult> = {}): RuleResult => ({
  ruleId, ruleName, status, severity: status === "issue" ? "error" : status === "unable_to_determine" ? "warning" : "info", summary,
  details: [], normalizedObjectIds: [], pascalSourceIds: [], measurements: [], thresholds: [], missingData: [], confidence: confidence("high"), diagnostics: [], ...partial,
});
const finitePoint = (value: unknown): value is number[] => Array.isArray(value) && value.length >= 2 && value.every(Number.isFinite);
const positive = (value: unknown) => Number.isFinite(value) && (value as number) > T.lengthMeters;

export const ruleG1001: G1Rule = (h) => {
  const expected = { length: "meter", area: "square-meter", angles: "radian" }, mismatches = Object.entries(expected).filter(([key, value]) => h.units[key as keyof typeof expected] !== value);
  return result("G1-001", "项目单位有效", mismatches.length ? "issue" : "pass", mismatches.length ? "项目单位与评价器支持的单位不一致" : "长度、面积和角度单位均受支持", {
    details: mismatches.map(([key, value]) => `${key} 应为 ${value}`), measurements: Object.entries(expected).map(([name]) => ({ name, value: h.units[name as keyof typeof expected] })), thresholds: Object.entries(expected).map(([name, value]) => ({ name: `required-${name}`, value })), confidence: confidence("high"),
  });
};

export const ruleG1002: G1Rule = (h) => {
  const all = entities(h), byId = new Map<string, Entity[]>();
  all.forEach((item) => byId.set(item.id, [...(byId.get(item.id) ?? []), item]));
  const duplicates = [...byId.entries()].filter(([, matches]) => matches.length > 1), affected = duplicates.flatMap(([, matches]) => matches);
  return result("G1-002", "参与评价的对象具有唯一身份", duplicates.length ? "issue" : "pass", duplicates.length ? `发现 ${duplicates.length} 个重复标准化 ID` : `${all.length} 个参与评价对象的标准化 ID 唯一`, {
    details: duplicates.map(([id, matches]) => `${id} 出现 ${matches.length} 次`), normalizedObjectIds: ids(affected), pascalSourceIds: rawIds(affected), measurements: [{ name: "participatingObjectCount", value: all.length }, { name: "duplicateIdCount", value: duplicates.length }], thresholds: [{ name: "maximumDuplicateIdCount", value: 0 }], confidence: confidence("high"),
  });
};

export const ruleG1003: G1Rule = (h) => {
  const levelIds = new Set(h.levels.map((level) => level.id)), unresolved = entities(h).filter((item) => !item.levelId || !levelIds.has(item.levelId));
  return result("G1-003", "对象的楼层归属明确", unresolved.length ? "issue" : "pass", unresolved.length ? `${unresolved.length} 个对象缺少有效楼层归属` : "所有参与评价对象均可归属到已知楼层", {
    details: unresolved.map((item) => `${item.id}: ${item.levelId ? `楼层 ${item.levelId} 不存在` : "未解析出楼层"}`), normalizedObjectIds: ids(unresolved), pascalSourceIds: rawIds(unresolved), measurements: [{ name: "unresolvedLevelObjectCount", value: unresolved.length }], thresholds: [{ name: "maximumUnresolvedLevelObjectCount", value: 0 }], missingData: unresolved.map((item) => `${item.id}.levelId`), confidence: confidence("high"),
  });
};

export const ruleG1004: G1Rule = (h) => {
  const invalid: Entity[] = [], diagnostics: RuleDiagnostic[] = [], add = (item: Entity, reason: string, diagnostic?: Omit<RuleDiagnostic, "severity" | "code" | "message" | "normalizedObjectIds">) => { invalid.push(item); diagnostics.push({ severity: "error", code: "invalid_dimension_or_coordinate", message: reason, normalizedObjectIds: [item.id], ...diagnostic }); };
  h.spaces.forEach((item) => { if (item.outline.length < 3 || item.outline.some((p) => !finitePoint(p)) || !positive(item.areaSquareMeters)) add(item, `${item.id} 的 Zone 派生轮廓或面积无效`); });
  h.walls.forEach((item) => {
    const length = finitePoint(item.start) && finitePoint(item.end) ? Math.hypot(item.end[0] - item.start[0], item.end[1] - item.start[1]) : null;
    if (!finitePoint(item.start) || !finitePoint(item.end)) add(item, `${item.name ?? item.id} 的起点或终点不是有限坐标`, { field: "wall.start/end", actualValue: `start=${JSON.stringify(item.start)}, end=${JSON.stringify(item.end)}`, expectedValue: "两个有限 [x,z] 坐标", origin: "source_data", recommendation: "检查 Pascal Wall.start 和 Wall.end。" });
    else if (length! <= T.lengthMeters) add(item, `${item.name ?? item.id} 的起点与终点重合，墙长为 0 mm`, { field: "wall.lengthMeters", actualValue: length, expectedValue: `大于 ${T.lengthMeters} m`, origin: "source_data", recommendation: "删除残留零长度墙，或为该墙提供不同的起点和终点。" });
    if (!positive(item.thicknessMeters)) add(item, `${item.name ?? item.id} 的墙厚无效`, { field: "wall.thicknessMeters", actualValue: item.thicknessMeters, expectedValue: `大于 ${T.lengthMeters} m`, origin: "source_data", recommendation: "检查 Pascal Wall.thickness。" });
  });
  [...h.doors, ...h.windows].forEach((item) => { if (!positive(item.widthMeters) || !positive(item.heightMeters) || !finitePoint(item.rawWallLocalPosition)) add(item, `${item.id} 的门窗尺寸或墙局部坐标无效`); });
  [...h.furniture, ...h.equipment, ...h.columns].forEach((item) => { if (!item.dimensionsMeters || item.dimensionsMeters.some((value) => !positive(value)) || item.transformStatus !== "ok" || !finitePoint(item.resolvedWorldPosition)) add(item, `${item.id} 的物体尺寸或解析坐标无效`); });
  h.shelves.forEach((item) => { if (item.dimensionsMeters.some((value) => !positive(value))) add(item, `${item.id} 的架体尺寸无效`); });
  const invalidWalls = h.walls.filter((item) => ids(invalid).includes(item.id));
  return result("G1-004", "对象尺寸与坐标有效", invalid.length ? "issue" : "pass", invalid.length ? `${ids(invalid).length} 个对象存在无效尺寸或坐标` : "已提供的评价对象尺寸与坐标有效", { details: diagnostics.map((d) => d.message), normalizedObjectIds: ids(invalid), pascalSourceIds: rawIds(invalid), measurements: [{ name: "invalidObjectCount", value: ids(invalid).length }, ...invalidWalls.flatMap((wall) => [{ name: "wallStart", value: JSON.stringify(wall.start), normalizedObjectId: wall.id }, { name: "wallEnd", value: JSON.stringify(wall.end), normalizedObjectId: wall.id }, { name: "wallLength", value: wall.start && wall.end ? Math.hypot(wall.end[0] - wall.start[0], wall.end[1] - wall.start[1]) : null, unit: "m", normalizedObjectId: wall.id }, { name: "wallThickness", value: wall.thicknessMeters, unit: "m", normalizedObjectId: wall.id }, { name: "wallHeight", value: wall.heightMeters, unit: "m", normalizedObjectId: wall.id }, { name: "wallCurveOffset", value: wall.curveOffsetMeters, unit: "m", normalizedObjectId: wall.id }, { name: "footprintValid", value: wall.footprintValidation.valid, normalizedObjectId: wall.id }, { name: "footprintArea", value: wall.footprintValidation.areaSquareMeters, unit: "m²", normalizedObjectId: wall.id }, { name: "footprintCodes", value: wall.footprintValidation.codes.join(", "), normalizedObjectId: wall.id }])], thresholds: [{ name: "minimumLength", value: T.lengthMeters, unit: "m" }, { name: "minimumArea", value: T.areaSquareMeters, unit: "m²" }], confidence: confidence("high"), diagnostics });
};

export const ruleG1005: G1Rule = (h) => {
  const all = [...entities(h), ...h.zones, ...h.unclassifiedNodes.map((item) => ({ ...item, levelId: null, parentId: null }))], known = new Set(all.map((item) => item.id)), broken: Entity[] = [], details: string[] = [], diagnostics: RuleDiagnostic[] = [];
  const note = (item: Entity, target: string | null, kind: string, expected = "现有标准化对象 ID") => { if (target && !known.has(target)) { broken.push(item); const detail = `${item.id}: ${kind} ${target} 不存在`; details.push(detail); diagnostics.push({ severity: "error", code: "missing_reference", message: `${item.name ?? item.id} 的 ${kind} 指向项目中不存在的对象`, normalizedObjectIds: [item.id], field: kind, actualValue: target, expectedValue: expected, origin: "source_data", recommendation: "检查源 Pascal JSON 中的引用 ID；若项目经历复制或楼层重建，请重新关联该对象。" }); } };
  entities(h).forEach((item) => note(item, item.parentId, "parentId"));
  [...h.doors, ...h.windows].forEach((item) => note(item, item.hostWallId, "hostWallId"));
  h.spaces.forEach((item) => note(item, item.sourceZoneId, "sourceZoneId"));
  h.stairs.forEach((item) => { note(item, item.fromLevelId, "fromLevelId", "现有 Level ID"); note(item, item.toLevelId, "toLevelId", "现有 Level ID"); });
  h.shelves.forEach((item) => item.childItemIds.forEach((child: string) => note(item, child, "childItemId")));
  return result("G1-005", "对象关联关系有效", broken.length ? "issue" : "pass", broken.length ? `发现 ${details.length} 条失效引用` : "已声明的对象引用均可解析", { details, normalizedObjectIds: ids(broken), pascalSourceIds: rawIds(broken), measurements: [{ name: "brokenReferenceCount", value: details.length }, { name: "knownLevelIds", value: h.levels.map((level) => level.id).join(", ") }], thresholds: [{ name: "maximumBrokenReferenceCount", value: 0 }], missingData: details, confidence: confidence("high"), diagnostics });
};

export const ruleG1019: G1Rule = (h) => {
  if (!h.spaces.length) return result("G1-019", "主要空间具有明确名称", "unable_to_determine", "没有可供检查的 Space", { missingData: ["spaces"], confidence: confidence("low", ["Pascal 当前未提供独立 Space"]), diagnostics: [{ severity: "warning", code: "space_semantics_unavailable", message: "Space 仅由 Zone 派生，无法识别主要空间", normalizedObjectIds: [] }] });
  const unnamed = h.spaces.filter((space) => !space.name?.trim());
  return result("G1-019", "主要空间具有明确名称", "unable_to_determine", unnamed.length ? `当前 ${h.spaces.length} 个 Zone 派生 Space 中有 ${unnamed.length} 个未命名；仍无法确认主要空间全集` : `当前 ${h.spaces.length} 个 Zone 派生 Space 均有名称；但无法确认主要空间是否全部命名`, { details: unnamed.map((space) => `${space.id} 未命名`), normalizedObjectIds: ids(unnamed), pascalSourceIds: rawIds(unnamed), measurements: [{ name: "derivedSpaceCount", value: h.spaces.length }, { name: "unnamedDerivedSpaceCount", value: unnamed.length }], thresholds: [{ name: "requiredNonBlankName", value: true }], missingData: ["独立 Space 对象", "主要空间分类或用途语义", "完整封闭房间识别结果"], confidence: confidence("low", ["Space 由 Zone 一对一派生", "Zone 不保证是封闭房间或完整房间分区"]), diagnostics: [{ severity: "warning", code: "zone_derived_space_limit", message: "当前 Zone 派生 Space 均有名称；这不代表已经发现未命名房间，也不能证明所有主要空间均已命名。", normalizedObjectIds: h.spaces.map((space) => space.id), origin: "insufficient_information", recommendation: "提供独立房间识别结果以及主要空间分类后再运行此规则。" }] });
};

export const ruleG1013: G1Rule = (h) => {
  const openings = [...h.doors, ...h.windows];
  if (!openings.length) return result("G1-013", "门窗位于有效开口边界", "not_applicable", "项目中没有门窗对象", { confidence: confidence("high") });
  const wallById = new Map(h.walls.map((wall) => [wall.id, wall])), relations = openings.map((opening) => relateOpeningToHostBoundary(opening, opening.hostWallId ? wallById.get(opening.hostWallId) : undefined)), outside = relations.filter((r) => r.status === "outside"), unknown = relations.filter((r) => r.status === "invalid" || r.status === "unsupported"), affected = openings.filter((opening) => [...outside, ...unknown].some((r) => r.openingId === opening.id));
  const status: RuleStatus = outside.length ? "issue" : unknown.length ? "unable_to_determine" : "pass";
  const openingById = new Map(openings.map((opening) => [opening.id, opening]));
  const relevant = relations.filter((relation) => relation.status !== "inside");
  const diagnostics: RuleDiagnostic[] = relevant.map((relation) => {
    const opening = openingById.get(relation.openingId)!;
    if (relation.status === "outside") {
      const side = (relation.rightOvershootMeters ?? 0) > 0 ? "右侧" : "左侧", overshoot = Math.max(relation.rightOvershootMeters ?? 0, relation.leftOvershootMeters ?? 0);
      return { severity: "error", code: "opening_outside_host_wall", message: `${opening.name ?? opening.id} 的洞口${side}超出宿主墙端约 ${(overshoot * 1000).toFixed(1)} mm`, normalizedObjectIds: [opening.id, relation.wallId!], field: "opening.position[0] + opening.width / 2", actualValue: `${relation.openingEndMeters?.toFixed(6)} m`, expectedValue: `0–${relation.wallLengthMeters?.toFixed(6)} m（容差 ±${T.pointOnBoundaryMeters} m）`, origin: "source_data", recommendation: "检查窗户位置、洞口宽度或宿主墙关系；此检查使用 Pascal width 洞口宽度，不使用 frameThickness/frameDepth 或模型包围盒。" };
    }
    return { severity: "warning", code: relation.status === "unsupported" ? "curved_wall_opening_unsupported" : "invalid_opening_geometry", message: relation.reason ?? "无法判断", normalizedObjectIds: [opening.id], origin: relation.status === "unsupported" ? "insufficient_information" : "source_data", recommendation: relation.status === "unsupported" ? "提供沿曲线弧长的门窗定位后再检查。" : "修复宿主墙或门窗的几何字段后再检查。" };
  });
  return result("G1-013", "门窗位于有效开口边界", status, outside.length ? `${outside.length} 个门窗超出直墙有效区间` : unknown.length ? `${unknown.length} 个门窗因几何或宿主证据不足无法判断` : "所有可评价门窗均位于直墙有效区间", { details: relevant.map((r) => `${r.openingId}: ${r.status}${r.reason ? `（${r.reason}）` : ""}`), normalizedObjectIds: ids(affected), pascalSourceIds: rawIds(affected), measurements: relevant.flatMap((r) => { const opening = openingById.get(r.openingId)!; return [{ name: "wallLength", value: r.wallLengthMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "openingCenterAlongWall", value: r.openingCenterMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "openingWidth", value: opening.widthMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "openingStart", value: r.openingStartMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "openingEnd", value: r.openingEndMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "rightOvershoot", value: r.rightOvershootMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "leftOvershoot", value: r.leftOvershootMeters, unit: "m", normalizedObjectId: r.openingId }, { name: "resolvedWorldPosition", value: JSON.stringify(opening.resolvedWorldPosition), normalizedObjectId: r.openingId }]; }), thresholds: [{ name: "pointOnBoundaryTolerance", value: T.pointOnBoundaryMeters, unit: "m" }], missingData: unknown.map((r) => `${r.openingId}: ${r.reason}`), confidence: confidence(unknown.length ? "medium" : "high", unknown.map((r) => `${r.openingId}: ${r.reason}`)), diagnostics });
};

export const FIRST_G1_RULES: G1Rule[] = [ruleG1001, ruleG1002, ruleG1003, ruleG1004, ruleG1005, ruleG1013, ruleG1019];
