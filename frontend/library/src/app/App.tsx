import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "../home/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useColorMode from "../hooks/useTheme";
import React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Ello() {
  const { theme, colormode } = useColorMode();
  return (
    <>
      <ColorModeContext.Provider value={colormode}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default Ello;
