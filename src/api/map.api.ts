import axios from "axios";
import { IFarMap } from "../interface/IMap";
import { getURL } from "./tool";

export const fetch = async (): Promise<IFarMap> => {
  const response = await axios({
    method: "GET",
    url: `/map/far`,
  });
  return response.data;
};
