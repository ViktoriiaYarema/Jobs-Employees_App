import { ApiEnum } from "./api.enum";
import {Api} from "../api";

export const ENDPOINT = {
  [ApiEnum.Jobs.toUpperCase()]: {
    uri: `/${ApiEnum.Jobs}`,
    method: "GET",
    request: Api.getJobs
  },
  [ApiEnum.Providers.toUpperCase()]: {
    uri: `/${ApiEnum.Providers}`,
    method: "GET",
    request: Api.getEmployees
  },
};
