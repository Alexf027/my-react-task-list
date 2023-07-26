import { Link } from "react-router-dom";
import "../App.css"
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";


export function Menu() {
  return (
    <Box h='7vh' bg='#4b91d8'>
    <Flex color='white' justify='end'>
     <Stack pr='15px' mt='20px' spacing='37px' direction={{base: 'column', mx: 'row'}}>
        <Link to="/">Home</Link>
        <Link to="/task">Task</Link>
        <Link to="/about">About</Link>
      </Stack>
    </Flex>
    </Box>
  );
}