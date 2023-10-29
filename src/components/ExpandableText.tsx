import { FC, useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

type Props = {
  children: string;
};

const ExpandableText: FC<Props> = ({ children }) => {
  const [ expanded, setExpanded ] = useState(false);
  const LIMIT = 300;

  if (!children) return null;

  if (children.length <= LIMIT) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, LIMIT) + ' ...';

  return (
    <Text>
      { summary }&nbsp;
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        Show { expanded ? 'Less' : 'More' }
      </Button>
    </Text>
  );
};

export default ExpandableText;