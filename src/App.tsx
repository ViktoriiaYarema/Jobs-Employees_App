import React from "react";
import { makeStyles } from "@mui/styles";
import "./App.css";
import Employees from "./modules/jobs/components/Employees/Employees";
import Jobs from "./modules/jobs/components/Jobs/Jobs";
import theme from "./styles/theme";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles(theme);
  console.log(classes, "lasse");
  return (
    <div className={classes.root}>
      <div>
        <Jobs />
        <Employees />
      </div>
    </div>
  );
}

export default App;
