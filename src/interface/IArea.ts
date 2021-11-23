// import { IResponse } from "./IBase";

// export interface IAreaListProp {
//   areaCode: number;
//   areaName: String;
// }

// export interface IArea extends IResponse {
//   areaCategory: string;
//   areaList: [IAreaListProp];
// }

// IArea가 배열 형식으로 반환되지않아서 새로 만든 interface

interface IArea {
  areaCategory: String;
  areaList: [
    {
      areaCode: number;
      areaName: String;
    }
  ];
}

export type IAreaType = IArea[];
