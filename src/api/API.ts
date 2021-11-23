import { IParamData, IRequest, IResponse } from "../interface/IBase";
import { GetDetailParmas } from "../interface/IDetail";
export default interface API<T extends IResponse> {
  fetchAll(): Promise<T>;
}
export {};
