import axios from "axios";
import { IArea } from "../interface/IArea";
import { getURL } from "./tool";

export const areafetch = async (): Promise<IArea[]> => {
  const response = await axios({
    method: "GET",
    url: getURL(`/area`),
  });
  return response.data;
};
