import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

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

type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
};

const SortSelector: FC<Props> = ({ onSelectSortOrder, sortOrder }) => {

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
              onClick={() => onSelectSortOrder(value)}
            >{label}</MenuItem>
          ))
        }
      </MenuList>
    </Menu>
  );
};

export default SortSelector;