import { createTheme } from "@mui/system";
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
}

const theme = createTheme({

})

export default theme;
