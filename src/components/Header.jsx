import { Flex, Heading, Text } from "@chakra-ui/react";

export function Header(){
    return <Flex textAlign='center' flexDir='column'>
    <Heading size='2xl' as='h2' color='#08376B'>Todo App</Heading>
    <Text mr='8rem' fontSize='sm'>Meeting goals</Text>
    </Flex>
}
