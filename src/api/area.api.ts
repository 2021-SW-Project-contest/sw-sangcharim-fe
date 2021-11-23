import axios from "axios";
import { IAreaType } from "../interface/IArea";
import { getURL } from "./tool";

export const areafetch = async (): Promise<IAreaType> => {
  const response = await axios({
    method: "GET",
    url: `/area`,
  });
  return response.data;
};
