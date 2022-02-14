import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { MainLayout } from "./layout/MainLayout";
import { routes } from "./routes/routes";
import { RouteType } from "./routes/models/routes.type";

function App() {
  return (
    <MainLayout>
      <Box component={"main"} sx={{ marginTop: "64px" }}>
        <Routes>
          {Object.values(routes).map((route: RouteType) => {
            return (
              <Route key={route.url} path={route.url} element={route.element()} />
            );
          })}
        </Routes>
      </Box>
    </MainLayout>
  );
}

export default App;
