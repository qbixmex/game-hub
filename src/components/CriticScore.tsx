import { FC } from 'react';
import { Badge } from '@chakra-ui/react';

type Props = {
  score: number;
};

const CriticScore: FC<Props> = ({ score }) => {

  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} paddingY={1} borderRadius={"4px"}>
      {score}
    </Badge>
  );

};

export default CriticScore;
