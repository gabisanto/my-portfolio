import styles from "./About.module.css";
import { Box, Text } from "@chakra-ui/react";
import WaveBottom from "./WaveBottom";

const About = () => {
  return (
    <Box>
      <Text background={"var(--chakra-colors-about)"}>About</Text>

      <WaveBottom mt={0} color={"var(--chakra-colors-about)"} />
    </Box>
  );
};

export default About;
