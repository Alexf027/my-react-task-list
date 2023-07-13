import React from 'react';
import { Task } from './Task';

export const TodoList = ({
	todos,
	clearAll,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<ul>
			{todos.map(todo => (
				<Task
					key={todo.id}
					todo={todo}
					clearAll={clearAll}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	);
};
