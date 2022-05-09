import React from 'react'

const Todo = props => {
  
    return (
      <div onClick={() =>
        this.toggleItem(props.task.id)}
        className={`item${props.task.completed ? ' completed' : ''}`}>
        <p>{props.task.name}</p>
      </div>
    )
 }

export default Todo;