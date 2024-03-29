import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: `Mori`,
    heading: `Mori`,
  },
  breakpoints: {
    sm: "320px",
    in: "570px",
    md: "768px",
    lg: "990px",
    xl: "1200px",
    xxl: "1536px",
  },
  colors: {
    about: "#ffcf96",
    projects: "#ffe7a3",
    techstack: "#f2b8df",
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundImage: mode(
          `url(https://i.imgur.com/iGvxdfY.png)`,
          `url(https://i.imgur.com/KyiFTGd.png)`,
        )(props),
        backgroundColor: mode("#c6f8ef", "#0d1453")(props),
        backgroundAttachment: "fixed",
        margin: "0px",
        color: mode("black", "#ffff")(props),
      },
    }),
  },
});

export default theme;
