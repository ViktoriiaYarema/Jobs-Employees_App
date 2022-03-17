import React, { FC } from "react";
import { Divider, List, Grid, Drawer, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
const drawerWidth = 240;

interface IAsideBar {
  loading?: boolean;
  children: React.ReactElement;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const AsideBar: FC<IAsideBar> = ({
  loading,
  children,
  mobileOpen,
  onCloseMobile,
}) => {
  const drawer = (
    <>
      {loading || !children ? (
        <Grid container>
          <CircularProgress />
        </Grid>
      ) : (
        children
      )}

      <Divider />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: 240 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={() => document.body}
        open={mobileOpen}
        onClose={onCloseMobile}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default AsideBar;
