import React, { useEffect, useCallback } from "react";
import { getJobsRepo } from "../../api/endpoints/endpoints";
import { ApiEnum } from "../../api/models/api.enum";
import { AccamulatorType } from "../../api/reduxApi/reducer";
import { useFetch } from "../../hooks/useFetch";
import { selectorApiState } from "../../api/saga/selectors";
import store from "../../redux/store";

const Jobs = () => {
  const { response, performFetch } = useFetch(ApiEnum.Jobs);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  console.log(response);

  return <div>Hello word</div>;
};

export default Jobs;
