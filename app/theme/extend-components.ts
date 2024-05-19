import { type CssVarsThemeOptions } from "@mui/material";

export const components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        FontFamily: ["Montserrat", "sans-serif"].join(","),
        userSelect: "none",
      },
    },
  },

  MuiCardHeader: {
    styleOverrides: {
      title: {
        fontSize: "1.1rem",
        fontWeight: "bold",
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "filled",
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        "::before": {
          display: "none",
        },
        "::after": {
          display: "none",
        },
        "&.Mui-focused": {
          outline: `2px solid ${theme.vars.palette.primary.main}`,
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
        borderRadius: theme.vars.shape.borderRadius,
        backgroundColor: "transparent",
        borderColor: theme.vars.palette.divider,
        borderWidth: 1,
        borderStyle: "solid",
        "& > input": {
          borderRadius: theme.vars.shape.borderRadius,
        },
        "input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active":
          {
            WebkitBoxShadow: `0 0 0 300px ${theme.vars.palette.background.default} inset !important`,
          },
      }),
    },
  },

  MuiFormControl: {
    defaultProps: {
      variant: "filled",
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: "bold",
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        opacity: 0.5,
      },
    },
  },
};
