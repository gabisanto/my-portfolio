import "./Navbar.css";
import { Button, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const Navbar = (props) => {
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
      <nav className={scroll ? "navbar scrollnavbar" : "navbar"}>
        <div className="navwrapper">
          <p className="brand">
            gabi
            <strong>santoriello</strong>
          </p>
        </div>
        <Button
          onClick={toggleColorMode}
          background={"transparent"}
          _hover={{ background: "transparent" }}
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
