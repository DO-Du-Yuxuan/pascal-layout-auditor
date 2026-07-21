import type { RuleResult } from "../evaluation/types";
import type { NodeData } from "../types";
import { resolveAncestorLevelId } from "../geometry/transform";
import type { RoomRegionAnalysis } from "../evaluation/room-regions";

export type EvaluationFocusTarget = {
  primaryId: string;
  relatedIds: string[];
  label: string;
  levelId: string | null;
  levelName: string;
};

export type DesignerRulePresentation = {
  title: string;
  description: string;
  rationale: string;
  recommendation: string;
  supplemental?: string;
  problemCountLabel: string;
  targets: EvaluationFocusTarget[];
};

/** A canvas-facing index of every issue that has a known renderable object. */
export type EvaluationIssueTarget = EvaluationFocusTarget & { ruleId: string; targetIndex: number };
const statusPriority: Record<RuleResult["status"], number> = { issue: 0, unable_to_determine: 1, pass: 2, not_applicable: 3 };
export const orderEvaluationRulesForDisplay = (rules: RuleResult[]) => rules.map((rule, index) => ({ rule, index })).sort((a, b) => statusPriority[a.rule.status] - statusPriority[b.rule.status] || a.index - b.index).map((item) => item.rule);

const measurement = (rule: RuleResult, name: string) => rule.measurements.find((item) => item.name === name)?.value;
const humanLevelName = (levelId: string | undefined, nodes: Record<string, NodeData>) => levelId ? nodes[levelId]?.name || "未命名楼层" : "楼层未确定";

export function evaluationFocusTargets(rule: RuleResult, nodes: Record<string, NodeData>, roomAnalysis?: RoomRegionAnalysis | null): EvaluationFocusTarget[] {
  if (rule.status !== "issue") return [];
  const focusIds = rule.ruleId === "G1-023" ? [...new Set(rule.diagnostics.filter((diagnostic) => diagnostic.code === "item_outside_building_envelope").flatMap((diagnostic) => diagnostic.normalizedObjectIds.slice(0, 1)))] : rule.normalizedObjectIds;
  const candidates = focusIds.map((id) => nodes[id]).filter((node): node is NodeData => Boolean(node));
  const primary = rule.ruleId === "G1-004" ? candidates.filter((node) => node.type === "wall")
    : rule.ruleId === "G1-005" ? candidates.filter((node) => node.type === "stair")
      : rule.ruleId === "G1-013" ? candidates.filter((node) => node.type === "window" || node.type === "door")
        : rule.ruleId === "G1-023" ? candidates.filter((node) => node.type === "item")
          : ["G1-007", "G1-009", "G1-019"].includes(rule.ruleId) ? candidates.filter((node) => node.type === "zone") : [];
  const nodeTargets = primary.map((node, index) => {
    const levelId = resolveAncestorLevelId(node.id, nodes).levelId ?? null, levelName = humanLevelName(levelId ?? undefined, nodes);
    const typeLabel = rule.ruleId === "G1-004" ? `无效墙体 ${index + 1}` : rule.ruleId === "G1-023" ? `${node.name || "家具或设备"} ${index + 1}` : ["G1-007", "G1-009", "G1-019"].includes(rule.ruleId) ? `${node.name || "功能区"} ${index + 1}` : node.type === "stair" ? "楼梯" : node.type === "window" ? "窗户" : "门";
    const hostId = rule.ruleId === "G1-013" ? node.wallId ?? node.parentId : null;
    return { primaryId: node.id, relatedIds: hostId && nodes[hostId] ? [hostId] : [], label: `${typeLabel} · ${levelName}`, levelId, levelName };
  });
  const roomTargets = ["G1-012", "G3-001", "G3-005"].includes(rule.ruleId) ? (roomAnalysis?.rooms ?? []).filter((room) => rule.normalizedObjectIds.includes(room.roomRegionId)).map((room, index) => ({ primaryId: room.roomRegionId, relatedIds: room.boundaryWallIds, label: `${rule.ruleId === "G3-001" ? "不可达空间" : rule.ruleId === "G3-005" ? "无入口空间" : "异常空间"} ${index + 1} · ${humanLevelName(room.levelId, nodes)}`, levelId: room.levelId, levelName: humanLevelName(room.levelId, nodes) })) : [];
  return [...nodeTargets, ...roomTargets];
}

export function designerRulePresentation(rule: RuleResult, nodes: Record<string, NodeData>, roomAnalysis?: RoomRegionAnalysis | null): DesignerRulePresentation {
  const targets = evaluationFocusTargets(rule, nodes, roomAnalysis), count = targets.length;
  if (rule.ruleId === "G1-004" && rule.status === "issue") return {
    title: `发现 ${count} 段无效墙体`,
    description: "这些墙段的起点和终点重合，实际长度为 0，可能是误操作产生的无效墙段。",
    rationale: "零长度墙无法形成有效墙面，也可能影响后续尺寸、开口和空间检查。",
    recommendation: "在图中逐段定位后删除无效墙体，或重新确定墙体的起点和终点。",
    problemCountLabel: String(count), targets,
  };
  if (rule.ruleId === "G1-005" && rule.status === "issue") return {
    title: "楼梯的楼层关联已丢失",
    description: "这座楼梯记录的起始楼层和到达楼层在当前项目中都不存在，因此无法确认它实际连接的楼层。",
    rationale: "楼层关联缺失会使跨层关系、到达层入口和后续通行检查失去依据。",
    recommendation: "检查楼梯的上下楼层设置，并重新关联到项目中的有效楼层。",
    supplemental: "可以在图中定位楼梯本身；缺失的楼层无法高亮。",
    problemCountLabel: String(count), targets,
  };
  if (rule.ruleId === "G1-013" && rule.status === "issue") {
    const overshoot = Number(measurement(rule, "rightOvershoot") ?? measurement(rule, "leftOvershoot")), tolerance = Number(rule.thresholds.find((item) => item.name === "pointOnBoundaryTolerance")?.value);
    return {
      title: "窗户超出所在墙体",
      description: `该窗洞右侧超出宿主墙约 ${Number.isFinite(overshoot) ? Math.round(overshoot * 1000) : "—"} 毫米，超过当前允许的 ${Number.isFinite(tolerance) ? Math.round(tolerance * 1000) : "—"} 毫米几何容差。`,
      rationale: "超出墙端的洞口可能造成墙体与窗洞关系错误，并影响施工尺寸。",
      recommendation: "检查窗户位置、洞口宽度或宿主墙长度。",
      problemCountLabel: String(count), targets,
    };
  }
  if (rule.ruleId === "G1-019" && rule.status === "unable_to_determine") {
    const reliableRoomCount = Number(measurement(rule, "reliableRoomRegionCount") ?? 0);
    const unmatchedRoomCount = Number(measurement(rule, "unmatchedRoomCount") ?? 0);
    return {
      title: "主要空间名称暂时无法完整核验",
      description: reliableRoomCount === 0
        ? "当前没有形成可用于命名核验的可靠 Room Region，系统不会把 Zone 直接当作房间。"
        : `当前识别出 ${reliableRoomCount} 个可靠 Room Region，其中 ${unmatchedRoomCount} 个尚未匹配到可用于命名的 Zone。`,
      rationale: "物理房间与设计师标注的功能 Zone 是两类对象；只有可靠匹配后才能核验房间名称。",
      recommendation: reliableRoomCount === 0 ? "先检查建筑边界和墙体分隔是否能形成可靠空间。" : "核对未匹配 Room Region 附近的 Zone 范围和名称。",
      supplemental: "这不代表已经发现未命名房间。",
      problemCountLabel: "未确定", targets: [],
    };
  }
  if (rule.ruleId === "G1-006") {
    const unavailable = Number(measurement(rule, "usableForEvaluation") === false ? 1 : 0);
    return {
      title: rule.status === "pass" ? "已识别各楼层的建筑范围" : "建筑范围暂时无法可靠识别",
      description: rule.status === "pass" ? "系统已根据楼层中的 Floor/Slab 轮廓生成建筑平面范围。" : "当前 Floor/Slab 轮廓不足或存在异常，系统不能可靠判断该楼层的室内建筑范围。",
      rationale: "建筑范围是判断家具、设备和后续空间关系的共同依据。",
      recommendation: rule.status === "pass" ? "可在画布中打开“显示建筑边界”核对结果。" : "检查该楼层的 Floor/Slab 轮廓是否完整、闭合且属于室内区域。",
      problemCountLabel: rule.status === "pass" ? "0" : String(Math.max(1, unavailable)), targets: [],
    };
  }
  if (rule.ruleId === "G1-023" && rule.status === "issue") return {
    title: `发现 ${count} 个家具或设备越出建筑范围`,
    description: "这些对象的实际平面占地有一部分落在计算出的建筑范围之外。",
    rationale: "越界对象可能影响布置、施工尺寸或室内外功能判断。",
    recommendation: "在图中定位后检查对象位置、尺寸和所属楼层；室外对象应使用明确的室外分类。",
    problemCountLabel: String(count), targets,
  };
  if (rule.ruleId === "G1-023" && rule.status === "unable_to_determine") return {
    title: "部分家具或设备暂时无法核验范围",
    description: "缺少可靠建筑边界、对象占地或类别信息，系统不会猜测对象是否在室内。",
    rationale: "需要同时具备可靠的建筑范围和对象平面占地，才能判断是否越界。",
    recommendation: "补充 Floor/Slab 轮廓以及对象位置、宽度、深度和类别。",
    problemCountLabel: "未确定", targets,
  };
  if (rule.ruleId === "G1-007") return { title: rule.status === "pass" ? "需要独立封闭的空间边界完整" : "部分应封闭空间没有形成独立房间", description: rule.summary, rationale: "卧室、卫生间和储藏类空间需要可靠边界，才能支持隐私、功能和后续通行检查。", recommendation: rule.status === "pass" ? "无需处理。" : "检查对应 Zone 周边墙体闭合情况和 Zone 轮廓。", problemCountLabel: rule.status === "issue" ? String(count) : "0", targets };
  if (rule.ruleId === "G1-009") return { title: rule.status === "issue" ? "发现功能区域异常重叠" : "未发现空间异常重叠", description: rule.summary, rationale: "重复或跨房间的功能区域会造成面积统计和空间归属错误。", recommendation: rule.status === "issue" ? "在图中检查红色 Zone 的轮廓是否重复或跨越分隔墙。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : "0", targets };
  if (rule.ruleId === "G1-012") return { title: rule.status === "issue" ? `发现 ${count} 个异常空间碎片` : "未发现错误空间", description: rule.summary, rationale: "极小或细长区域通常来自墙端缝隙、曲墙离散或边界误差，并非真实房间。", recommendation: rule.status === "issue" ? "逐个定位并检查相邻墙端与 Slab 边界。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : "0", targets };
  if (rule.ruleId === "G3-005") return { title: rule.status === "issue" ? `发现 ${count} 个无法进入的房间` : rule.status === "unable_to_determine" ? "部分房间入口暂时无法确认" : "使用空间均有有效入口", description: rule.summary, rationale: "形成完整房间的使用空间需要至少一个有效房门、开放入口或楼梯连接。", recommendation: rule.status === "issue" ? "检查是否遗漏房门、门的宿主关系，或该区域是否属于无需进入的构造空间。" : rule.status === "unable_to_determine" ? "先修复未解析门洞或补充空间用途。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : rule.status === "unable_to_determine" ? "未确定" : "0", targets };
  if (rule.ruleId === "G3-001") {
    const entranceCandidates = Number(measurement(rule, "entranceCandidateCount") ?? 0), unresolvedStairs = Number(measurement(rule, "unresolvedStairCount") ?? 0), connectedLevels = rule.measurements.filter((item) => item.name === "levelSameFloorConnected" && item.value === true).length;
    return { title: rule.status === "issue" ? `发现 ${count} 个外门不可达的主要空间` : rule.status === "unable_to_determine" ? "跨层空间可达性尚未确认" : "主要空间均可从至少一个外门到达", description: rule.status === "unable_to_determine" ? `当前识别到 ${entranceCandidates} 个可靠外门，且有 ${connectedLevels} 个楼层的同层门网已经连通${unresolvedStairs ? `；但有 ${unresolvedStairs} 座楼梯的楼层连接无效` : ""}，因此跨层部分暂时无法作结论。` : rule.summary, rationale: "只要存在任意一扇可靠外门能通达全部主要空间，即满足本项。当前只检查拓扑连通，不检查家具、净宽或门扇碰撞。", recommendation: rule.status === "issue" ? "逐个定位不可达空间，检查沿途房门、开放连接和楼梯设置。" : rule.status === "unable_to_determine" ? "修复楼梯上下层引用并确认两层落地区域后重新评价。" : "无需处理。", supplemental: rule.status === "unable_to_determine" ? "“无法判断”不代表已经发现不可达空间；Bellevue 两个楼层的同层房间目前均已连通。" : undefined, problemCountLabel: rule.status === "issue" ? String(count) : rule.status === "unable_to_determine" ? "未确定" : "0", targets };
  }
  return {
    title: rule.ruleName,
    description: rule.summary,
    rationale: rule.status === "pass" ? "当前数据满足本项基础检查。" : "请查看技术详情了解判断依据。",
    recommendation: rule.status === "pass" || rule.status === "not_applicable" ? "无需处理。" : "根据技术详情补充或修正数据。",
    problemCountLabel: rule.status === "issue" ? String(rule.normalizedObjectIds.length) : "0", targets,
  };
}

export function evaluationIssueTargets(rules: RuleResult[], nodes: Record<string, NodeData>, roomAnalysis?: RoomRegionAnalysis | null): EvaluationIssueTarget[] {
  return rules.flatMap((rule) => designerRulePresentation(rule, nodes, roomAnalysis).targets.map((target, targetIndex) => ({ ...target, ruleId: rule.ruleId, targetIndex })));
}
