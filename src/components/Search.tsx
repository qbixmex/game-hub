import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

type Props = {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
};

const Search: FC<Props> = ({ onSearch, placeholder = 'Search ...' }) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form id="search" onSubmit={(event) => {
      event.preventDefault();
      if (ref.current ) onSearch(ref.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={placeholder}
          variant="filled"
        />
      </InputGroup>
    </form>
  );

};

export default Search;
