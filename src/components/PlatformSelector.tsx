import { FC } from "react";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../interfaces";

type Props = {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector: FC<Props> = ({ onSelectedPlatform, selectedPlatform }) => {

  const { data, errorMessage } = usePlatforms();

  if (errorMessage) return null;

  return (
    <Box ml={4} mb={5}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          { selectedPlatform?.name ?? 'Platforms' }
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
