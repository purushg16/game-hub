import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ThemeSwitch from "./ThemeSwitch"
import { SearchGameInput } from "./SearchGameInput"

interface Props{
  onSearch : (searchText:string) => void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding={'20px'}>
        <Image src={logo} width={50}/>
        <SearchGameInput onSearch={onSearch} />
        <ThemeSwitch />
    </HStack>
  )
}

export default NavBar