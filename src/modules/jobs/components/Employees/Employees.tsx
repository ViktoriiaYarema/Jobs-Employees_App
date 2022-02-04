import React, { useEffect } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { ApiEnum } from "../../../../api/models/api.enum";

const Employees = () => {
  const { response, performFetch } = useFetch(ApiEnum.Employees);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <main></main>;
};

export default Employees;
