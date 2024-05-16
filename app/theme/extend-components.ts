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
          "-webkit-box-shadow": "0 0 0 30px rgb(18,18,18) inset !important",
        },

      ".post": {
        lineHeight: 2,
        "& > p": {
          mb: 6,
          mt: 0,
        },
      },
    },
  },
};
