import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: grey,
    background: {
      default: grey[900],
      paper: deepOrange[900],
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <ToastContainer />
        <CssBaseline />
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
