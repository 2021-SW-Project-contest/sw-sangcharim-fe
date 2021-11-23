import axios from "axios";
import { IMapParamData } from "../interface/IBase";
import { ICloseMap, IFarMap } from "../interface/IMap";
import { getURL } from "./tool";

export const fetch = async (data?: IMapParamData): Promise<ICloseMap[]> => {
  const response = await axios({
    method: "GET",
    url: `/map/close`,
    params: data,
  });
  return response.data;
};
