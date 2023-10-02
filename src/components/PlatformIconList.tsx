import { FC } from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaWindows, FaApple, FaLinux, FaPlaystation, FaAndroid, FaXbox } from 'react-icons/fa';
import { MdPhoneIphone  } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { SiNintendo  } from 'react-icons/si';
import { Platform } from '../interfaces';

type Props = {
  platforms: Platform[];
};

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  mac: FaApple,
  linux: FaLinux,
  playstation: FaPlaystation,
  android: FaAndroid,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

const PlatformIconList: FC<Props> = ({ platforms }) => {
  return (
    <HStack marginY={3} justifyContent="center">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;