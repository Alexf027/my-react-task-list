import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export function Header(){
    return (
        <Box>
        <VStack spacing="2">
        <Heading  
            as="h1"
            fontWeight="300"
            fontSize="26px"
            letterSpacing="-0.5px" >Todo App</Heading>
        <Text fontSize='sm'>Meeting goals</Text>
        </VStack>
        </Box>
    )
}
