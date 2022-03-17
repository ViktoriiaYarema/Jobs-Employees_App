import { MainLayout } from "../layout/MainLayout";
import EmployeesContainer from "../modules/employee/EmployeesContainer";

export const getRoutes = () => ({
  home: {
    url: "/",
    component: MainLayout,
  },
  selectedJob: {
    url: "/:selectedJob",
    component: EmployeesContainer,
  },
});
