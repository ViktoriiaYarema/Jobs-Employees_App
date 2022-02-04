import { getJobsRepo } from "./endpoints/endpoints";
import { getEmployeesRepo } from "./endpoints/endpoints";

export const Api = {
  getJobs : getJobsRepo(),
  getEmployees: getEmployeesRepo()
}