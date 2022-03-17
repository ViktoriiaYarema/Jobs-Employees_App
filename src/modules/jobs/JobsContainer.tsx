import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Divider, List } from "@mui/material";

import { selectorApp } from "../../redux/app/app.selector";
import { useFetch } from "../../hooks/useFetch";
import { ApiEnum } from "../../api/models/api.enum";
import { appAction } from "../../redux/app/app.actions";

import { JobType } from "../../enteties/entetiesJobs";
import JobItem from "../../components/JobItem";

const JobsContainer = () => {
  const { response, performFetch } = useFetch<JobType>(ApiEnum.Jobs);
  const { data } = response;
  const dispatch = useDispatch();
  const appState = useSelector(selectorApp);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const performFilterEmployee = (jobTitle: string) => {
    jobTitle === appState.selectedJob
      ? dispatch(appAction.filterJob(""))
      : dispatch(appAction.filterJob(jobTitle));
  };

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
      <List>
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
      </List>
    </>
  );
};

export default JobsContainer;
