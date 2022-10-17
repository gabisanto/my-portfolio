import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import styles from "./Footer.module.css";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  const { text } = useContext(LanguageContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={styles.wave} id={styles.wave1}></div>
        <div className={styles.wave} id={styles.wave2}></div>
        <div className={styles.wave} id={styles.wave3}></div>
        <div className={styles.wave} id={styles.wave4}></div>
      </div>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Text className={styles.text}>
          <span className={styles.title}>{text.footerTitle}</span>
        </Text>
        <Flex
          width={"80%"}
          direction={{ base: "column", lg: "row" }}
          mt={"4rem"}
          mb={{ base: "2rem", lg: "3rem" }}
        >
          {text.footerElements.map((element, index) => (
            <Flex
              key={index}
              marginBottom={"1.5rem"}
              width={{ base: "200px", in: "300px" }}
            >
              <Box width={{ base: "60px", in: "90px" }}>
                <Image height src={element.image} />
              </Box>

              <Flex className={styles.footerElementName} align={"center"}>
                <Link
                  href={element.link}
                  isExternal
                  style={{ textDecoration: "none" }}
                >
                  {element.name}
                </Link>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
