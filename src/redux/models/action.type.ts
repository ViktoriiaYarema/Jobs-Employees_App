import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { JobType } from "../../enteties/entetiesJobs";

export interface ActionType {
  type: string;
}
export interface ActionTypeApi<T = JobType> extends ActionType {
  payload?: null | T[];
}

export interface ActionTypeEmployee<T = EmployeeType> extends ActionType {
  payload: { id: string; data: T } | T | null;
}

export interface ActionTypeReducerPath extends ActionType {
  payload: {
    action: string;
    type: string;
    location: {
      pathname: string;
      search: string;
      hash: string;
      state: null | {};
      key: string;
    };
  };
}
