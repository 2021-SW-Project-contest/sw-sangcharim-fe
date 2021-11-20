import { IResponse } from "./IBase";
import { IAreaListProp } from "./IArea";
import { IAreaList } from "./IMap";
// areaCode
// required
// integer (Areacode)
// businessCode1
// integer (Businesscode1)
// businessCode2
// integer (Businesscode2)
// businessCode3
//detail

export interface GetDetailParmas {
  areaCode: number;
  businessCode1?: number;
  businessCode2?: number;
  businessCode3?: number;
}

export interface DetailBusinessList {
  businessCode: number;
  businessName: string;
  businessCount: number;
}
export interface IDetail extends IResponse {
  area: IAreaListProp;
  businessList: [DetailBusinessList];
}

// customer
export interface GenderList {
  male: number;
  female: number;
}
export interface AgeList {
  male: number;
  female: number;
}

export interface ICustomer extends IResponse {
  area: IAreaListProp;
  genderRatio: GenderList;
  ageRatio: AgeList;
  businessList: [DetailBusinessList];
}
// sales
export interface SalesListProp {
  min: number;
  max: number;
  avg: number;
}
export interface DayListProp {
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
}

export interface TimeListProp {
  time0006: number;
  time0611: number;
  time1114: number;
  time1417: number;
  time1721: number;
  time2124: number;
}

export interface ISales extends IResponse {
  area: IAreaListProp;
  sales: SalesListProp;
  day: DayListProp;
  time: TimeListProp;
  businessList: [DetailBusinessList];
}

//future
export interface IFuture extends IResponse {
  area: IAreaListProp;
  areaSituation: number;
  areaClosure: number;
}
