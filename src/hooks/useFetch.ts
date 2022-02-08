import { camelCase } from "lodash";
import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { apiActions } from "../api/reduxApi/apiActions";
import { apiActions } from "../api/reduxApi/apiActions";
import { selectorApiState } from "../api/saga/selectors";
import { AccamulatorType } from "../api/reduxApi/reducer";

export function useFetch<T>(endpoint: string) {
  const dispatch = useDispatch();
  const apiState: Record<string, AccamulatorType<T>> = useSelector(
    selectorApiState
  );

  const performFetch = useCallback(
    () => dispatch(apiActions.fetchStart(endpoint)),
    [dispatch, endpoint]
  );

  const response = useMemo(() => {
    return apiState[camelCase(endpoint)];
  }, [apiState, endpoint]);

  return { response, performFetch };
}
