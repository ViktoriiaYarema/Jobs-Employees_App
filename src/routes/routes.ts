import Employees from "../modules/employee/EmployeesContainer";
import Employee  from "../modules/employee/Employee";

export const routes = {
  home: {
    url: "/",
    element: Employees,
  },
  employee: {
    url: "/:id",
    element: Employee,
  },
};
