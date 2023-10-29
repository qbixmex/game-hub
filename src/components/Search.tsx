import { FC, useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

type Props = {
  placeholder?: string;
};

const Search: FC<Props> = ({ placeholder = 'Search ...' }) => {
  const setSearchText = useGameQueryStore(selector => selector.setSearchText);

  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form id="search" onSubmit={(event) => {
      event.preventDefault();
      if (ref.current ) {
        setSearchText(ref.current.value);
        navigate('/');
      }
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
