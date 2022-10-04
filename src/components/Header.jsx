import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box padding={"40px"} backdropFilter="blur(12px)">
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_uEl2RR.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </Box>
  );
};

export default Header;
