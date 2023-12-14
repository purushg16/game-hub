import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./hooks/usePlatform";
import { Platform } from "../services/platform-services";
import useSelector from "./hooks/useSelector";
import useGameStore from "./store/gameStore";

export const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);

  if (error) return null;

  const selectedPlatform = data.results.find(
    (order) => order.id == selectedPlatformId
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              setPlatformId(platform.id);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
