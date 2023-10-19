import Logo from "../images/Logo.jpg";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WarningTwoIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,Text,Button,Card,
  CardBody,Center,FormControl,
  FormLabel,HStack,Heading,
  Image,Input,Link,Stack,
  VStack, Alert, AlertIcon,
  AlertTitle, InputGroup, InputRightElement
} from "@chakra-ui/react";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  const onSubmit = async(values) => {
    signup(values)
  };

  return (
    <Box>
    {
      registerErrors.map((error, i) => (
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
        </Center>
      ))
    }
      <Center>
        <Stack spacing="2">
          <VStack as="header" spacing="4">
            <Image src={Logo} h="70px" mt="6" />
            <Heading
              as="h1"
              fontWeight="300"
              fontSize="24px"
              letterSpacing="-0.5px"
              mb={4}
            >
              Register to my Task List
            </Heading>
          </VStack>
          <Card
            bg="#F5F5F5"
            variant="outline"
            borderColor="#b1b1b1"
            borderRadius="0"
            maxW="380px"
          >
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel color="" size="sm">
                      Username
                    </FormLabel>
                    
                    <Input
                      type="text"
                      bg="whithe"
                      size="sm"
                      borderRadius="0"
                      {...register("username", { required: true })}
                    />
                    {errors.username && (
                      <Text fontSize="xs" color="red">
                        <WarningTwoIcon />
                        Username is required
                      </Text>
                    )}

                    <HStack justify="space-between">
                      <FormLabel size="sm">Email address</FormLabel>
                    </HStack>
                    <Input
                      type="email"
                      bg="whithe"
                      size="sm"
                      borderRadius="0"
                      {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, })}
                    />
                    {errors.email && (
                      <Text fontSize="xs" color="red">
                        <WarningTwoIcon />
                        Email is required
                      </Text>
                    )}
                    <HStack justify="space-between">
                      <FormLabel size="sm">Password</FormLabel>
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
                      {errors.password && (
                      <Text fontSize="xs" color="red">
                        <WarningTwoIcon />
                        Password is required
                      </Text>)}
                  </FormControl>
                  <Button
                    type="submit"
                    borderRadius="0"
                    bg="#08376B"
                    color="#F5F5F5"
                    _hover={{
                      color: "#F5F5F5",
                      bg: "#08579B",
                    }}
                  >
                    Register
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Center>
      <Center>
        <HStack as="footer" spacing="5" mt="10" pt="2">
          <Link isExternal color="#0969da" href="#" fontSize="xs">
            Terms
          </Link>
          <Link isExternal color="#0969da" href="#" fontSize="xs">
            Privacy
          </Link>
          <Link isExternal color="#0969da" href="#" fontSize="xs">
            Security
          </Link>
          <Link isExternal href="#" fontSize="xs">
            Contact TaskList
          </Link>
        </HStack>
      </Center>
    </Box>
    )
};
