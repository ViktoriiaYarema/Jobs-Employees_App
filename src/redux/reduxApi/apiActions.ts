import { EmployeeType } from "../../enteties/entetiesEmloyees";

export const API_ACTIONS = {
  FETCH_START: "FETCH_START_",
  FETCH_SUCCESS: "FETCH_SUCCESS_",
  FETCH_FAILD: "FETCH_FAILD_",
  FETCH_EMPLOYEE: "FETCH_EMPLOYEE",
};

export const apiActions = {
  fetchStart: (endpoint: string) => ({
    type: `${API_ACTIONS.FETCH_START}${endpoint.toUpperCase()}`,
  }),

  fetchSuccess: <T>(endpoint: string, payload: Promise<T[]> | null) => ({
    type: `${API_ACTIONS.FETCH_SUCCESS}${endpoint.toUpperCase()}`,
    payload,
  }),

  fetchEmployee: (payload: EmployeeType | null | undefined) => ({
    type: API_ACTIONS.FETCH_EMPLOYEE,
    payload,
  }),

  fetchFailure: (endpoint: string, payload: any) => ({
    type: `${API_ACTIONS.FETCH_FAILD}${endpoint.toUpperCase()}`,
    payload,
  }),
};
