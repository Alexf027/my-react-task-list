import { useState, useEffect } from "react";
import Task from "./Task";

export const TaskList = () => {

  const initState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(initState);
  const [editId, setEditID] = useState(0);

  useEffect (() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 

  const addTask = () => {
    if(todo !== ""){
      setTodos([...todos, {list : todo, id: Date.now(), status: false }]);
      console.log(todos);
     setTodo("");
    }
    if(editId){
     const editTodo = todos.find((todo) => todo.id === editId)
     const updateTodo = todos.map((to) => to.id === editTodo.id
     ? (to = {id : to.id , list : todo})
     : (to = {id : to.id , list : to.list}))
     setTodos(updateTodo);
     setEditID(0);
     setTodo("");
    }
 };

  const handleSubmit = (e) => {
    e.preventDefault();

};

const clearAll = () => {
  setTodos([]);
}

const tasksPending = todos.filter(todo => !todo.status).length

    return ( 
     <div>
     <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="task-input"
        placeholder="add task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={addTask} className="add-task" title="Add task">
                {editId ? <i className="fa-regular fa-pen-to-square"></i> : <i className="fa-solid fa-square-plus"></i>}
            </button>
    </form>
    <h3>These are your tasks</h3>
     <Task 
      todos={todos}
      setTodos={setTodos}
      setTodo={setTodo}
      setEditID={setEditID}
     />
    <div className="advertisement">
    <p>You have peding task: <strong>{tasksPending}</strong>  </p>
    <button className="button-clear-all" onClick={() =>clearAll()}>Clear All</button>
    </div>
  </div>)
};