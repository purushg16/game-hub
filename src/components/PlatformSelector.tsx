import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./hooks/usePlatform";
import { useState } from "react";
import { Platform } from "../services/platform-services";

interface Props {
  onSelectPlatfrom: (platform: Platform) => void;
  selectedPlatformID?: number
}

export const PlatformSelector = ({ onSelectPlatfrom, selectedPlatformID}: Props) => {
  
  
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = data?.results.find((platform) => platform.id === selectedPlatformID)

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
