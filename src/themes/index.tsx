import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a4cae7",
      main: "#5f8abf",
      dark: "#4b699a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    body1: {
      fontSize: 13,
    },
    body2: {
      fontSize: 11,
    },
  },
});

interface CustomThemeProps {
  children: ReactNode;
}

const CustomTheme = ({ children }: CustomThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
