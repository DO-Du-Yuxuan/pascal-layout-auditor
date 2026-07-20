import type { RuleResult } from "../evaluation/types";
import type { NodeData } from "../types";
import { resolveAncestorLevelId } from "../geometry/transform";

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

const measurement = (rule: RuleResult, name: string) => rule.measurements.find((item) => item.name === name)?.value;
const humanLevelName = (levelId: string | undefined, nodes: Record<string, NodeData>) => levelId ? nodes[levelId]?.name || "未命名楼层" : "楼层未确定";

export function evaluationFocusTargets(rule: RuleResult, nodes: Record<string, NodeData>): EvaluationFocusTarget[] {
  if (rule.status !== "issue") return [];
  const candidates = rule.normalizedObjectIds.map((id) => nodes[id]).filter((node): node is NodeData => Boolean(node));
  const primary = rule.ruleId === "G1-004" ? candidates.filter((node) => node.type === "wall")
    : rule.ruleId === "G1-005" ? candidates.filter((node) => node.type === "stair")
      : rule.ruleId === "G1-013" ? candidates.filter((node) => node.type === "window" || node.type === "door")
        : rule.ruleId === "G1-023" ? candidates.filter((node) => node.type === "item") : [];
  return primary.map((node, index) => {
    const levelId = resolveAncestorLevelId(node.id, nodes).levelId ?? null, levelName = humanLevelName(levelId ?? undefined, nodes);
    const typeLabel = rule.ruleId === "G1-004" ? `无效墙体 ${index + 1}` : rule.ruleId === "G1-023" ? `${node.name || "家具或设备"} ${index + 1}` : node.type === "stair" ? "楼梯" : node.type === "window" ? "窗户" : "门";
    const hostId = rule.ruleId === "G1-013" ? node.wallId ?? node.parentId : null;
    return { primaryId: node.id, relatedIds: hostId && nodes[hostId] ? [hostId] : [], label: `${typeLabel} · ${levelName}`, levelId, levelName };
  });
}

export function designerRulePresentation(rule: RuleResult, nodes: Record<string, NodeData>): DesignerRulePresentation {
  const targets = evaluationFocusTargets(rule, nodes), count = targets.length;
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
    const derivedCount = Number(measurement(rule, "derivedSpaceCount") ?? 0);
    return {
      title: "主要空间名称暂时无法完整核验",
      description: `当前 ${derivedCount} 个 Zone 派生空间均有名称，但系统还不能确认这些 Zone 是否覆盖全部主要房间。`,
      rationale: "目前缺少独立房间识别和主要空间分类，不能对房间全集作结论。",
      recommendation: "补充独立房间识别和主要空间分类后再核验。",
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
  return {
    title: rule.ruleName,
    description: rule.summary,
    rationale: rule.status === "pass" ? "当前数据满足本项基础检查。" : "请查看技术详情了解判断依据。",
    recommendation: rule.status === "pass" || rule.status === "not_applicable" ? "无需处理。" : "根据技术详情补充或修正数据。",
    problemCountLabel: rule.status === "issue" ? String(rule.normalizedObjectIds.length) : "0", targets,
  };
}

export function evaluationIssueTargets(rules: RuleResult[], nodes: Record<string, NodeData>): EvaluationIssueTarget[] {
  return rules.flatMap((rule) => designerRulePresentation(rule, nodes).targets.map((target, targetIndex) => ({ ...target, ruleId: rule.ruleId, targetIndex })));
}
