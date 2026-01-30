import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#306B73",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#6AB8CC",
    },

    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },

    custom: {
      theme1: "#306B73",
      theme2: "#6AB8CC",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
