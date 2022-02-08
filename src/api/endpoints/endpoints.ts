import Base from "./base";
import { ApiEnum } from "../models/api.enum";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { JobType } from "../../enteties/entetiesJobs";

export const getJobsRepo = async (): Promise<JobType[]> => {
  const response = await Base.get(ApiEnum.Jobs);
  return response.data;
};

export const getEmployeesRepo = async (): Promise<EmployeeType[]> => {
  const response = await Base.get(ApiEnum.Providers);
  return response.data;
};
