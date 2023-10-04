import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {

  const { data, errorMessage } = usePlatforms();

  if (errorMessage) return null;

  return (
    <Box ml={4} mb={5}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
        >Platforms</MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
