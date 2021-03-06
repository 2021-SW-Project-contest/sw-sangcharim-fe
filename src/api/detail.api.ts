import axios from "axios";
import {
  ICustomer,
  IDetail,
  IFuture,
  ISales,
  GetDetailParmas,
} from "../interface/IDetail";
import { getURL } from "./tool";

export const detailfetch = async (
  data: GetDetailParmas
): Promise<IDetail[]> => {
  const response = await axios({
    method: "GET",
    url: getURL(`/detail`),
    params: data,
  });
  return response.data;
};

export const salesfetch = async (data: GetDetailParmas): Promise<ISales> => {
  const response = await axios({
    method: "GET",
    url: getURL(`/detail/sales`),
    params: data,
  });
  return response.data;
};

export const customerfetch = async (
  data: GetDetailParmas
): Promise<ICustomer> => {
  const response = await axios({
    method: "GET",
    url: getURL(`/detail/customer`),
    params: data,
  });
  return response.data;
};

export const futurefetch = async (data: GetDetailParmas): Promise<IFuture> => {
  const response = await axios({
    method: "GET",
    url: getURL(`/detail/future`),
    params: data,
  });
  return response.data;
};
