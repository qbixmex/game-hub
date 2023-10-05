import { Flex, Image } from "@chakra-ui/react";

import { ColorModeSwitch, Search } from ".";
import logo from '../assets/logo.webp';
import { FC } from "react";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const Navbar: FC<Props> = ({ onSearch }) => {
  return (
    <Flex alignItems="center" padding="10px" gap={3}>
      <Image src={logo} boxSize="60px" />
      <Search onSearch={onSearch} placeholder="Search Games ..." />
      <ColorModeSwitch />
    </Flex>
  );
};

export default Navbar;
