export interface IAreaListItems {
  areaCode: number;
  areaName: String;
}

export interface IArea {
  areaCategory: String;
  areaList: [IAreaListItems];
}
