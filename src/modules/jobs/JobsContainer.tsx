import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Divider } from "@mui/material";

import { selectorApp } from "../../redux/app/app.selector";
import { useFetch } from "../../hooks/useFetch";
import { ApiEnum } from "../../api/models/api.enum";
import { appAction } from "../../redux/app/app.actions";

import { JobType } from "../../enteties/entetiesJobs";
import JobItem from "../../components/JobItem";

const Jobs = () => {
  const { response, performFetch } = useFetch<JobType>(ApiEnum.Jobs);
  const { data } = response;
  const dispatch = useDispatch();
  const appState = useSelector(selectorApp);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const performFilterEmployee = (jobTitle: string) =>
    dispatch(appAction.filterJob(jobTitle));

  return (
    <>
      <Typography
        variant="h6"
        component={"h3"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 56,
        }}
      >
        {ApiEnum.Jobs.toUpperCase()}
      </Typography>
      <Divider />
      {data?.map(({ id, jobId, title }) => (
        <JobItem
          key={id}
          jobId={jobId}
          title={title}
          id={id}
          onClick={() => performFilterEmployee(jobId)}
          selected={jobId === appState.selectedJob}
        />
      ))}
    </>
  );
};

export default Jobs;
