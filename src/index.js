import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { LanguageProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </LanguageProvider>,
);
