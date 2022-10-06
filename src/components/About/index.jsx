import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useContext } from "react";
import WaveBottom from "../WaveBottom";
import WaveTop from "../WaveTop";
import styles from "./About.module.css";
import { useInView } from "react-intersection-observer";
import LanguageContext from "../../context/LanguageContext";

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { text } = useContext(LanguageContext);
  return (
    <Box>
      <WaveTop mt={0} color={"var(--chakra-colors-about)"} />
      <Flex
        width={"100%"}
        background={"var(--chakra-colors-about)"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          ref={aboutRef}
          direction={{ base: "row", md: "column" }}
          width={{ base: "100%", md: "25%" }}
          paddingRight={{ md: "20px" }}
          paddingBottom={{ base: "20px", md: "0px" }}
          position={"relative"}
          justify={{ base: "center" }}
          align={{ base: "center" }}
          _after={{
            content: `""`,
            height: { base: "2px", md: "70%" },
            width: { base: "50%", md: "2px" },
            position: "absolute",
            right: { base: "25%", md: "0" },
            top: { md: "15%" },
            bottom: { base: "0", md: "15%" },
            backgroundColor: "var(--chakra-colors-gray-600)",
          }}
        >
          <Text
            textAlign={"center"}
            paddingLeft={"20px"}
            fontSize={"30px"}
            fontWeight={700}
            color={"var(--chakra-colors-gray-600)"}
            className={`${styles.title} ${aboutInView ? styles.goUp : ""}`}
          >
            About <span className={styles.span}>me</span>
          </Text>
          <Image
            paddingLeft={"20px"}
            src="https://i.imgur.com/9YdNXAf.png"
            width={{ base: "25%", md: "100%" }}
            className={`${aboutInView ? styles.goUp : ""}`}
          />
        </Flex>
        <Flex
          className={`${aboutInView ? styles.goUp : ""}`}
          flexGrow={{ md: 1 }}
          direction={"column"}
          justify={"center"}
          align={{ base: "center" }}
          alignSelf={"center"}
          width={{ base: "80%", md: "60%" }}
          height={{ base: "auto", md: "auto" }}
          paddingTop={{ base: "20px", md: "0px" }}
          color={"var(--chakra-colors-gray-600)"}
          fontSize={{ base: "13px", md: "14px" }}
        >
          <Text width={"90%"} paddingBottom={"20px"} textAlign="justify">
            {text.aboutText[0]}
          </Text>

          <Text width={"90%"} paddingBottom={"20px"} textAlign="justify">
            {text.aboutText[1]}
          </Text>

          <Text width={"90%"} textAlign="justify">
            {text.aboutText[2]}
          </Text>
        </Flex>
      </Flex>
      <WaveBottom mt={0} color={"var(--chakra-colors-about)"} />
    </Box>
  );
};

export default About;
