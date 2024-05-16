import { type CssVarsThemeOptions } from "@mui/material";

export const components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: "underline",
        color: "inherit",
      },
    },
  },
};
