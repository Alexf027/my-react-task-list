import { IconButton, FormLabel, Flex } from '@chakra-ui/react';
import { TodoUpdate } from './TodoUpdate';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Delete } from './Delete';

export const Task = ({
	todo,
	handleUpdateTodo,
	handleCompleteTodo,
}) => {
	
	return (
		<Flex justify='center'>
			<IconButton 
			bgColor='#EAEBEE'
			color='green'
			icon={<CheckCircleIcon/>}
			onClick={() => handleCompleteTodo(todo.id)}
			/>
				<FormLabel 
					className = {`container-done ${todo.done ? 'active' : ''}`}
				></FormLabel>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<Delete/>
			</Flex>
	);
};
