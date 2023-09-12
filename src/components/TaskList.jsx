import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useForm } from '../hooks/useForm';
import { AddIcon } from '@chakra-ui/icons'


export const TaskList = ({ handleNewTodo }) => {
	const { name, description, onInputChange, onResetForm, } = useForm({
		name: '',
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (name.length <= 3){
			return alert("add a task");
		}; 
		
		let newTodo = {
			id: new Date().getTime(),
			name: name,
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	}

	return (
		<>
		<Flex justify='center'>
		<form onSubmit={onFormSubmit}>
			<Input 
			w='20vw'
			id='name'
			type='text'
			name='name'
			value={name}
			onChange={onInputChange}
			placeholder='add task'
			/>
			<Input 
			w='30vw'
			id='description'
			type='text'
			name='description'
			value={description}
			onChange={onInputChange}
			placeholder='description'
			/>
			<Button
			ml='15px'
			mb='5px'
			borderRadius='0' 
            bg='#08376B' 
            color='#F5F5F5'
            _hover={{
              color: '#08376B',
            bg: '#F5F5F5'}}
			title="add task" type='submit'>
			<AddIcon/>
			</Button>
		</form>
		</Flex>
		<Text textAlign='center'>These are your tasks</Text>
		</>
	);
};
