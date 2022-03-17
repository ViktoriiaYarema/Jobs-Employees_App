import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import { CircularProgress, Grid } from "@mui/material";

import { selectorApp } from "../../redux/app/app.selector";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { ApiEnum } from "../../api/models/api.enum";
import Item from "../../components/Item";

const Employees = () => {
  const { response, performFetch } = useFetch<EmployeeType>(ApiEnum.Providers);
  const { loading, data } = response;

  const appState = useSelector(selectorApp);
  const navigate = useNavigate();

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const filteredData = useMemo(() => {
    return appState.selectedJob
      ? data?.filter((x) => x.job === appState.selectedJob)
      : data;
  }, [data, appState]);

  const fetchEmployee = useCallback(
    (id: string) => {
      navigate(id, { replace: true });
    },
    [navigate]
  );
  console.log(appState.selectedJob, "appState.selectedJob");
  return (
    <Grid container spacing={2}>
      {!loading ? (
        filteredData?.map((employee: EmployeeType) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id}>
            <Item item={employee} onClick={() => fetchEmployee(employee.id)} />
          </Grid>
        ))
      ) : (
        <Grid container>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default Employees;
