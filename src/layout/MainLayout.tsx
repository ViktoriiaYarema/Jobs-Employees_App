import { Box } from "@mui/material";
import React, { useCallback, useState, FC } from "react";
import AsideBar from "../components/AsideBar";
import Header from "../components/Header";
import JobsContainer from "../modules/jobs/JobsContainer";

type IMainLayout = {
  children: React.ReactElement;
};

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);
  const drawerWidth = 240;
  
  return (
    <>
      <Header onToggleEvent={handleDrawerToggle} />
      <AsideBar mobileOpen={mobileOpen} onCloseMobile={handleDrawerToggle}>
        <JobsContainer />
      </AsideBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1.5,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { md: `${drawerWidth}px` },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export { MainLayout };
