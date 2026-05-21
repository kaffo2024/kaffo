import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  direction: "rtl",
  fontFamily: {
    body: "cairo",
    display: "cairo",
  },
  colorSchemes: {
    light: {
      palette: {
        focusVisible: "#FBBC60",
        text: {
          tertiary: "#D3D3D3",
          secondary: "#AEA5A5",
        },
        background: {},
        primary: {
          "500": "#FBBC60",
          solidBg: "#FAAF40",
          solidHoverBg: "#FBBC60",
          solidColor: "#ffffff",
          solidActiveBg: "#FCCA80",

          softBg: "#FCCA80",
          softActiveBg: "#FDD7A0",
          softHoverBg: "#FDE4BF",
          softColor: "#0E6B81",
          softActiveColor: "#0E6B81",

          outlinedBorder: "#FAAF40",
          outlinedColor: "#FAAF40",
          outlinedHoverColor: "#fff",
          outlinedHoverBg: "#FAAF40",
          outlinedActiveBg: "#FCCA80",
        },
        neutral: {
          solidBg: "#0E6B81",
          solidHoverBg: "#368496",
          solidActiveBg: "#5E9CAB",

          outlinedColor: "#0E6B81",
          // outlinedHoverColor: "#ffffff",

          softBg: "#368496",
          softActiveBg: "#5E9CAB",
          softHoverBg: "#87B5C0",
          softColor: "#ffffff",

          // plainBg: "transparent",
          // plainActiveBg: "transparent",
          // plainHoverBg: "transparent",
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "rgb(16, 20, 24)",
          surface: "rgba(16, 20, 24, 0.8)",
        },
      },
    },
  },

  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "primary" &&
            ownerState.variant === "outlined" && {
              transition: "color 0.4s linear",
              borderRadius: "3em",
              fontWeight: "bolder",
              fontSize: "1.1em",
              padding: "10px 30px 10px 30px",
              ":hover": {
                background: "none",
                color: "#fff",
              },
            }),
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              transition: "color 0.4s linear",
              borderRadius: "3em",
              fontWeight: "bolder",
              fontSize: "1.1em",
              padding: "10px 30px 10px 30px",
              ":hover": {
                background: "none",
                color: "#fff",
              },
            }),
        }),
      },
    },
    // JoyInput: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       borderRadius: "20px",
    //     }),
    //   },
    // },
  },
});

export default theme;
