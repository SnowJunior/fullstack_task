import { useState, useMemo, useCallback } from "react";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { deepOrange, grey } from "@mui/material/colors";

const useColorMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const colormode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevState) => (prevState === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "light" ? deepOrange[900] : grey[900],
          },
        },
      }),
    [mode]
  );

  return { theme, toggleColorMode, mode, colormode };
};

export default useColorMode;
