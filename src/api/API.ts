import { IParamData, IRequest, IResponse } from "../interface/IBase";
export default interface API<T extends IResponse, U extends IParamData> {
  fetchAll(data: U): Promise<T>;
}
export {};
