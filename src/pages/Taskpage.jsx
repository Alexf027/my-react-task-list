import { useTask } from "../hooks/useTask";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
} from "@chakra-ui/react";

export const Taskpage = () => {
  
  return (
    <Box>
      <Heading 
      color='#08376B' 
      pt='20px' pb='35px'
      textAlign='center'>My Task</Heading>
      <Flex justify='center'>
      <TableContainer>
        <Table maxW='70%' size='lg' variant='striped'
        colorScheme='telegram'>
        <TableCaption placement='top'>Things to do</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>ID</Th>
              <Th>NAME</Th>
              <Th>DESCRIPTION</Th>
            </Tr>
          </Thead>
          <Tbody>
                <Tr >
                  <Td isNumeric></Td>
                  <Td ></Td>
                  <Td ></Td>
                </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric>ID</Th>
              <Th>NAME</Th>
              <Th>DESCRIPTION</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      </Flex>
    </Box>
  );
};

