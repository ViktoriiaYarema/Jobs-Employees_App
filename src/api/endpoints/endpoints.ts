import Base from "./BaseClient";
import { ApiEnum } from "../models/api.enum";
import { EmployeeType } from "../../enteties/entetiesEmloyes";
import { JobType } from "../../enteties/entetiesJobs";

export const getJobsRepo = async (): Promise<JobType[]> => {
  const response = await Base.get(ApiEnum.Jobs);
  return response.data;
};

export const getEmployeesRepo = async (): Promise<EmployeeType[]> => {
  const response = await Base.get(ApiEnum.Employees);
  return response.data;
};
