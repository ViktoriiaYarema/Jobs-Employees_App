import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EmployeesContainer from "./modules/employee/EmployeesContainer";
import { Box } from "@mui/material";
import { MainLayout } from "./layout/MainLayout";
import { Employee } from "./modules/employee/Employee";

function App() {
  return (
    <MainLayout>
      <Box component={"main"} sx={{ marginTop: "64px" }}>
        <Routes>
          <Route path="/" element={<EmployeesContainer />} />
          <Route path="/:id" element={<Employee />} />
        </Routes>
      </Box>
    </MainLayout>
  );
}

export default App;
