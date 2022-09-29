import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Writer`,
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
    projects: "#ED9AD1",
    techstack: "#FFDD7B",
  },
});

export default theme;
