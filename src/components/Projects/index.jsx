import { Box, Text, Flex, Image } from "@chakra-ui/react";
import WaveBottom from "../WaveBottom";
import WaveTop from "../WaveTop";
import styles from "./Projects.module.css";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: projectRef, inView: projectInView } = useInView();
  return (
    <Box>
      <WaveTop mt={0} color={"var(--chakra-colors-projects)"} />
      <Flex
        width={"100%"}
        background={"var(--chakra-colors-projects)"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          ref={projectRef}
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
            className={`${styles.title} ${projectInView ? styles.goUp : ""}`}
          >
            <span className={styles.span}>My</span> projects
          </Text>
          <Image
            paddingLeft={"20px"}
            paddingTop={"20px"}
            src="https://i.imgur.com/abVe9vT.png"
            width={{ base: "25%", md: "100%" }}
            className={`${projectInView ? styles.goUp : ""}`}
          />
        </Flex>
        <Box flexGrow={{ md: 1 }} height={{ base: "150px", md: "auto" }}></Box>
      </Flex>
      <WaveBottom mt={0} color={"var(--chakra-colors-projects)"} />
    </Box>
  );
};

export default Projects;
