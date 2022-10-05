import { createContext, useState } from "react";
import translations from "../data/text.json";

const LanguageContext = createContext();
const initialLanguage = "es";
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const handleLanguage = (e) => {
    let option = language === "es" ? "en" : "es";
    setLanguage(option);
    setText(translations[option]);
  };
  const data = { text, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;
