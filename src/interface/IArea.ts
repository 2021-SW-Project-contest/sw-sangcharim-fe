import { IResponse } from "./IBase";

export interface IAreaListProp {
  areaCode: number;
  areaName: String;
}

export interface IArea extends IResponse {
  areaCategory: string;
  areaList: [IAreaListProp];
}
