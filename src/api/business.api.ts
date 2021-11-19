import axios from "axios";
import { IBusiness } from "../interface/IBusiness";
import API from "./API";

export const fetch = async (): Promise<IBusiness[]> => {
  const response = await axios({
    method: "GET",
    url: `/business`,
  });
  return response.data;
};
// export class ContentAPI implements API<IBusiness> {
//   async fetchAll(): Promise<IBusiness> {
//     const response = await axios({
//       method: "GET",
//       url: `/business`,
//     });
//     return response.data;
//   }
// }
