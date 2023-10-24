import { Flex, Image } from '@chakra-ui/react';
import { ColorModeSwitch, Search } from '.';
import logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <Flex alignItems="center" padding="10px" gap={3}>
      <Image src={logo} boxSize="60px" />
      <Search placeholder="Search Games ..." />
      <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;
