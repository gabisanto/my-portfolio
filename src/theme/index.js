import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: `Mori`,
    heading: `Mori`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "990px",
    xl: "1200px",
    xxl: "1536px",
  },
  colors: {
    about: "#FFBA69",
    projects: "#FFDD7B",
    techstack: "#ED9AD1",
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
