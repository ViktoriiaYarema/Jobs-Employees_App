import {
  getJobsRepo,
  getEmployeesRepo,
} from "./endpoints/endpoints";

export const Api = {
  getJobs: getJobsRepo(),
  getEmployees: getEmployeesRepo(),
};
