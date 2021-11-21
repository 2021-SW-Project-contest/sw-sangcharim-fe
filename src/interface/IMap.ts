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
export interface ICloseMap {
  name: string;
  lat: number;
  long: number;
  areaCode: number;
  areaName: string;
  businessCode: number;
  businessName: string;
}
