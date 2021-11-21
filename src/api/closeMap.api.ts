import axios from "axios";
import { ICloseMap, IFarMap } from "../interface/IMap";
import { getURL } from "./tool";

export const fetch = async (
  areaCode?: number,
  businessCode1?: number,
  businessCode2?: number,
  businessCode3?: number
): Promise<ICloseMap[]> => {
  const response = await axios({
    method: "GET",
    url: `/map/close`,
    params: {
      areaCode: areaCode,
      businessCode1: businessCode1,
      businessCode2: businessCode2,
      businessCode3: businessCode3,
    },
  });
  return response.data;
};
