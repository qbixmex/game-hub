import { HStack, Image } from '@chakra-ui/react';
import { ColorModeSwitch, Search } from '.';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HStack padding='10px'>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Search placeholder="Search Games ..." />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
