import { camelCase } from "lodash";
import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from "../api/reduxApi/apiActions";
import { selectorApiState } from "../api/saga/selectors";

export const useFetch = (endpoint: string) => {
  const dispatch = useDispatch();
  const apiState: Record<string, any> = useSelector(selectorApiState);

  const performFetch = useCallback(
    (data = null) => dispatch(apiActions.fetchStart(endpoint)),
    [dispatch, endpoint]
  );

  console.log("apiState", apiState);

  const response = useMemo(() => {
    return apiState[camelCase(endpoint)];
  }, [apiState, endpoint]);

  return { response, performFetch };
};
