import {TodoApp} from "../components/TodoApp"
import derecha from "../images/derecha.png";
import izquierda from "../images/izquierda.png";
import { 
  useDisclosure, 
  Alert, 
  AlertTitle, 
  AlertDescription, 
  CloseButton, 
  Flex, 
  Image  } from "@chakra-ui/react";

export function Homepage() {
  const {
    isOpen: isVisible,
    onClose,
  } = useDisclosure({ defaultIsOpen: true })
  return isVisible ?(
    <Flex justifyContent='center'>
    <Flex  flexDir='column'>
    <Alert
    w='600px'
    justifyContent='center'
    flexDir='column'
    textAlign='center'>
    <CloseButton 
      alignSelf='flex-end'
      position='absolute'
      right={1}
      top={1}
      onClick={onClose}
    />
    <AlertTitle m='35px' fontSize='lg' textAlign='center' color='#08376B'>Welcome to our To Do List app</AlertTitle>
    <AlertDescription mr='100px' mb='12px' ml='100px' fontSize='sm' textAlign='center'>In this application, you will be able to manage your daily tasks in a simple and efficient way. Organize your to-dos, mark completed tasks and keep control of your daily activities in a practical way.
    Start increasing your productivity and keeping everything under control with our To Do List! We hope this tool helps you keep your life organized and allows you to focus on what really matters.
    Enjoy using our app and feel free to contact us if you have any suggestions or comments to improve it!
    Let's do it! 🚀</AlertDescription>
    </Alert>
    <Flex>
    <Image h='250px' w='300px' src={izquierda}/>
    <Image h='250px' w='300px' src={derecha}/>
    </Flex>
    </Flex>
    </Flex>
  ):(
    <TodoApp/>
  )
}