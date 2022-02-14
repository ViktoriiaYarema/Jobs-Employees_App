import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowBack } from "@mui/icons-material";
import { routes } from "../routes/routes";
import { useLocation, useNavigate } from "react-router-dom";
import { apiActions } from "../redux/api/api.actions";

const drawerWidth = 240;

interface IHeader {
  onToggleEvent: () => void;
}

const Header: FC<IHeader> = ({ onToggleEvent }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const goBack = useCallback(() => {
    navigation(routes.home.url);
    dispatch(apiActions.cleanEmployeeData());
  }, [dispatch, navigation]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {routes.home.url === pathname ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: "none" } }}
              onClick={onToggleEvent}
            >
              <MenuIcon />{" "}
            </IconButton>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="arrow-back"
              onClick={goBack}
            >
              <ArrowBack />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employees
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
