export interface IAreaList {
  areaCode: number;
  lat: number;
  long: number;
  businessCount: number;
}
export interface IFarMap {
  focusLat: number;
  focusLong: number;
  areaList: [IAreaList];
}
