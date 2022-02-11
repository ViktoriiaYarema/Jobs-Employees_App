import { JobType } from "../../enteties/entetiesJobs";

export type ActionType<T = JobType> = {
  type: string;
  payload?: null | T[] | string;
};
