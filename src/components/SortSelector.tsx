import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "./store/gameStore";

export const SortSelector = () => {
  const sortItem = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const setSorder = useGameStore((s) => s.setSorder);
  const selectedSortOrder = useGameStore((s) => s.gameQuery.sortOrder);

  const selectedOrder = sortItem.find(
    (order) => order.value == selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortItem.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => {
              setSorder(item.value);
            }}
          >
            {" "}
            {item.label}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
