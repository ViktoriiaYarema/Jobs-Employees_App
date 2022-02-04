import {ApiEnum} from "./api.enum";

export const ENDPOINT = {
  [ApiEnum.Jobs.toUpperCase()] : {
    uri: `/${ApiEnum.Jobs}`,
    method: 'GET'
  },
  [ApiEnum.Employees.toUpperCase()] : {
    uri: `/${ApiEnum.Employees}`,
    method: 'GET'
  },
}