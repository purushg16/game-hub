import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./hooks/usePlatform";
import { Platform } from "../services/platform-services";
import useSelector from "./hooks/useSelector";

interface Props {
  onSelectPlatfrom: (platform: Platform) => void;
  selectedPlatformID?: number
}

export const PlatformSelector = ({ onSelectPlatfrom, selectedPlatformID }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = useSelector(data, selectedPlatformID)

  if (error) return null;

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
              onSelectPlatfrom(platform)
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
