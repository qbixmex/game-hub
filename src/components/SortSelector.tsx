import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

type Sort = {
  id: number;
  value: string;
  label: string;
};

const sortOrders: Sort[] = [
  { id: 1, value: '', label: 'Relevance' },
  { id: 2, value: '-added', label: 'Date Added' },
  { id: 3, value: 'name', label: 'Name' },
  { id: 4, value: '-released', label: 'Release Data' },
  { id: 5, value: '-metacritic', label: 'Popularity' },
  { id: 6, value: '-rating', label: 'Average Rating' },
];

const SortSelector = () => {

  const sortOrder = useGameQueryStore(selector => selector.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(selector => selector.setSortOrder);
  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Order by: { currentSortOrder?.label ?? 'Relevance' }
      </MenuButton>
      <MenuList>
        {
          sortOrders.map(({ id, value, label }) => (
            <MenuItem
              key={id}
              value={value}
              onClick={() => setSortOrder (value)}
            >{label}</MenuItem>
          ))
        }
      </MenuList>
    </Menu>
  );
};

export default SortSelector;