import axios from "axios";
import {
  ICustomer,
  IDetail,
  IFuture,
  ISales,
  GetDetailParmas,
} from "../interface/IDetail";
import { IAreaListProp } from "../interface/IArea";

export const detailfetch = async (
  data: GetDetailParmas
): Promise<IDetail[]> => {
  const response = await axios({
    method: "GET",
    url: `/detail`,
    params: data,
  });
  return response.data;
};

export const salesfetch = async (data: GetDetailParmas): Promise<ISales[]> => {
  const response = await axios({
    method: "GET",
    url: `detail/sales`,
    params: {
      areaCode: data?.areaCode,
    },
  });
  return response.data;
};

export const customerfetch = async (
  data: IAreaListProp
): Promise<ICustomer[]> => {
  const response = await axios({
    method: "GET",
    url: `detail/customer`,
    params: {
      areaCode: data?.areaCode,
    },
  });
  return response.data;
};

export const futurefetch = async (data?: IAreaListProp): Promise<IFuture[]> => {
  const response = await axios({
    method: "GET",
    url: `detail/future`,
    params: {
      areaCode: data?.areaCode,
    },
  });
  return response.data;
};
