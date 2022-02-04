import { createTheme } from "@mui/system";
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
}

const theme = createTheme({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: '10px',
  },
})

export default theme;
