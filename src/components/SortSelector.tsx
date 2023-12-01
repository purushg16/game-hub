
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props{
    onSelectOrder: (order: string) => void,
    orderValue: string
}

export const SortSelector = ({onSelectOrder, orderValue}:Props) => {

    const sortItem = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]

    const selectedOrder = sortItem.find( order => order.value == orderValue )

    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order By: { selectedOrder?.label || 'Relevance'}
          </MenuButton>
          <MenuList>
            {sortItem.map(item=>(
                <MenuItem key={item.value} onClick={()=>{onSelectOrder(item.value)}}> {item.label} </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
}
