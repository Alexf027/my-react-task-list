import { useRef, useState } from 'react';
import { useForm } from '../hooks/useForm';


export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	
	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description,
	});

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

		handleUpdateTodo(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
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
			<button className='button-edit task-button' title="Edit task" type='submit'>
			<i className="fa-regular fa-pen-to-square"></i>
			</button>
		</form>
	);
};
