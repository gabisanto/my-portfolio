import { Button, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const { text, handleLanguage } = useContext(LanguageContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`${styles.navbar} ${scroll ? styles.scrollnavbar : ""}`}>
        <div className={styles.navwrapper}>
          <p className={styles.brand}>
            gabi
            <strong>santoriello</strong>
          </p>
        </div>
        <Button
          onClick={handleLanguage}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
          _focus={{ background: "transparent" }}
        >
          <Image src={text.icon} width={"30px"} />
        </Button>

        <Button
          onClick={toggleColorMode}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
          _focus={{ background: "transparent" }}
        >
          <Image
            src={
              colorMode === "light"
                ? "https://i.imgur.com/HDZTVGC.png"
                : "https://i.imgur.com/vtEbQqR.png"
            }
            width={"30px"}
          />
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
