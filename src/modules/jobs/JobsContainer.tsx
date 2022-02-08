import React, { useEffect } from "react";
import { ApiEnum } from "../../api/models/api.enum";
import { useFetch } from "../../hooks/useFetch";
import AsideBar from "../../components/AsideBar";
import { JobType } from "../../enteties/entetiesJobs";
import { Container } from "@mui/material";

const Jobs = () => {
  const { response, performFetch } = useFetch<JobType>(ApiEnum.Jobs);

  useEffect(() => {
    performFetch();
  }, [performFetch]);
  
  return (
    <Container>
      <AsideBar jobs={response.data || null} />
    </Container>
  );
};

export default Jobs;
