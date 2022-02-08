import React from "react";
import "./App.css";
import Employees from "./modules/employee/EmployeesContainer";
import Jobs from "./modules/jobs/JobsContainer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {" "}
      <Header />
      <Jobs />
      <Employees />
    </div>
  );
}

export default App;
