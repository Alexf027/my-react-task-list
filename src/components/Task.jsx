import React from 'react'
import { TodoUpdate } from './TodoUpdate';

export const Task = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label title='Completed task'
					className = {`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='button-delete task-button' title='Delete task'
				onClick={() => handleDeleteTodo(todo.id)}>
				<i className="fa-solid fa-trash-can"></i>
			</button>
		</li>
	);
};
