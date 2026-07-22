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
  status?: RuleResult["status"];
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
  if (rule.status !== "issue" && rule.status !== "unable_to_determine") return [];
  const diagnosticIds = [...new Set(rule.diagnostics.filter((diagnostic) => rule.status === "issue" ? diagnostic.severity === "error" : diagnostic.severity !== "info").flatMap((diagnostic) => diagnostic.normalizedObjectIds.slice(0, 1)))];
  const focusIds = rule.ruleId === "G1-023" && rule.status === "issue" ? [...new Set(rule.diagnostics.filter((diagnostic) => ["item_outside_building_envelope", "item_penetrates_wall", "item_physical_collision"].includes(diagnostic.code)).flatMap((diagnostic) => diagnostic.normalizedObjectIds.slice(0, 1)))] : ["G3-001", "G3-002", "G3-007", "G3-008"].includes(rule.ruleId) || rule.status === "unable_to_determine" ? diagnosticIds : rule.normalizedObjectIds;
  const candidates = focusIds.map((id) => nodes[id]).filter((node): node is NodeData => Boolean(node));
  const primary = rule.ruleId === "G1-004" ? candidates.filter((node) => node.type === "wall")
    : rule.ruleId === "G1-005" || rule.ruleId === "G3-001" ? candidates.filter((node) => node.type === "stair")
      : rule.ruleId === "G1-013" ? candidates.filter((node) => node.type === "window" || node.type === "door")
        : rule.ruleId === "G1-023" ? candidates.filter((node) => node.type === "item")
          : ["G3-002", "G3-007", "G3-008"].includes(rule.ruleId) ? candidates.filter((node) => node.type === "door")
          : ["G1-007", "G1-009", "G1-019"].includes(rule.ruleId) ? candidates.filter((node) => node.type === "zone") : [];
  const nodeTargets = primary.map((node, index) => {
    const levelId = resolveAncestorLevelId(node.id, nodes).levelId ?? null, levelName = humanLevelName(levelId ?? undefined, nodes);
    const typeLabel = rule.ruleId === "G1-004" ? `无效墙体 ${index + 1}` : rule.ruleId === "G1-023" ? `${node.name || "家具或设备"} ${index + 1}` : ["G1-007", "G1-009", "G1-019"].includes(rule.ruleId) ? `${node.name || "功能区"} ${index + 1}` : node.type === "stair" ? "楼梯" : node.type === "window" ? "窗户" : "门";
    const hostId = rule.ruleId === "G1-013" ? node.wallId ?? node.parentId : null;
    const relatedIds = rule.ruleId.startsWith("G3-00") || rule.ruleId === "G1-023" ? rule.diagnostics.filter((diagnostic) => diagnostic.normalizedObjectIds[0] === node.id).flatMap((diagnostic) => diagnostic.normalizedObjectIds.filter((id) => id !== node.id && nodes[id])).filter((id, index, all) => all.indexOf(id) === index) : hostId && nodes[hostId] ? [hostId] : [];
    return { primaryId: node.id, relatedIds, label: `${typeLabel} · ${levelName}`, levelId, levelName, status: rule.status };
  });
  const roomTargets = ["G1-012", "G1-019", "G3-001", "G3-003", "G3-004", "G3-005", "G3-006"].includes(rule.ruleId) ? (roomAnalysis?.rooms ?? []).filter((room) => focusIds.includes(room.roomRegionId)).map((room, index) => { const navigationRule = ["G3-003", "G3-004", "G3-006"].includes(rule.ruleId), relatedIds = navigationRule ? rule.diagnostics.filter((diagnostic) => diagnostic.normalizedObjectIds.includes(room.roomRegionId)).flatMap((diagnostic) => diagnostic.normalizedObjectIds.filter((id) => id !== room.roomRegionId && nodes[id])).filter((id, position, all) => all.indexOf(id) === position) : rule.ruleId === "G3-001" && rule.status === "unable_to_determine" ? [] : room.boundaryWallIds, zoneNames = (roomAnalysis?.roomToZoneIds[room.roomRegionId] ?? []).map((id) => nodes[id]?.name?.trim()).filter((value): value is string => Boolean(value)), roomName = zoneNames.join(" / ") || `${rule.ruleId === "G3-001" ? "跨层待核验空间" : rule.ruleId === "G3-005" ? "无入口空间" : navigationRule ? rule.status === "unable_to_determine" ? "待核验空间" : "通行受阻空间" : "异常空间"} ${index + 1}`; return { primaryId: room.roomRegionId, relatedIds, label: `${roomName} · ${humanLevelName(room.levelId, nodes)}`, levelId: room.levelId, levelName: humanLevelName(room.levelId, nodes), status: rule.status }; }) : [];
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
    title: `发现 ${count} 个家具或设备放置冲突`,
    description: `其中 ${Number(measurement(rule, "outsideItemCount") ?? 0)} 个越出建筑范围、${Number(measurement(rule, "wallPenetrationCount") ?? 0)} 处嵌入墙体、${Number(measurement(rule, "itemCollisionPairCount") ?? 0)} 组占用同一段实体空间。`,
    rationale: "家具可以贴墙；只有实际穿入墙体才报警。家具平面投影重叠时，还会核对安装高度，地柜与吊柜高度错开不会被当作碰撞。",
    recommendation: "逐个在图中查看红色对象和橙色关联对象，检查位置、尺寸和安装高度。",
    problemCountLabel: String(count), targets,
  };
  if (rule.ruleId === "G1-023" && rule.status === "unable_to_determine") return {
    title: "部分家具或设备暂时无法完整核验",
    description: "缺少可靠建筑边界、对象占地、类别或安装高度，系统不会猜测是否越界或发生实体碰撞。",
    rationale: "范围检查需要平面占地；物理碰撞还需要两件对象的垂直高度区间。",
    recommendation: "补充 Floor/Slab 轮廓以及对象位置、宽度、深度、高度和安装高度。",
    problemCountLabel: "未确定", targets,
  };
  if (rule.ruleId === "G1-007") return { title: rule.status === "pass" ? "需要独立封闭的空间边界完整" : "部分应封闭空间没有形成独立房间", description: rule.summary, rationale: "卧室、卫生间和储藏类空间需要可靠边界，才能支持隐私、功能和后续通行检查。", recommendation: rule.status === "pass" ? "无需处理。" : "检查对应 Zone 周边墙体闭合情况和 Zone 轮廓。", problemCountLabel: rule.status === "issue" ? String(count) : "0", targets };
  if (rule.ruleId === "G1-009") return { title: rule.status === "issue" ? "发现功能区域异常重叠" : "未发现空间异常重叠", description: rule.summary, rationale: "重复或跨房间的功能区域会造成面积统计和空间归属错误。", recommendation: rule.status === "issue" ? "在图中检查红色 Zone 的轮廓是否重复或跨越分隔墙。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : "0", targets };
  if (rule.ruleId === "G1-012") return { title: rule.status === "issue" ? `发现 ${count} 个异常空间碎片` : "未发现错误空间", description: rule.summary, rationale: "极小或细长区域通常来自墙端缝隙、曲墙离散或边界误差，并非真实房间。", recommendation: rule.status === "issue" ? "逐个定位并检查相邻墙端与 Slab 边界。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : "0", targets };
  if (rule.ruleId === "G3-005") return { title: rule.status === "issue" ? `发现 ${count} 个无法进入的房间` : rule.status === "unable_to_determine" ? "部分房间入口暂时无法确认" : "使用空间均有有效入口", description: rule.summary, rationale: "形成完整房间的使用空间需要至少一个有效房门、开放入口或楼梯连接。", recommendation: rule.status === "issue" ? "检查是否遗漏房门、门的宿主关系，或该区域是否属于无需进入的构造空间。" : rule.status === "unable_to_determine" ? "先修复未解析门洞或补充空间用途。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : rule.status === "unable_to_determine" ? "未确定" : "0", targets };
  if (rule.ruleId === "G3-001") {
    const entranceCandidates = Number(measurement(rule, "entranceCandidateCount") ?? 0), unresolvedStairs = Number(measurement(rule, "unresolvedStairCount") ?? 0), connectedLevels = rule.measurements.filter((item) => item.name === "levelSameFloorConnected" && item.value === true).length;
    const crossLevelRooms = Number(measurement(rule, "crossLevelMainRoomCount") ?? 0);
    return { title: rule.status === "issue" ? `发现 ${count} 个外门不可达的主要空间` : rule.status === "unable_to_determine" ? `${crossLevelRooms} 个跨层主要空间尚未确认` : "主要空间均可从至少一个外门到达", description: rule.status === "unable_to_determine" ? `当前识别到 ${entranceCandidates} 个可靠外门，${connectedLevels} 个楼层各自的同层门网已经连通；但 ${unresolvedStairs} 座楼梯尚未可靠匹配上下层落地区域，因此不能确认另一层的 ${crossLevelRooms} 个主要空间。` : rule.summary, rationale: "只要存在任意一扇可靠外门能通达全部主要空间，即满足本项。当前只检查拓扑连通，不检查家具、净宽或门扇碰撞。", recommendation: rule.status === "issue" ? "逐个定位不可达空间，检查沿途房门、开放连接和楼梯设置。" : rule.status === "unable_to_determine" ? "先在图中查看楼梯，核对上下层ID及两端楼梯口所在空间。" : "无需处理。", supplemental: rule.status === "unable_to_determine" ? "黄色标注表示待核验，不代表这些空间已经不可达。" : undefined, problemCountLabel: rule.status === "issue" ? String(count) : rule.status === "unable_to_determine" ? String(crossLevelRooms) : "0", targets };
  }
  if (rule.ruleId === "G3-002") return { title: rule.status === "issue" ? `发现 ${count} 处被阻断的门口` : rule.status === "unable_to_determine" ? "部分门口暂时无法核验" : "门口均保留基本进入空间", description: rule.status === "issue" ? `${targets[0]?.label ?? "该门"}两侧的基本进入区域被${targets[0]?.relatedIds.map((id) => nodes[id]?.name || nodes[id]?.type).filter(Boolean).join("、") || "大型对象"}完全占用，可能无法正常进出。` : rule.summary, rationale: "门口需要保留可进入区域；轻微靠近但未完全堵住的家具不会被判为问题。", recommendation: rule.status === "issue" ? "在图中定位后移动或缩小阻挡对象，恢复门口两侧的基本进入空间。" : rule.status === "unable_to_determine" ? "补充门洞位置、宽度或关联对象的可靠平面占地。" : "无需处理。", problemCountLabel: rule.status === "issue" ? String(count) : rule.status === "unable_to_determine" ? "未确定" : "0", targets };
  if (rule.ruleId === "G3-007") return { title: rule.status === "issue" ? `发现 ${count} 扇无法打开到90°的门` : rule.status === "unable_to_determine" ? `${count} 扇门的90°开启情况待核验` : "门均可打开到90°", description: rule.status === "issue" ? `${targets[0]?.label ?? "该门"}在打开到90°之前会碰到${targets[0]?.relatedIds.map((id) => nodes[id]?.name || nodes[id]?.type).filter(Boolean).join("、") || "障碍物"}。` : rule.status === "unable_to_determine" ? "这些门缺少可靠位置、铰链或开向；可以逐扇在图中查看。" : rule.summary, rationale: "单开门按实际门扇计算；普通双开门按两片等宽门扇、各占总门洞一半，并采用JSON中的开向。", recommendation: rule.status === "issue" ? "检查门的开启方向、铰链侧，以及图中橙色对象的位置。" : rule.status === "unable_to_determine" ? "逐扇定位并补充门的位置、铰链或开向。" : "无需处理。", supplemental: rule.status === "unable_to_determine" ? "黄色标注表示数据待核验，不代表门已经打不开。" : undefined, problemCountLabel: rule.status === "issue" || rule.status === "unable_to_determine" ? String(count) : "0", targets };
  if (rule.ruleId === "G3-008") return { title: rule.status === "issue" ? `发现 ${count} 组严重门扇互锁` : rule.status === "unable_to_determine" ? `${count} 扇门的互锁风险待核验` : "未发现严重门扇互锁", description: rule.status === "issue" ? "两扇门打开到90°时会相互撞到对方关闭状态的门扇，可能形成互锁。" : rule.status === "unable_to_determine" ? "这些门缺少可靠操作几何，系统不能完整排除与附近门的互锁；可以逐扇在图中查看。" : rule.summary, rationale: "只有两扇门相互阻挡、导致双方都不能完成90°开启时才判为严重互锁。", recommendation: rule.status === "issue" ? "调整其中一扇门的开启方向、铰链侧或位置。" : rule.status === "unable_to_determine" ? "逐扇定位并补充门扇位置、铰链或开向。" : "无需处理。", supplemental: rule.status === "unable_to_determine" ? "黄色标注表示待核验，不代表已经发现严重互锁。" : undefined, problemCountLabel: rule.status === "issue" || rule.status === "unable_to_determine" ? String(count) : "0", targets };
  if (rule.ruleId === "G3-003") return { title: rule.status === "issue" ? `发现 ${count} 个主要空间通行中断` : rule.status === "unable_to_determine" ? `${count} 个主要空间路径待核验` : "主要空间内部基本路径连续", description: rule.status === "issue" ? "从门口进入后，无法保留约600毫米宽、路径中心距障碍物至少300毫米的连续基本通行空间。" : rule.summary, rationale: "本项检查房间内部的基础连通性，不评价舒适度、最优路线或规范通道宽度。", recommendation: rule.status === "issue" ? "定位红色中断区域，调整橙色阻挡对象或家具布局。" : rule.status === "unable_to_determine" ? "逐个定位黄色空间，检查Room几何、对象类别或占地轮廓。" : "无需处理。", problemCountLabel: rule.status === "issue" || rule.status === "unable_to_determine" ? String(count) : "0", targets };
  if (rule.ruleId === "G3-004") return { title: rule.status === "issue" ? `发现 ${count} 个房间依赖移动大型家具才能通行` : rule.status === "unable_to_determine" ? `${count} 个房间的家具阻断归因待核验` : "通行不依赖移动大型家具", description: rule.status === "issue" ? `${targets[0]?.relatedIds.map((id) => nodes[id]?.name || "大型家具").filter(Boolean).join("、") || "大型家具"}截断了门口到房间内部或其他门口之间的基本路径。` : rule.summary, rationale: "只有固定障碍下可通、加入大型家具后不通，才归入本规则。", recommendation: rule.status === "issue" ? "移动床、沙发、餐桌、书桌或独立柜体，恢复距障碍物至少300毫米的连续路径。" : rule.status === "unable_to_determine" ? "逐个定位并确认相关对象类别、尺寸和可移动属性。" : "无需处理。", problemCountLabel: rule.status === "issue" || rule.status === "unable_to_determine" ? String(count) : "0", targets };
  if (rule.ruleId === "G3-006") return { title: rule.status === "issue" ? `发现 ${count} 个房间被固定实体截断通行` : rule.status === "unable_to_determine" ? `${count} 个房间的固定障碍情况待核验` : "未发现路径穿越固定实体", description: rule.status === "issue" ? `${targets[0]?.relatedIds.map((id) => nodes[id]?.name || "固定对象").filter(Boolean).join("、") || "固定对象"}截断了日常基本路径。` : rule.status === "unable_to_determine" ? `${targets[0]?.label ?? "该空间"}按300毫米避让距离计算后没有可靠自由空间；图中橙色的${targets[0]?.relatedIds.map((id) => nodes[id]?.name || "固定设备").filter(Boolean).join("、") || "固定设备"}占用了主要空间，但系统还不能确认该设备空间是否适用日常通行检查。` : rule.summary, rationale: "固定柜体、洁具、设备和建筑构件造成的中断与可移动家具分开归因。", recommendation: rule.status === "issue" ? "调整固定对象、门口或空间布局。" : rule.status === "unable_to_determine" ? "点击“在图中查看”，核对该空间是否属于日常进入区域，以及固定设备是否真实占用通道。" : "无需处理。", supplemental: rule.status === "unable_to_determine" ? "黄色标注表示待核验，不代表已经发现固定对象阻断。" : undefined, problemCountLabel: rule.status === "issue" || rule.status === "unable_to_determine" ? String(count) : "0", targets };
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
