import React, { useState, useCallback, useEffect } from "react";
import { getEmployeesRepo } from "../../api/endpoints/endpoints";

const Employees = () => {
  const [empoyees, setEmpoyees] = useState<Record<string, any> | null>(null);

  const fetchData = useCallback(async () => {
    const result = await getEmployeesRepo();
    setEmpoyees(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div></div>;
};

export default Employees;
