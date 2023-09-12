import { useRef } from 'react';
import { 
  IconButton,
  useDisclosure, 
  Button, Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'

export const Delete = ({ todo, handleDeleteTodo }) =>{

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <IconButton
      bgColor='#EAEBEE'
      color='red'
			icon={<DeleteIcon/>}
			onClick={onOpen}
		/>
        <Modal isCentered='true'
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </ModalHeader>

            <ModalBody>
              Are you sure? You can't undo this action afterwards.
            </ModalBody>

            <ModalFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' 
              onClick={() => handleDeleteTodo(todo.id)}
              ml={3}>
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
