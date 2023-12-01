import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    onSearch : (searchText:string) => void
}

export const SearchGameInput = ({onSearch}:Props) => {

    const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value)
    }}>
        <InputGroup>
            <InputLeftElement  children={<BsSearch/>} />
            <Input ref={ref} placeholder='Search Games...' variant={'filled'} borderRadius={20} />
        </InputGroup>
    </form>
  )
}
