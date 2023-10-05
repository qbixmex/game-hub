import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

type Props = {
  placeholder?: string;
};

const Search: FC<Props> = ({ placeholder = 'Search ...' }) => {

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder={placeholder} variant="filled" />
    </InputGroup>
  );

};

export default Search;
