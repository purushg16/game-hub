import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./hooks/usePlatform";
import { useState } from "react";
import { Platform } from "./hooks/useGames";

interface Props{
  onSelect: (platform: Platform) => void
}

export const PlatformSelector = ({onSelect}:Props) => {

    const { data, err } = usePlatforms();
    const [selectedPlatform, onSelectPlatform] = useState('');

    const handleSelect = (platform:Platform) => {
      onSelect(platform);
      onSelectPlatform(platform.name);
    }
  
    if (err) return null;
    
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { selectedPlatform || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map(platform=>(
            <MenuItem key={platform.id} onClick={()=>{handleSelect(platform)}}> {platform.name} </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
