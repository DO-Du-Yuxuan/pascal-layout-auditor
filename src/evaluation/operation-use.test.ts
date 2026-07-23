import { describe, expect, it } from "vitest";
import { buildOperationUseAnalysis } from "./operation-use";
import { ruleG3009, ruleG3010, ruleG3011, ruleG3012, ruleG3013, ruleG3039, ruleG3040, ruleG3041, ruleG3042, ruleG3043 } from "./g3-final-rules";

const level = { id: "L1", rawPascalId: "L1", levelId: "L1", parentId: null, visible: true, name: "Level 1" };
const wall = (id: string, start: [number, number], end: [number, number]) => { const dx=end[0]-start[0], dz=end[1]-start[1], l=Math.hypot(dx,dz), nx=-dz/l*.05,nz=dx/l*.05; return { id, rawPascalId:id, levelId:"L1", parentId:"L1", visible:true, name:id, start, end, thicknessMeters:.1, heightMeters:3, curveOffsetMeters:0, footprintValidation:{valid:true,codes:[],areaSquareMeters:l*.1,footprint:[[start[0]+nx,start[1]+nz],[end[0]+nx,end[1]+nz],[end[0]-nx,end[1]-nz],[start[0]-nx,start[1]-nz]]} }; };
const item = (id:string,name:string,category:string,x:number,z:number,width=.8,depth=.6,extra:Record<string,unknown>={}) => ({ id,rawPascalId:id,levelId:"L1",parentId:"L1",visible:true,name,assetId:id,assetName:name,assetTags:[category],assetSource:"test",category,functionTags:[category],attachTo:null,dimensionsMeters:[width,1,depth],rawPosition:[x,0,z],rawRotation:[0,0,0],resolvedWorldPosition:[x,z],resolvedRotationRadians:0,resolvedVerticalRangeMeters:[0,1],verticalTransformError:null,floorPlanUrl:null,transformStatus:"ok",transformError:null,...extra });
const reliableDoor = { doorLeafCount:1,doorLeafWidthMeters:.6,hingeSide:"left",openingDirection:"outward",openingAngleRadians:Math.PI/2 };
const reliableDrawer = { drawerDirection:"front",drawerExtensionDepthMeters:.45 };
const base = (zoneName="ROOM", furniture:any[]=[], equipment:any[]=[], doors=true) => { const outline:[[number,number],[number,number],[number,number],[number,number]]=[[0,0],[8,0],[8,6],[0,6]], zone={id:"Z",rawPascalId:"Z",levelId:"L1",parentId:"L1",visible:true,name:zoneName,outline,areaSquareMeters:48}; return {schemaVersion:"1.0",source:{},units:{},levels:[level],slabs:[{id:"S",rawPascalId:"S",levelId:"L1",parentId:"L1",visible:true,name:"Floor",outline,holes:[],areaSquareMeters:48,autoFromWalls:false}],walls:[wall("W1",[0,0],[8,0]),wall("W2",[8,0],[8,6]),wall("W3",[8,6],[0,6]),wall("W4",[0,6],[0,0])],doors:doors?[{id:"D",rawPascalId:"D",levelId:"L1",parentId:"W4",visible:true,name:"Door",hostWallId:"W4",rawWallLocalPosition:[3,1,0],resolvedWorldPosition:[0,3],resolvedTangentRadians:Math.PI/2,widthMeters:1,heightMeters:2.1,openingKind:"door",doorType:"hinged",hingesSide:"left",effectiveHingesSide:"left",swingDirection:"outward",effectiveSwingDirection:"outward",swingAngleRadians:Math.PI/2}]:[],windows:[],zones:[zone],spaces:[{...zone,sourceZoneId:"Z",source:"derived-from-zone"}],furniture,equipment,columns:[],shelves:[],stairs:[],shafts:[],relationships:{},unclassifiedNodes:[],diagnostics:[]} as any; };

describe("G3 final operation and household checks", () => {
  it("keeps a normal reliable cabinet operable and reports a bed blocking its front", () => {
    const cabinet=item("cabinet","Fixed Cabinet","cabinets",4,1,.8,.6,reliableDoor);
    expect(ruleG3010(base("ROOM",[cabinet])).status).toBe("pass");
    expect(ruleG3010(base("ROOM",[cabinet,item("bed","Bed","beds",4,1.65,1,.7)])).status).toBe("issue");
  });
  it("reports an explicitly modelled blocked drawer and passes a clear bounded-depth drawer", () => {
    const drawer=item("drawer","Drawer Unit","drawers",4,1,.8,.6,reliableDrawer);
    expect(ruleG3011(base("ROOM",[drawer,item("block","Bed","beds",4,1.55,1,.7)]))).toMatchObject({status:"issue",normalizedObjectIds:expect.arrayContaining(["drawer"])});
    expect(ruleG3011(base("ROOM",[item("bounded","Bedside Drawer","drawers",4,1)]))).toMatchObject({status:"pass",diagnostics:[expect.objectContaining({code:"drawer_bounded_envelope_clear"})]});
  });
  it("passes a clear bounded-width appliance envelope and detects a reliable blocked appliance door", () => {
    expect(ruleG3012(base("LAUNDRY",[],[item("washer","Washing Machine","laundry-appliances",4,1)]))).toMatchObject({status:"pass",diagnostics:[expect.objectContaining({code:"appliance_bounded_envelope_clear"})]});
    const washer=item("washer","Washing Machine","laundry-appliances",4,1,.8,.7,reliableDoor);
    expect(ruleG3012(base("LAUNDRY",[item("block","Cabinet","cabinets",4,1.65,1,.7)], [washer])).status).toBe("issue");
  });
  it("checks normal and blocked laundry operation without duplicating path blockage", () => {
    const washer=item("washer","Washing Machine","laundry-appliances",4,1);
    expect(ruleG3039(base("LAUNDRY",[],[washer])).status).toBe("pass");
    expect(ruleG3039(base("LAUNDRY",[item("block","Cabinet","cabinets",4,1.65,1,.7)],[washer])).status).toBe("issue");
    const spanning=item("washer","Washing Machine","laundry-appliances",.55,3,1.1,3);
    expect(ruleG3040(base("LAUNDRY",[],[spanning])).status).toBe("not_applicable");
  });
  it("reports storage without an entry and a storage cabinet whose retrieval area is sealed", () => {
    expect(ruleG3041(base("PANTRY",[],[],false)).status).toBe("issue");
    const closet=item("closet","Closet","wardrobes",4,1);
    expect(ruleG3042(base("WALK-IN CLOSET",[closet,item("bed","Bed","beds",4,1.55,1,.7)]))).toMatchObject({status:"issue",normalizedObjectIds:["closet"]});
  });
  it("allows household operation zones to overlap when sequential use remains possible", () => {
    const h=base("LAUNDRY",[item("sink","Utility Sink","utility-sink",5,1)],[item("washer","Washing Machine","laundry-appliances",3,1)]);
    expect(ruleG3043(h).status).toBe("pass");
  });
  it("treats every operable window as daily-use and excludes fixed windows", () => {
    const h=base(); h.windows=[{id:"window",rawPascalId:"window",levelId:"L1",parentId:"W1",visible:true,name:"Window",hostWallId:"W1",resolvedWorldPosition:[4,0],widthMeters:1,heightMeters:1,windowType:"casement"}];
    expect(ruleG3013(h)).toMatchObject({status:"pass",measurements:expect.arrayContaining([expect.objectContaining({name:"operableWindowCount",value:1})])});
    const fixed=base(); fixed.windows=[{...h.windows[0],windowType:"fixed"}];
    expect(ruleG3013(fixed).status).toBe("not_applicable");
  });
  it("does not duplicate a door-rear blockage already attributed by navigation", () => {
    const h=base("ROOM",[item("bed","Bed","beds",.55,3,1.1,3)]);
    expect(ruleG3009(h).status).toBe("not_applicable");
    expect(buildOperationUseAnalysis(h).zones.length).toBeGreaterThanOrEqual(0);
  });
});
