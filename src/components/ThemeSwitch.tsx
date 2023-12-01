import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

export default function ThemeSwitch() {

    const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
        <Switch colorScheme="green" onChange={toggleColorMode} isChecked={ colorMode === 'dark' } />
        <Text whiteSpace={'nowrap'}> Dark Mode </Text>
    </HStack>
  )
}
