import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, take } from "lodash";

import { Grid, Paper, Typography, CircularProgress } from "@mui/material";

import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { StoreType } from "../../redux/models/store.model";
import { AccamulatorType } from "../../redux/reduxApi/reducer";

interface IEmployee {}

const Employee: FC<IEmployee> = () => {
  const employeeDataById: AccamulatorType<EmployeeType> | null = useSelector(
    (state: StoreType) => state.api.employee || null
  );

  const [employee] = take(get(employeeDataById, "data"));

  return (
    <Paper elevation={5} sx={{ padding: 2 }} data-cy={'employee'}>
      <Grid
        container
        spacing={2}
        direction="column"
        rowGap={1}
        sx={{ padding: 1.5 }}
      >
        {employee ? (
          <>
            {" "}
            <Typography variant="h4" component={"p"}>
              {employee.name}
            </Typography>
            <Typography variant="body1" component={"p"}>
              {employee.email}
            </Typography>
            <Typography variant="body1" component={"p"}>
              {employee.address}
            </Typography>
            <Typography variant="h6" component={"p"} data-cy={'employee-job'}>
              {employee.job}
            </Typography>{" "}
          </>
        ) : (
          <Grid container>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export { Employee };
