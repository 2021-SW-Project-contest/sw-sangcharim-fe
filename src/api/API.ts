import { IParamData, IRequest, IResponse } from "../interface/IBase";
export default interface API<T extends IResponse> {
  fetchAll(): Promise<T>;
}
export {};
