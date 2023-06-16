import Task from "./Task";

export const TaskList = () => {
    return ( 
     <div>
        <div className="add-task">
          <input type="text" placeholder="add task"/>
          <i className="fa-solid fa-square-plus"></i>
        </div>
        <div className="task">
          <h3>These are your pending tasks</h3>
          <Task />
          <div className="advertisement">
            <p></p>
            <button>Clear All</button>
          </div>
        </div>
      </div>)
};