import React, { useEffect, useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ApiEnum } from "../../api/models/api.enum";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { CircularProgress, Grid } from "@mui/material";
import Item from "../../components/Item";
import { useSelector } from "react-redux";
import { selectorApp } from "../../redux/app/app.selector";

const Employees = () => {
  const { response, performFetch } = useFetch<EmployeeType>(ApiEnum.Providers);
  const { loading, data } = response;
  const appState = useSelector(selectorApp);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const filteredData = useMemo(() => {
    return appState.selectedJob
      ? data?.filter((x) => x.job === appState.selectedJob)
      : data;
  }, [data, appState]);

  return (
    <Grid container spacing={2}>
      {!loading ? (
        filteredData?.map((employee: EmployeeType) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id}>
            <Item item={employee} />
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
