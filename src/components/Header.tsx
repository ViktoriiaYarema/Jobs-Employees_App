import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getRoutes } from "../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectorApp } from "../redux/app/app.selector";
import { appAction } from "../redux/app/app.actions";

const drawerWidth = 240;

interface IHeader {
  onToggleEvent: () => void;
}

const Header: FC<IHeader> = ({ onToggleEvent }) => {
  const appState = useSelector(selectorApp);
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              if (pathname !== getRoutes().home.url) {
                navigation(getRoutes().home.url);
              } else {
                appState.selectedJob && dispatch(appAction.filterJob(""));
              }
            }}
          >
            {pathname !== getRoutes().home.url && <ArrowBackIosIcon />}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employees
            </Typography>
            {appState.selectedJob && (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                data-testId="selected-job"
              >
                / {appState.selectedJob}
              </Typography>
            )}
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
            onClick={onToggleEvent}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
