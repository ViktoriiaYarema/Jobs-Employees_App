import React from "react";
import { Grid, Paper, Typography, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { StoreType } from "../../redux/models/store.model";
import { AccamulatorType } from "../../redux/api/api.reducer";
import { get, take } from "lodash";

const Employee = () => {
  const employeeData: AccamulatorType<EmployeeType> | null = useSelector(
    (state: StoreType) => state.api.employee || null
  );

  const [employee] = take(get(employeeData, "data"));

  return employee ? (
    <>
      <Paper elevation={5} sx={{ padding: 2, mb: 2 }}>
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
          <Typography
            sx={{ wordBreak: "break-word" }}
            variant="body1"
            component={"p"}
          >
            {employee.email}
          </Typography>
          <Typography
            sx={{ wordBreak: "break-word" }}
            variant="body1"
            component={"p"}
          >
            {employee.address}
          </Typography>
          <Typography variant="h6" component={"p"}>
            {employee.job}
          </Typography>
        </Grid>
      </Paper>
    </>
  ) : (
    <Grid container>
      <CircularProgress />
    </Grid>
  );
};

export default Employee;
