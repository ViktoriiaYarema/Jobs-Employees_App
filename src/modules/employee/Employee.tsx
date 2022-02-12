import React, { FC, useCallback, useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { StoreType } from "../../redux/models/store.model";
import { AccamulatorType } from "../../redux/reduxApi/reducer";
import { get, take } from "lodash";

interface IEmployee {}

const Employee: FC<IEmployee> = () => {
  const employeeDataById: AccamulatorType<EmployeeType> | null = useSelector(
    (state: StoreType) => state.api.employee || null
  );

  const [employee] = take(get(employeeDataById, "data"));

  return employee ? (
    <Paper elevation={5} sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        rowGap={1}
        sx={{ padding: 1.5 }}
      >
        <Typography variant="h4" component={"p"}>
          {employee.name}
        </Typography>
        <Typography variant="body1" component={"p"}>
          {employee.email}
        </Typography>
        <Typography variant="body1" component={"p"}>
          {employee.address}
        </Typography>
        <Typography variant="h6" component={"p"}>
          {employee.job}
        </Typography>
      </Grid>
    </Paper>
  ) : null;
};

export { Employee };
