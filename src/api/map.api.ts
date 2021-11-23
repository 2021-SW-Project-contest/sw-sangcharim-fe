import axios from "axios";
import { IMapParamData } from "../interface/IBase";
import { IFarMap } from "../interface/IMap";
import { getURL } from "./tool";

export const fetch = async (data?: IMapParamData): Promise<IFarMap> => {
  const response = await axios({
    method: "GET",
    url: getURL(`/map/far`),
    params: data,
  });
  return response.data;
};
