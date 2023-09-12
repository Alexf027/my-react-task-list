import { useRef, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'


export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	
	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.name,
	});

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const name = updateDescription;

		handleUpdateTodo(id, name);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
		<Flex>
			<Input
				type='text'
				className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				readOnly={disabled}
				ref={focusInputRef}
			/>
			<IconButton 
			bgColor='#EAEBEE'
			type='submit'
			icon={<EditIcon/>} />
			</Flex>
		</form>
	);
};
