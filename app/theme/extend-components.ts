import { type CssVarsThemeOptions } from "@mui/material";

export const components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      "input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active":
        {
          WebkitBoxShadow: "0 0 0 30px rgb(18,18,18) inset !important",
        },
    },
  },
};
