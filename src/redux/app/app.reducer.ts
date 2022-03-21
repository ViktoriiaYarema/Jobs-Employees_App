import { APP_ACTIONS } from "./app.actions";

import { ActionTypeApi } from "../models/action.type";
import { LOCATION_CHANGE } from "redux-first-history";

const initialStateApp = {
  selectedJob: null,
};

export const appReducer = (state = initialStateApp, action: ActionTypeApi) => {
  if (action.type.startsWith(APP_ACTIONS.FILTER_EMPLOYEES_BYJOB)) {
    return {
      ...state,
      selectedJob: action.payload,
    };
  } else if (LOCATION_CHANGE) {
    return {
      ...state,
    };
  } else {
    return initialStateApp;
  }
};
