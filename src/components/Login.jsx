import Logo from "../images/Logo.jpg"
import { Box, Button, Card, CardBody, Center, FormControl, FormLabel, HStack, Heading, Image, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";

export function Login(){
    return (
        <Box>
        <Center>
        <Stack spacing="4">
        <VStack as="header" spacing="6">
            <Image src={Logo} h="70px" mt="8"/>
            <Heading
            as="h1"
            fontWeight="300"
            fontSize="24px"
            letterSpacing="-0.5px">Sign to my Todo App</Heading>
            </VStack>
            <Card bg="#F5F5F5" variant="outline" borderColor="#b1b1b1" borderRadius="0" maxW="380px">
            <CardBody>
                <form>
                <Stack spacing="4">
                <FormControl>
                    <FormLabel size="sm" >Username or email address</FormLabel>
                    <Input 
                    type="text" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"/>
                    <HStack justify="space-between">
                    <FormLabel size="sm" >Password</FormLabel>
                    <Button href="#" variant="link" size="xs" color="#0969da">Forgot password?</Button>
                    </HStack>
                    <Input 
                    type="text" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"/>
                </FormControl>
                <Button borderRadius="0" 
                bg='#08376B' 
                color='#F5F5F5'
                _hover={{
                    color: '#08376B',
                    bg: '#F5F5F5'}}>Sign in</Button>
                </Stack>
                </form>
            </CardBody>
            </Card>
            <Card variant="outline" borderColor="#b1b1b1" borderRadius="0">
                <CardBody>
                <Center>
                <HStack fontSize="sm" spacing="2">
                    <Text>New in TodoApp?</Text>
                    <Link isExternal color="#0969da" href="#">
                        Create an account.
                    </Link>
                </HStack>
                </Center>
                </CardBody>
            </Card>
            </Stack>
            </Center>
            <Center>
            <HStack as="footer" spacing="5" mt="12" pt="2">
                <Link isExternal color="#0969da" href="#" fontSize="xs">Terms</Link>
                <Link isExternal color="#0969da" href="#" fontSize="xs">Privacy</Link>
                <Link isExternal color="#0969da" href="#" fontSize="xs">Security</Link>
                <Link isExternal  href="#" fontSize="xs">Contact TodoApp</Link>
            </HStack>
            </Center>
        </Box>
    )
}

