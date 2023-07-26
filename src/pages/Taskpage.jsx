import "../App.css"
import Header from "../components/Header"
import { TaskList } from "../components/TaskList"
import { TodoList } from "../components/TodoList"
import { useTodo } from "../hooks/useTodo"
 import React from 'react'
 
export function Taskpage() {
    const {
		todos,
		tasksPending,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
		clearAll,
	} = useTodo();

   return (
		<div className='container'>
		<div className='app-wrapper'>
		<div>
			<Header/>
		</div>
		<div>
		<TaskList handleNewTodo={handleNewTodo}/>
		<TodoList
			todos={todos}
		    handleUpdateTodo={handleUpdateTodo}
			handleDeleteTodo={handleDeleteTodo}
			handleCompleteTodo={handleCompleteTodo}
		/>
		<div className='advertisement'>
		<p>You have peding task: <strong>{tasksPending}</strong></p>
		<button className="button-clear-all" title='Clear all' onClick={() =>clearAll()}>Clear All</button>
		</div>
		</div>
		</div>
		</div>
	);
 }
 