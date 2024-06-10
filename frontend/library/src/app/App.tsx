import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "../pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useColorMode from "../hooks/useTheme";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../api";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Ello() {
  const { theme, colormode } = useColorMode();
  return (
    <>
      <ApolloProvider client={client}>
        <ColorModeContext.Provider value={colormode}>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <CssBaseline />
            <Dashboard />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default Ello;
