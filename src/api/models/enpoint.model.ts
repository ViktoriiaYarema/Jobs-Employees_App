import { ApiEnum } from "./api.enum";
import {Api} from "../api";

export const ENDPOINT = {
  [ApiEnum.Jobs.toUpperCase()]: {
    uri: `/${ApiEnum.Jobs}`,
    method: "GET",
    request: Api.getJobs
  },
  [ApiEnum.Employees.toUpperCase()]: {
    uri: `/${ApiEnum.Employees}`,
    method: "GET",
    request: Api.getEmployees
  },
};
