import { HStack, Image } from "@chakra-ui/react";

import { ColorModeSwitch, Search } from ".";
import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <HStack padding="10px" spacing={3}>
      <Image src={logo} boxSize="60px" />
      <Search placeholder="Search Games ..." />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
