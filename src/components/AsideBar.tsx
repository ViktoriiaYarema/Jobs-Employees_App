import React, { useCallback, useState, FC } from "react";
import {
  Toolbar,
  IconButton,
  Hidden,
  Divider,
  Typography,
  List,
  Grid,
  Drawer,
  CircularProgress,
  Box,
} from "@mui/material";

import IJobItem from "./JobItem";
import { JobType } from "../enteties/entetiesJobs";

interface IAsideBar {
  loading?: boolean;
  jobs: JobType[] | null;
}

const AsideBar: FC<IAsideBar> = ({ loading, jobs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const drawer = (
    <div>
      <Divider />
      <List>
        {loading || !jobs ? (
          <Grid container>
            <CircularProgress />
          </Grid>
        ) : (
          jobs.map(({ id, jobId, title }) => (
            <IJobItem key={id} jobId={jobId} title={title} id={id} />
          ))
        )}
      </List>
      <Divider />
    </div>
  );
  return (
    <nav aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={() => document.body}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default AsideBar;
