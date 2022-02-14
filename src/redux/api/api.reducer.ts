import { ActionTypeApi } from "../models/action.type";
import { API_ACTIONS } from "./api.actions";
import { ENDPOINT } from "../../api/models/enpoint.model";
import { camelCase } from "lodash";
import { JobType } from "../../enteties/entetiesJobs";

export type AccamulatorType<T = JobType> = {
  data: T[] | null;
  loading: boolean;
  error: null | boolean;
};

const initialState = () => {
  return Object.keys(ENDPOINT).reduce(
    (acc: Record<string, AccamulatorType>, next: string) => {
      const inner: AccamulatorType = {
        data: null,
        loading: false,
        error: null,
      };

      return {
        ...acc,
        [camelCase(next)]: {
          ...inner,
        },
      };
    },
    {}
  );
};

const INITIAL_STATE = initialState();

const onParseKey = (type: string, api: string) => {
  return camelCase(type.replaceAll(`${api}`, ""));
};

export const apiReducer = (state = INITIAL_STATE, action: ActionTypeApi) => {
  if (action.type.startsWith(API_ACTIONS.FETCH_START)) {
    const inner = onParseKey(action.type, API_ACTIONS.FETCH_START);

    return {
      ...state,
      [inner]: {
        ...state[inner],
        data: null,
        loading: true,
        error: null,
      },
    };
  } else if (action.type.startsWith(API_ACTIONS.FETCH_SUCCESS)) {
    const innerSucces = onParseKey(action.type, API_ACTIONS.FETCH_SUCCESS);

    return {
      ...state,
      [innerSucces]: {
        ...state[innerSucces],
        data: action.payload,
        loading: false,
        error: null,
      },
    };
  } else if (action.type === API_ACTIONS.FETCH_EMPLOYEE) {
    return {
      ...state,
      employee: {
        data: [action.payload],
        loading: false,
        error: null,
      },
    };
  } else if (action.type.startsWith(API_ACTIONS.FETCH_FAILD)) {
    const innerFailed = onParseKey(action.type, API_ACTIONS.FETCH_FAILD);

    return {
      ...state,
      [innerFailed]: {
        ...state[innerFailed],
        loading: false,
        error: true,
      },
    };
  } else if (action.type === API_ACTIONS.CLEAN_EMPLOYEE) {
    return {
      ...state,
      employee: {
        data: action.payload,
        loading: false,
        error: null,
      },
    };
  } else {
    return state;
  }
};
