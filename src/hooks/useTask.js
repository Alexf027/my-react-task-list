import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../todoreducer';

export const useTask = () => {
	
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

	const [todos, dispatch] = useReducer(
		todoReducer,
		initialState,
		init
	);

    const tasksPending = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


	const handleNewTodo = todo => {
		const action = {
			type: 'Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = id => {
		const action = {
			type: 'Delete Todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteTodo = id => {
		const action = {
			type: 'Complete Todo',
			payload: id,
		};
		dispatch(action);
	};

	const clearAll = todo => {
		const action = {
			type: 'clear All',
			payload: todo,
		};
		dispatch(action);
	};

	const handleUpdateTodo = (id, name,description ) => {
		const action = {
			type: 'Update Todo',
			payload: {
				id,
				name,
			},
			type: 'Update Todo',
			payload: {
				id,
				description,
			},
		};
		dispatch(action);
	};
    return{
        todos,
        tasksPending,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
		clearAll
    }
};
