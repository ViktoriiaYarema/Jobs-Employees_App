import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { AccamulatorType } from "../api/api.reducer";

export interface StoreType {
  app: {
    selectedJob: string | null;
  };

  api: {
    jobs?: AccamulatorType;
    employee?: AccamulatorType<EmployeeType>;
    providers?: AccamulatorType<EmployeeType>;
  };
  router: {
    action: string;
    previousLocations: string;
    location: {
      pathname: string;
      search: string;
      hash: string;
      state: null | {};
      key: string;
    };
  };
}
