import { APP_ACTIONS } from "./app.actions";
import { ActionType } from "../models/action.type";

const initialStateApp = {
  selectedJob: null,
};

export const appReducer = (state = initialStateApp, action: ActionType) => {
  if (action.type.startsWith(APP_ACTIONS.FILTER_EMPLOYEES)) {
    return {
      ...state,
      selectedJob: action.payload,
    };
  } else {
    return initialStateApp;
  }
};
