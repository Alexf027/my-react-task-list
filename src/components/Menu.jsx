import { Link } from "react-router-dom";
import { Button, Flex, Image, IconButton } from "@chakra-ui/react";
import { DarkMode } from "../DarkMode";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from '../images/Logo.jpg'
import { useState } from "react";
import Logo2 from '../images/Logo2.jpg'

export function Menu() {

  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
    <Image
			ml='30px' 
			boxSize='120px' 
			src={Logo} 
			alt='Todo App'/>
    <Flex
    pos='absolute'
    top='1rem'
    right='1rem'
    align='center'>
    <DarkMode/>
    <Flex display={["none", "none", "flex", "flex"]}>
    <Link to="/">
            <Button
            mr={2}
            my={6} w="100%"
            borderRadius='0' 
            bg='#F5F5F5' 
            color='#08376B'
            _hover={{
              color: '#F5F5F5',
            bg: '#08376B'}}>HOME</Button>
          </Link>
          <Link to="/task">
            <Button 
            mr={2}
            my={6} w="100%"
            borderRadius='0' 
            bg='#F5F5F5' 
            color='#08376B'
            _hover={{
              color: '#F5F5F5',
            bg: '#08376B'}}>TASK</Button>
          </Link>
          <Link to="/about">
            <Button 
            mr={2}
            my={6} w="100%"
            borderRadius='0' 
            bg='#F5F5F5' 
            color='#08376B'
            _hover={{
              color: '#F5F5F5',
            bg: '#08376B'}}>ABOUT</Button>
          </Link>
    </Flex>
    <Link to="/login">
    <Button
      mr={2}
      my={4} w="100%"
      borderRadius='0' 
      bg='#F5F5F5' 
      color='#08376B'
      _hover={{
        color: '#F5F5F5',
        bg: '#08376B'}}>LOGIN</Button>
    </Link>
    <IconButton
      borderRadius='0'
      bg='#F5F5F5' 
      color='#08376B'
      _hover={{
      color: '#F5F5F5',
      bg: '#08376B'}}
      my={4} w="100%"
      aria-label="Open Menu"
      size='lg'
      fontSize='20px'
      mr={2}
      icon={<HamburgerIcon/>}
      display={[ "flex", "flex", "none", "none"]}
      onClick={() => changeDisplay("flex")}
    />
    </Flex>
    <Flex flexDir='column'
    overflowY='auto'
    >
    <Flex justify='flex-end'> 
    </Flex>
    <Flex w='100vw'
    bgColor='#F5F5F5'
    zIndex={20}
    h='76vh'
    pos='fixed'
    top='0'
    left='0'
    overscrollY='auto'
    flexDir='column'
    display={display}
    >
    <Flex justify='space-between'>
    <Image
    mt={3}
    ml={3}
    h='55px'
			src={Logo2} 
			alt='Todo App'/>
    <IconButton
    borderRadius="0"
    fontSize='17px'
    bg='#F5F5F5' 
      color='#08376B'
      _hover={{
      color: '#F5F5F5',
      bg: '#08376B'}}
      mt={3}
      mr={3}
      aria-label="Close Menu"
      size="lg"
      icon={<CloseIcon />}
      onClick={() => changeDisplay('none')}
    />
    </Flex>
    <Flex flexDir="column" align="center">
    <Link to="/">
            <Button
            mr={2}
            my={6} w="100%"
            borderRadius='0' 
            bg='#F5F5F5' 
            color='#08376B'
            _hover={{
              color: '#F5F5F5',
            bg: '#08376B'}}>HOME</Button>
          </Link>
          <Link to="/task">
            <Button 
            mr={2}
            my={6} w="100%"
            borderRadius='0' 
            bg='#F5F5F5' 
            color='#08376B'
            _hover={{
              color: '#F5F5F5',
            bg: '#08376B'}}>TASK</Button>
          </Link>
          <Link to="/about">
            <Button 
            mr={2}
            my={6} w="100%"
            borderRadius='0' 
            bg='#F5F5F5' 
            color='#08376B'
            _hover={{
              color: '#F5F5F5',
            bg: '#08376B'}}>ABOUT</Button>
          </Link>
    </Flex>
    </Flex>
    </Flex>
  </Flex>
  );
}