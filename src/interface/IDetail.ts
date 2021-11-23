import { IResponse } from "./IBase";
import { IArea, IAreaListItems } from "./IArea";
import { IAreaList } from "./IMap";

export interface GetDetailParmas {
  areaCode: number;
  businessCode1?: number;
  businessCode2?: number;
  businessCode3?: number;
}

export interface DetailBusinessList {
  businessCode: number;
  businessName: string;
  businessClosure: number;
}
export interface IDetail extends IResponse {
  area: IArea;
  businessList: [DetailBusinessList];
}

// customer
export interface GenderList {
  male: number;
  female: number;
}
export interface AgeList {
  age10: number;
  age20: number;
  age30: number;
  age40: number;
  age50: number;
  age60: number;
}

export interface ICustomer extends IResponse {
  area: IAreaListItems;
  genderRatio: GenderList;
  ageRatio: AgeList;
  // business: [DetailBusinessList];
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
  area: IAreaListItems;
  sales: SalesListProp;
  day: DayListProp;
  time: TimeListProp;
  businessList: [DetailBusinessList];
}

//future
export interface IFuture extends IResponse {
  area: IAreaListItems;
  areaSituation: string;
  areaClosure: number;
  business: [DetailBusinessList];
}
