import { JobType } from "./../../enteties/entetiesJobs";
import { EmployeeType } from "../../enteties/entetiesEmloyes";

export type ActionType = {
  type: string;
  payload?: null | (JobType| EmployeeType)[];
};

export const API_ACTIONS = {
  FETCH_START: "FETCH_START_",
  FETCH_SUCCESS: "FETCH_SUCCESS_",
  FETCH_FAILD: "FETCH_FAILD_",
};

export const apiActions = {
  fetchStart: (endpoint: string) => ({
    type: `${API_ACTIONS.FETCH_START}${endpoint.toUpperCase()}`,
  }),

  fetchSuccess: (
    endpoint: string,
    payload: any
  ) => ({
    type: `${API_ACTIONS.FETCH_SUCCESS}${endpoint.toUpperCase()}`,
    payload,
  }),

  fetchFailure: (endpoint: string, payload: any) => ({
    type: `${API_ACTIONS.FETCH_FAILD}${endpoint.toUpperCase()}`,
    payload,
  }),
};
