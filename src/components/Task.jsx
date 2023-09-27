import { useState, useEffect } from "react";
import { Card, Flex, IconButton, Input, Radio, } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"

export const Task = () => {

  return (
    <Card bg="#F5F5F5" m="4" borderRadius="0">
      <Flex>
        <Radio ml="3" mr="3"></Radio>
        <Input bg="#F5F5F5" borderRadius="0"/>
        <IconButton bg="#F5F5F5" mr="1" icon={<EditIcon/>}/>
        <IconButton bg="#F5F5F5" color="red" icon={<DeleteIcon/>}/>
      </Flex>
    </Card>
  )
}
