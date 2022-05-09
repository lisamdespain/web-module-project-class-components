import React from 'react'
import Todo from "./Todo";

const TodoList = props => {
  const clearButton = e => {
    e.preventDefault();
    this.props.clearCompleted(e, this.state.itemText);
  }
    return (
      <div>
        <div className="todo-list">
      {props.tasks.map(task => (
        <Todo 
          key={task.id} 
          task={task} 
          toggleItem={props.toggleItem} 
          />
      ))}
    </div>
    <button onClick={() => this.clearButton} className="clear-btn">Clear Completed</button>
      </div>
    )
  }

  export default TodoList;