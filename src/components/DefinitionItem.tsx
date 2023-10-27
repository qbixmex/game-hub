import { Box, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  term: string;
  children: ReactNode | ReactNode[];
};

const DefinitionItem: FC<Props> = ({ term, children }) => {

  return (
    <>
      <Box marginY={5}>
        <Heading as="dt" fontSize="medium" color="gray.600">
          { term }
        </Heading>
        <dd>{ children }</dd>
      </Box>
    </>
  );

};

export default DefinitionItem;
