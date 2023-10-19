import React from 'react';
import { Box, Flex, Link, StackDivider, Text, Image, HStack, Center} from '@chakra-ui/react';
import colombia from "../images/colombia.png";
import eeuu from "../images/estados-unidos-de-america.png";
import francia from "../images/francia.png";
import reino from "../images/reino-unido.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";


export const Footer = () => {
  return (
  <>
    <Box bg="#08376B" color="white" px={12} py={5}>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box flex="1 0 100%" maxWidth="200px" ml={1} mb={6}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
          Helpful Links
          </Text>
          <Box mb={3}>
          <Link href="#">Use of the Site</Link>
          </Box>
          <Box mb={3}>
          <Link href="#">Select Country</Link>
          </Box>
          <Box mb={3}>
          <Link href="#">Notice of Privacy</Link>
          </Box>
          <Box mb={3}>
          <Link href="#">Terms and Conditions</Link>
          </Box>
        </Box>
        <Box flex="1 0 100%" maxWidth="160px"  mb={6}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
          Social networks
          </Text>
          <HStack>
          <Center>
            <Image h="30px" src={Linkedin}/>
            <Link target='_blank' href="https://www.linkedin.com/in/alexf027/">LinkedIn</Link>
          </Center> 
          </HStack><br/>
          <HStack>
          <Center>
            <Image h="30px" src={Github}/>
            <Link target='_blank' href="https://github.com/Alexf027/Alexf027">GitHub</Link>
          </Center>
          </HStack><br/>
          <HStack>
            <Center>
            <Image h="30px" src={Instagram}/>
            <Link target='_blank' href="https://www.instagram.com/alex.f207">Instagram</Link>
            </Center>
          </HStack>
        </Box>
        <Box maxWidth="225px" mb={3}>
          <Text mb={3} fontSize="lg" fontWeight="bold">
          Contact information
          </Text>
          <Text mb={3}>Phone: +57 3127949986</Text>
          <Text mb={3}>Email: alexfb.027@gmail.com</Text>
          <Text>Address: Carrera 93 #53-40, Med-CO</Text>
        </Box>
      </Flex>
    </Box>
    <StackDivider h="1px" borderColor="gray.200"/>
    <Box bg="#eaebee" color="white">
      <Flex ml={4} justify="space-between">
      <HStack spacing={2}>
        <Image h="2vh" src={colombia}/>
        <Image h="2vh" src={eeuu}/>
        <Image h="2vh" src={reino}/>
        <Image h="2vh" src={francia}/>
      </HStack>
      <Text fontSize='xs' mr={4} color="#08376B">©2023 My Tasklist | Protalento | Ada School</Text>
      </Flex>
    </Box>
    </>
  );
};
