import { useForm } from '../hooks/useForm';

export const TaskList = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm, } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 3) return;
		
		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	}

	return (
		<form onSubmit={onFormSubmit}>
			<input 
			id='description'
			type='text'
			className='task-input'
			name='description'
			value={description}
			onChange={onInputChange}
			placeholder='Add task'
			/>
			<button className="add-task" title="Add task" type='submit'>
			<i className="fa-solid fa-square-plus"></i>
			</button>
		</form>
	);
};
