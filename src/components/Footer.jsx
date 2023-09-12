import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';


export const Footer = () => {
  return (
    <Box bg="#08376B" color="white" px={8} py={5}
    >
      <Flex justifyContent="space-between" flexWrap="wrap" padding='50px'>
        <Box flex="1 0 100%" maxWidth="200px" mb={10}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Enlaces útiles
          </Text>
          <Link href="#">Inicio</Link>
          <Link href="#">Acerca de</Link>
          <Link href="#">Contacto</Link>
          <Link href="#">Términos de servicio</Link>
        </Box>
        <Box flex="1 0 100%" maxWidth="200px" mb={10}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Redes sociales
          </Text>
          <Link href="#"></Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
          <Link href='#'></Link>
        </Box>
        <Box flex="1 0 100%" maxWidth="200px" mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Información de contacto
          </Text>
          <Text>Dirección: Calle Principal 123</Text>
          <Text>Teléfono: +1 234 567 890</Text>
          <Text>Email: info@example.com</Text>
        </Box>
      </Flex>
    </Box>
  );
};
