import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ApiEnum } from "../../api/models/api.enum";
import { EmployeeType } from "../../enteties/entetiesEmloyees";
import { Container } from "@mui/material";

const Employees = () => {
  const { response, performFetch } = useFetch(ApiEnum.Providers);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <Container></Container>;
};

export default Employees;
