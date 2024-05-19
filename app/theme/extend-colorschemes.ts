import { type CssVarsThemeOptions } from "@mui/material";

export const color_schemes: CssVarsThemeOptions["colorSchemes"] = {
  light: {
    palette: {
      primary: {
        main: "rgb(41, 112, 255)",
      },
      text: {
        primary: "rgba(39,39,39,1)",
      },
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
      text: {
        secondary: "rgb(160, 174, 192)",
      },
    },
  },
};
