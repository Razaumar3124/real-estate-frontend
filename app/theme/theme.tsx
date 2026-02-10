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
      default: "#FFEDD8",
      paper: "#FFEDD8",
    },

    custom: {
      light: "#FFEDD8",
      soft: "#F3D5B5",
      tan: "#E7BC91",
      lightBronze: "#D4A276",
      camel: "#BC8A5F",
      faddedCopper: "#A47148",
      toffeeBrown: "#8B5E34",
      walnut: "#6F4518",
      mediumWalnut: "#603808",
      darkWalnut: "#583101"
    },
  },

  typography: {
    fontFamily: `"Cormorant Garamond", "Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

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
