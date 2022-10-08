import React from "react";
import styles from "./Card.module.css";
import { Box, Link, Text } from "@chakra-ui/react";

const Card = ({ data }) => {
  return (
    <Box className={styles.projectcard}>
      <Text className={styles.name}>{data.name}</Text>
      <Box className={styles.info}>{data.technologies.join(" / ")}</Box>
      <Box className={styles.location}>
        {" "}
        <span className={styles.strong}>Buenos Aires</span>, Argentina
      </Box>
      <Box className={styles.type}>
        <Link href={data.github} isExternal>
          <Box className={styles.checkbox} cursor={"pointer"}>
            <input
              className={styles.input}
              type="checkbox"
              id="github"
              checked="checked"
            />
            <label for="github">github</label>
          </Box>
        </Link>
        <Box className={styles.checkbox}>
          <input className={styles.input} type="checkbox" id="youtube" />
          <label for="youtube">
            <Link to={`${data.youtube}`}>youtube</Link>
          </label>
        </Box>
      </Box>
      <Box className={styles.date}>
        <span className={styles.sidetitle}>Finish Date</span>
        {data.date}
      </Box>
      <Box className={styles.duration}>
        <span className={styles.sidetitle}>Duration</span>
        {data.duration}
      </Box>
      {/* <Box className={styles.footnote}></Box> */}
      <Box className={styles.site}>{data.deploy}</Box>
      <Box
        backgroundImage={`url("${data.image}")`}
        className={`${styles.pattern}`}
      ></Box>
      <Box className={styles.one} background={data.color}></Box>
      <Box className={styles.two} background={data.color}></Box>
      <Box className={styles.strip}></Box>
    </Box>
  );
};

export default Card;
