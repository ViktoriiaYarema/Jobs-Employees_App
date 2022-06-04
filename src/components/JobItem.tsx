import React, { FC } from "react";
import { ListItemText, ListItem } from "@mui/material";

interface IJobItem {
  id: string;
  jobId: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}

const JobItem: FC<IJobItem> = ({ id, title, selected, onClick }) => {
  return (
    <ListItem
      data-testid={`job-item-${id}`}
      onClick={onClick}
      sx={{ cursor: "pointer" }}
      selected={selected}
    >
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default JobItem;
