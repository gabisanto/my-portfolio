import React from "react";
import { useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Flex } from "@chakra-ui/react";
import styles from "./Header.module.css";
import LanguageContext from "../../context/LanguageContext";

const Header = () => {
  const { text } = useContext(LanguageContext);
  return (
    <Box paddingTop={"70px"} backdropFilter="blur(12px)">
      <Flex
        justify={{ in: "center" }}
        align={"center"}
        direction={{ base: "column", in: "row" }}
      >
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_uEl2RR.json"
          className={styles.player}
        ></Player>
        <Flex
          direction={"column"}
          height={{ base: "140px", in: "300px" }}
          width={{ base: "180px", in: "200px" }}
          justify={"center"}
        >
          <Box
            marginBottom={{ base: "-35px", in: "-50px" }}
            fontWeight={"bold"}
          >
            {text.greeting}
          </Box>
          <Box className={styles.content}>
            <p>{text.name}</p>
            <p>{text.name}</p>
          </Box>
          <Box>{text.title}</Box>
          <Box className={`${styles.btn} ${styles.drawBorder}`}>
            <a
              href={
                text.language === "en"
                  ? "./Gabriela Santoriello Resume.pdf"
                  : "./Gabriela Santoriello.pdf"
              }
              download
            >
              {text.cv}
            </a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
