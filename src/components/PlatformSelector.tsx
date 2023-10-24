import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';

const PlatformSelector = () => {

  const { data: platforms, error } = usePlatforms();

  const platformId = useGameQueryStore(selector => selector.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);
  const setSelectedPlatformId = useGameQueryStore(selector => selector.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        { selectedPlatform?.name ?? 'Platforms' }
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
