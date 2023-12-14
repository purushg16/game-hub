import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import { SearchGameInput } from "./SearchGameInput";

const NavBar = () => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} width={50} />
      <SearchGameInput />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
