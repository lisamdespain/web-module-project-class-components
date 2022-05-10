import React from 'react'

/**
 * this determines how the todo item will display 
 * @param {object} props
 * @param {object} props.task
 * @param {string} props.task.tasks (should be named something else; the name of the task)
 * @param {int} props.task.id (epoch time when the task was created)
 * @param {boolean} props.task.completed (can be clicked true by the user, applies class name completed)
 *  @param {function} props.toggleItem (filters through the tasks and sets the state of completed to true if id matches)
 * @returns a React component
 */
const Todo = props => {
  
    return (
      <div onClick={() => props.toggleItem(props.task.id)}
        className= {props.task.completed ? 'completed' : ''}>
        <p>{props.task.tasks}</p>
      </div>
    )
 }

export default Todo;