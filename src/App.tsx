import React from "react";
import "./App.css";
import Employees from "./modules/employee/EmployeesContainer";
import { Box } from "@mui/material";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Box component={"main"} sx={{ marginTop: "64px" }}>
        {" "}
        <Employees />
      </Box>
    </MainLayout>
  );
}

export default App;
