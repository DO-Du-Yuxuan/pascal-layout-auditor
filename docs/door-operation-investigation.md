# Door Operation 数据调查

Bellevue 原始 Pascal JSON 的 26 扇 Door 均记录 `doorType`、`width`、`hingesSide`、`swingDirection`、`swingAngle`、`leafCount`、`slideDirection` 和 `trackStyle`。其中类型包括 `hinged`、`sliding`、`pocket`、`garage-sectional`、`double`；铰链侧为 left/right，开向为 inward/outward，平开角度为 90°。

Evaluation Handoff 在 `src/parser/evaluation-handoff.ts` 忠实传递这些字段，并额外给出已解析的墙上中心点和切向。评价器不根据门框包围盒推断铰链或开向。

操作模型只接受具备直墙宿主、宽度、铰链侧、开向和至少 60°开启角的单扇 `hinged` 门。门扇以门洞宽度为叶长、0.04 m 为几何厚度，扫掠使用扇形近似；`sliding`、`pocket` 和 `garage-sectional` 不运行门扇扫掠规则。`double` 虽有 `leafCount=2`，但只有一组铰链侧和开向，无法确认两片门扇关系，因此输出 `double_door_leaf_relation_unavailable`，不会把总门宽猜成单片门扇。任何缺失开启字段的平开门同样输出 `unable_to_determine`。

入口阻挡使用门洞两侧各 0.45 m 的检测带；保留至少 20% 清空比例即不视为完全阻断。门扇碰撞和门扇互锁使用 0.01 m² 面积容差。所有数值集中于 `src/evaluation/tolerances.ts`。

## Bellevue 结果

- Door 总数：26
- 可可靠生成单扇平开操作几何：17
- 推拉、口袋或车库门：7（不适用门扇扫掠）
- 双开门：2（缺少两片门扇独立关系，无法判断）
- G3-002：pass；26 扇门均保留基本入口区域
- G3-007：unable_to_determine；17 扇单开门未发现基本开启阻挡，2 扇双开门信息不足
- G3-008：unable_to_determine；17 扇可用单开门中未发现互锁，但 2 扇双开门缺少独立门扇关系，无法完整排除互锁

早期版本曾把一扇 1.426 m 宽双开门当作一整片单门扇，因而同时与邻墙和两台 AC block 相交。这是评价器建模误判，现已移除；报告不再将三次碰撞误写为三扇问题门。
