import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { TodoList } from "./TodoList";
import { useTask } from "../hooks/useTask";
import { Text } from "@chakra-ui/react";

export function MyTaskList() {
    const {
		todos,
		tasksPending,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
		clearAll,
	} = useTask();

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
		<Text>You have peding task: <strong>{tasksPending}</strong></Text>
		<button className="button-clear-all" title='Clear all' onClick={() =>clearAll()}>Clear All</button>
		</div>
		</div>
		</div>
		</div>
  );
}

