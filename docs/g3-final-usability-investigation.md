# G3 V0.1 最终操作数据调查

## 范围与结论

本调查覆盖 G3-009～G3-013、G3-039～G3-043。Parser 核心、Editor 和 Pascal JSON 结构均未修改。评价层复用 Door Operation、Room Navigable Space、Obstacle、Furniture Use Zone 和 Fixture / Appliance Use Zone，并新增统一 Operation Zone。

V0.1 的操作区深度集中在 `src/evaluation/tolerances.ts`：固定柜/储物柜 0.60 m、抽屉 0.45 m、主要设备 0.60 m、窗前操作区 0.60 m。这些是基本使用参数，不是规范或舒适度标准。

## Pascal / Parser / Handoff 可用数据

| 对象 | Bellevue 数据 | 可自动使用的字段 | 缺失字段与处理 |
|---|---|---|---|
| 固定柜体、衣柜 | 可由 category、name、asset/function tags 识别；有位置、尺寸和旋转 | `id`、`levelId`、`category`、资产名称/标签、`dimensionsMeters`、`resolvedWorldPosition`、`resolvedRotationRadians` | 无独立门片数量、门宽、铰链、开向、角度。仅检查柜前接近空间；柜门开启保持 `unable_to_determine` |
| 抽屉 | 3 个 Bedside Table 的资产标签含 drawer | 对象位置、尺寸、旋转 | 无抽拉方向与拉出深度，G3-011 为可定位的 `unable_to_determine` |
| 厨房设备 | 可识别冰箱、灶具等；G3-029已有检查 | 对象类别、位置、尺寸、旋转 | Big Fridge 无独立门体几何；不以设备整体矩形冒充门扇 |
| 洗衣设备 | 识别到 Washing Machine `item_yatt1lmodexobbuf` | 对象类别、Level、位置、尺寸、旋转 | 无设备门几何；且对象在 Level 1，LAUNDRY Zone 在 Level 2，归属无法成立 |
| 窗户 | 有 `windowType`，包括 awning、casement、sliding、fixed；有宿主墙、位置与尺寸 | 可派生所在 Room 及室内侧操作区；固定窗可排除 | 无“是否需要日常操作”的用途语义。27扇非固定窗逐扇定位并保持 `unable_to_determine` |
| 洗衣/储藏空间 | Zone 名称可识别 `LAUNDRY`、`PANTRY`、`WALK-IN CLOSET`、`WIC 2` | 通过 Zone 与 Room Region 匹配得到物理空间 | 名称受控时可稳定分类；仍不把 Zone 直接当作 Room |
| 家政设备 | 可通过明确的 utility sink / ironing / 家政语义识别 | 位置、尺寸、旋转 | Bellevue 未形成两个同属可靠洗衣 Room 的家务设备，G3-043 不适用 |

没有根据模型外观或包围盒猜测柜门、抽屉、冰箱门、洗衣机门的开启方式。评价器支持在未来 Handoff 真正提供门片/抽屉字段时执行条件检查，但本轮不改变 JSON 结构。

## Operation Zone

每个操作区记录：owner、Level、Room Region、类型、Polygon、几何可靠性和诊断。家具局部 `+Z`（页面红色朝向线）作为对象正前方；窗户通过宿主墙法线两侧与 Room Region 的相交面积选择室内侧。操作区与障碍 footprint 做面积相交，并结合 Room 内部自由空间判断是否可从入口到达。

Operation Zone 相交本身不构成问题。只有操作位置几乎完全不可用，或可靠开启几何明确被阻挡时才判 `issue`；信息不足则输出 `unable_to_determine`。

## Bellevue 最终结果

- G3-009：`not_applicable`。MEP门后问题已由基础通行规则归因，本规则不重复报警。
- G3-010：`unable_to_determine`。2个固定厨房柜体缺少门片几何；柜前空间仍显示为诊断。
- G3-011：`unable_to_determine`。3个 Bedside Table 缺少抽拉方向和深度。
- G3-012：`unable_to_determine`。1台 Washing Machine 缺少设备门几何。
- G3-013：`unable_to_determine`。27扇非固定窗缺少日常操作用途语义；固定窗不参与。
- G3-039：`unable_to_determine`。Washing Machine 在 Level 1，唯一 LAUNDRY Zone 在 Level 2。
- G3-040：`pass`。未发现洗衣设备切断必要通道。
- G3-041：`pass`。4个独立储藏空间均有可靠入口和内部自由空间。
- G3-042：`issue`。2个 Closet 的柜前取物区只剩约3%和1%；其余柜体的门片开启仍保留警告诊断。
- G3-043：`not_applicable`。可靠洗衣 Room 内不足两个家务设备，不能执行相互冲突判断。

G3-042 的两个主要对象为 `item_j68jyi0mxu7g4d5d`（关联 `wall_7gjnzk8uod8j1v4v`）和 `item_qt7unfxoxp0opoa1`（关联 `wall_l7c7cudzy37f1rkf`、`shelf_e9uyd5ap46etz6hi`）。这两项需要画布人工确认对象正面方向和真实柜门形式；当前硬问题只表达“柜前几乎完全无法取物”，不声称已知柜门如何开启。
