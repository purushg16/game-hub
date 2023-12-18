import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import { SearchGameInput } from "./SearchGameInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={"20px"}>
      <Link to="/">
        <Image src={logo} width={50} />
      </Link>
      <SearchGameInput />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
