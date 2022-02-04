import Base from "./BaseClient";
import { ApiEnum } from "../models/api.enum";

export const getJobsRepo = async () => {
  const response = await Base.get(ApiEnum.Jobs);
  return response.data;
};

export const getEmployeesRepo = async () => {
  const response = await Base.get(ApiEnum.Employees);
  return response.data;
};
