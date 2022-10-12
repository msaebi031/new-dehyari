import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFamily: "IranSanseDN",
      // textTransform: "none",
    },
    history: {
      fontSize: "1.2rem"
    }
  },
  palette: {
    neutral: {
      400: "#9CA3AF",
      900: "#111827",
    },
    dark: {
      dateColor: "rgba(0, 0, 0, 0.4)",
      pColor: "rgba(0, 0, 0, 0.7)",
      light: "rgba(0, 0, 0, 0.8)",
      main: "rgba(0, 0, 0, 0.9)",
    },
    light: {
      light: "rgba(255, 255, 255, 0.85)",
      main: "rgba(255, 255, 255, 0.95)",
    },
    secondary: {
      light: "rgba(229, 246, 253, 0.8)",
      main: "#17175A",
    },
    success: {
      main: "#6FE45B",
    },
    gray: {
      main: "rgb(0 0 0 / 20%)",
    },
    secondaryIcon: {
      main: "#FBB042",
    },
    primaryIcon: {
      main: "#5DB2F5",
    },
  },
});

export default theme;
