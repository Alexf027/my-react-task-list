import "../style/style.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormControl, Button, Input, Flex, Center, Box, Text } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

export function TaskList() {
    const { 
        register, 
        handleSubmit, 
        trigger, 
        formState: { errors, isSubmitting } } = useForm();
    
    const onSubmit = (e) => {
        console.log(e)
        };


  return (
    <Box mb="25px">
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl>
    <Center>
    <Flex flexDir="column">
    <Input
      name="taskName" 
      type="text"
      placeholder="Add task"
      borderRadius="0"
      w="20vw"
      ml="4"
      {...register ("Name", { required: true,
      minLength: {value: 4, message: "Name your task"}})}
    />
    {errors.Name && <Text size="xs" color="red" ml="4">{errors.Name.message}</Text>}
    </Flex>
    <Flex flexDir="column">
    <Input
      ml="2"
      name="taskDescription"
      type="text"
      placeholder="Description"
      borderRadius="0"
      width="27vw"
      {...register ("Description", { required: true,
      minLength: {value: 4, message: "Assign a description"}})}
    />
    {errors.Description && <Text size="xs" color="red">{errors.Description.message}</Text>}
    </Flex>
    <Button
    type="submit"
    mr="4"
    ml="2"
    borderRadius="0"
    bg='#08376B' 
    color='#F5F5F5'
    _hover={{
        color: '#F5F5F5',
        bg: '#08579B'}}
        onClick={() => {
          trigger(["taskName", "taskDescription"]);
        }}
        disabled= {isSubmitting}>
    <AddIcon/>
    </Button>
    </Center>
    </FormControl>
    </form>
    </Box>
  )
}

