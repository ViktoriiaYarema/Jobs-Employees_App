import React, { FC } from "react";
import { ListItemText, ListItem } from "@mui/material";

interface IJobItem {
  id: string;
  jobId: string;
  title: string;
}

const JobItem: FC<IJobItem> = ({ id, jobId, title }) => {
  return (
    <ListItem>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default JobItem;
