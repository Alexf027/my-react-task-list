import Logo from "../images/Logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useAuth}   from "../context/authContext";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ViewOffIcon, ViewIcon, WarningTwoIcon} from '@chakra-ui/icons';
import { Box, Button,Card, CardBody, Center, FormControl, FormLabel, 
HStack, Heading, Image, Input, Stack, Text, VStack,
InputGroup, InputRightElement } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export function Login(){

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const { signin, errors: loginErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async(values) => {
        signin(values);
    };

    useEffect(() => {
        if(isAuthenticated) navigate('/');
    }, [isAuthenticated])

    return (
        <Box>
        {
        loginErrors.map((error, i) => (
        <Center>
        <Alert status='error' 
               alignItems='center'
               justifyContent='center'
               textAlign='center'
               height='55px'
               w="320px"
               key={i}>
          <AlertIcon />
           <AlertTitle>{error}</AlertTitle>
        </Alert>
        </Center>))
        }
        <Center>
        <Stack spacing="4">
        <VStack as="header" spacing="6">
            <Image src={Logo} h="70px" mt="6"/>
            <Heading
            as="h1"
            fontWeight="300"
            fontSize="24px"
            letterSpacing="-0.5px">Sign to my Task List</Heading>
            </VStack>
            <Card bg="#F5F5F5" variant="outline" borderColor="#b1b1b1" borderRadius="0" maxW="400px">
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="4">
                <FormControl >
                    <FormLabel size="sm" >Email address</FormLabel>
                    <Input 
                    type="email" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, }) }
                    />
                    {errors.email && <Text fontSize='xs' color="red"><WarningTwoIcon/>Email is required</Text>}
                    <HStack justify="space-between">
                    <FormLabel size="sm" >Password</FormLabel>
                    <Button href="#" variant="link" size="xs" color="#0969da">Forgot password?</Button>
                    </HStack>
                    <InputGroup>
                    <Input 
                    pr='4.5rem'
                    type={show ? 'text' : 'password'} 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {...register("password", { required: true })}
                    />
                    <InputRightElement>
                    <Button _hover={{
                        bg: 'white',
                      fontSize: '20px'
                      }} 
                      color='#08376B' 
                      mb={2} bg='whithe' 
                      h='1.5' size='xs' onClick={handleClick}>
                      {show ? <ViewOffIcon/> : <ViewIcon/>}
                      </Button>
                    </InputRightElement>
                    </InputGroup>
                    {errors.password && <Text fontSize='xs' color="red"><WarningTwoIcon/>Password is required</Text>}
                </FormControl>
                <Button borderRadius="0" 
                type="submit"
                bg='#08376B' 
                color='#F5F5F5'
                _hover={{
                    color: '#F5F5F5',
                    bg: '#08579B'}}>Sign in</Button>
                </Stack>
                </form>
            </CardBody>
            </Card>
            <Card variant="outline" borderColor="#b1b1b1" borderRadius="0">
                <CardBody>
                <Center>
                <HStack fontSize="sm" spacing="2">
                    <Text>
                    New in TaskList?   
                    </Text>
                    <Link to="/register">
                        <Text color="#0969da">
                        Create an account{" "}
                        </Text>
                    </Link>
                </HStack>
                </Center>
                </CardBody>
            </Card>
            </Stack>
            </Center>
            <Center>
            <HStack as="footer" spacing="4" mt="10" pt="2">
                <Link isExternal href="#"><Text color="#0969da" fontSize="sm">Terms</Text></Link>
                <Link isExternal href="#"><Text color="#0969da" fontSize="sm">Privacy</Text></Link>
                <Link isExternal href="#"><Text color="#0969da" fontSize="sm">Security</Text></Link>
                <Link isExternal href="#"><Text fontSize="sm">Contact TaskList</Text></Link>
            </HStack>
            </Center>
        </Box>
    )
}

