function Task ({todos, setTodos, setTodo, setEditID}){

    const onComplete = (id) => {
        let completed = todos.map((list) =>{
            if(list.id === id){
                return ({...list, status : !list.status})
            }
            return list;
        })
        setTodos(completed);
    }

    const onEdit = (id) => {
        const editTodo = todos.find((to) => to.id === id)
        setTodo(editTodo.list)
        setEditID(editTodo.id)
        console.log(editTodo)
     }

     const onDelete = (id) => {
        setTodos(todos.filter((to) => to.id !== id))
    }

    return(<div className="list">
   <ul>
    {todos.map((to, index) => (
        <li  className="list-items" key={index}>
        <button className="button-completed task-button" title="Complete" onClick={() => (onComplete(to.id))}>
            <i className="far fa-circle co"></i>
        </button>
        <div className="list-item-list" id={to.status ? "complete" : ""}>{to.list}</div>
            <button className="button-edit task-button" title="Edit" onClick={() => onEdit(to.id)}>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="button-delete task-button" title="Delete" onClick={()=> onDelete(to.id)}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </li>
       ))
    }
    </ul>
</div>)
}
export default Task;