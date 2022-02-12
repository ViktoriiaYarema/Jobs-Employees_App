import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Employees from "./modules/employee/EmployeesContainer";
import { Box } from "@mui/material";
import { MainLayout } from "./layout/MainLayout";
import { Employee } from "./modules/employee/Employee";

function App() {
  return (
    <MainLayout>
      <Box component={"main"} sx={{ marginTop: "64px" }}>
        {/* <ConnectedRouter history={history}> */}
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/:id" element={<Employee />} />
        </Routes>
        {/* </ConnectedRouter> */}
      </Box>
    </MainLayout>
  );
}

export default App;
