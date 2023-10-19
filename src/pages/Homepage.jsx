
import { Link } from "react-router-dom";
import derecha from "../images/derecha.png";
import izquierda from "../images/izquierda.png";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Text,Flex, Image, Card, Heading, CardFooter, Button, Stack, CardBody, Center} from "@chakra-ui/react";

export function Homepage() {
  
  return(
    <Center>
    <Card mt={10}
    borderRadius='0'
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'>
    <Stack>
      <CardBody>
      <Heading color='#08376B' mb={4} textAlign='center'>Welcome to TaskList</Heading>
      <Text size='sm' py='2'>In this application, you will be able to manage your daily tasks in a simple and efficient way.<br/>
    Organize your to-dos, mark completed tasks and keep control of your daily activities in a practical way.<br/>
    Start increasing your productivity and keeping everything under control with our To Do List!<br/>
    We hope this tool helps you keep your life organized and allows you to focus on what really matters.<br/>
    Enjoy using our app and feel free to contact us if you have any suggestions or comments to improve it!
    Let's do it! 🚀</Text>
      </CardBody>
      <Flex justify='center'>
    <Image h='250px' w='23em' src={izquierda}/>
    <Image h='250px' w='23em' src={derecha}/>
    </Flex>
    <CardFooter justify='center'>
    <Link to='/todoapp'>
      <Button borderRadius='0' 
      variant='solid' bg='#08376B' color='white'
      _hover={{
                    color: 'whithe',
                    bg: '#08579B'}}>
      Get started <ArrowForwardIcon ml={3}/>
      </Button>
      </Link>
    </CardFooter>
    </Stack>
    </Card>
    </Center>
  )
}