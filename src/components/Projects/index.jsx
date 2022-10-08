import { Box, Text, Flex, Image } from "@chakra-ui/react";
// import WaveBottom from "../WaveBottom";
import LineBottom from "../LineBottom";
import WaveTop from "../WaveTop";
import styles from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";

const Projects = () => {
  const { ref: projectRef, inView: projectInView } = useInView();
  return (
    <Box>
      <WaveTop mt={0} color={"var(--chakra-colors-projects)"} />
      <Flex
        width={"100%"}
        background={"var(--chakra-colors-projects)"}
        direction={"column"}
      >
        <Flex
          ref={projectRef}
          direction={"row"}
          width={"100%"}
          paddingRight={{ md: "20px" }}
          paddingBottom="20px"
          position={"relative"}
          justify={{ base: "center" }}
          align={{ base: "center" }}
          _after={{
            content: `""`,
            height: "2px",
            width: "50%",
            position: "absolute",
            right: "25%",
            // top: { md: "15%" },
            bottom: "0",
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
            width={"25%"}
            className={`${projectInView ? styles.goUp : ""}`}
          />
        </Flex>
        <Box height={"fit-content"}>
          <Carousel />
        </Box>
      </Flex>
      <LineBottom mt={0} color={"var(--chakra-colors-projects)"} />
    </Box>
  );
};

export default Projects;
