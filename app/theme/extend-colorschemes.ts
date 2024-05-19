import { type CssVarsThemeOptions } from "@mui/material";

export const color_schemes: CssVarsThemeOptions["colorSchemes"] = {
  light: {
    palette: {
      primary: {
        main: "rgb(41, 112, 255)",
      },
      divider: "rgb(240,240,240)",
    },
  },

  dark: {
    palette: {
      primary: {
        main: "rgb(41, 112, 255)",
      },
      background: {
        default: "rgb(14, 19, 32)",
        paper: "rgb(17, 25, 39)",
      },
    },
  },
};
