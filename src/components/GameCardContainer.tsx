import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const GameCardContainer: FC<Props> = ({ children }) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 150ms ease-in-out'
      }}
      borderRadius={10} overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;