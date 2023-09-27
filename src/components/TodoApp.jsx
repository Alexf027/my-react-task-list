import { Box, Card, Center, VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { Task } from "./Task";

import React from 'react'

export function TodoApp() {
  return (
    <Box>
    <Center>
    <Card bg="#F5F5F5" variant="outline" borderColor="#b1b1b1" borderRadius="0">
    <VStack spacing="6">
    <Header/>
    <TaskList/>
    </VStack>
    <Task/>
    </Card>
    </Center>
    </Box>
  )
}
