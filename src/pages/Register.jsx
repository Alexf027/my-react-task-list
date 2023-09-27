import Logo from "../images/Logo.jpg";
import {useForm} from "react-hook-form"
import { Box, Button, Card, CardBody, Center, FormControl, FormLabel, HStack, Heading, Image, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";

export function Register(){
    const {register, handleSubmit} = useForm();
    return (
        <Box>
        <Center>
        <Stack spacing="2">
        <VStack as="header" spacing="4">
            <Image src={Logo} h="70px" mt="6"/>
            <Heading
            as="h1"
            fontWeight="300"
            fontSize="24px"
            letterSpacing="-0.5px"
            mb={4}>Register to my Task List</Heading>
            </VStack>
            <Card bg="#F5F5F5" variant="outline" borderColor="#b1b1b1" borderRadius="0" maxW="380px">
            <CardBody>
                <form onSubmit={handleSubmit((values)=>{
                    console.log(values);
                })}>
                <Stack spacing="4">
                <FormControl>
                    <FormLabel size="sm" >Username</FormLabel>
                    <Input 
                    type="text" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {... register("username", { required: true })}
                    />
                    <HStack justify="space-between">
                    <FormLabel size="sm" >Email address</FormLabel>
                    </HStack>
                    <Input 
                    type="email" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {... register("email", { required: true })}
                    />
                    <HStack justify="space-between">
                    <FormLabel size="sm" >Password</FormLabel>
                    </HStack>
                    <Input 
                    type="password" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {... register("password", { required: true })}
                    />
                </FormControl>
                <Button
                type="submit" 
                borderRadius="0" 
                bg='#08376B' 
                color='#F5F5F5'
                _hover={{
                    color: '#F5F5F5',
                    bg: '#08579B'}}>Register</Button>
                </Stack>
                </form>
            </CardBody>
            </Card>
            </Stack>
            </Center>
            <Center>
            <HStack as="footer" spacing="5" mt="10" pt="2">
                <Link isExternal color="#0969da" href="#" fontSize="xs">Terms</Link>
                <Link isExternal color="#0969da" href="#" fontSize="xs">Privacy</Link>
                <Link isExternal color="#0969da" href="#" fontSize="xs">Security</Link>
                <Link isExternal  href="#" fontSize="xs">Contact TaskList</Link>
            </HStack>
            </Center>
        </Box>
    )
}

