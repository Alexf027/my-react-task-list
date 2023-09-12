import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon} from '@chakra-ui/icons'

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isTheme = colorMode === 'dark'

  return (
      <IconButton
        mr='15px'
        my={6} w="100%"
        color='#08376B'
        bg='#F5F5F5'
        icon={isTheme ? <SunIcon/> : <MoonIcon/>}
        aria-label="Toggle Theme"
        onClick={toggleColorMode}
        _hover={{
              color: '#F5F5F5',
              bg: '#08376B'}} />
  )
}