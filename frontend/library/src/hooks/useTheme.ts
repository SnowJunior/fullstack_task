import { useState, useMemo, useCallback } from "react";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { grey } from "@mui/material/colors";

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
            default: grey[50],
          },
        },
        typography: {
          fontFamily: '"Mulish", san-serif',
        },
      }),
    [mode]
  );

  return { theme, toggleColorMode, mode, colormode };
};

export default useColorMode;
