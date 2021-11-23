import { IResponse } from "./IBase";
export interface IBusinessListProp {
  businessCode: number;
  businessName: string;
}
export interface IBusiness extends IResponse {
  businessCategory: string;
  businessList: [IBusinessListProp];
}
