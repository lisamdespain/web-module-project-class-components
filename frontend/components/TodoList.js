import React from 'react'
import Todo from "./Todo";
/**
 * this determines how the todo list will display 
 * @param {object} props
 * @param {array} props.tasks
 * @param {object} props.tasks[task]
 * @param {string} props.tasks.task.tasks (should be named something else; the name of the task)
 * @param {int} props.tasks.task.id (epoch time when the task was created)
 * @param {boolean} props.tasks.task.completed (can be clicked true by the user, applies class name completed)
 * @param {function} props.clearCompleted (filters through the tasks and removes a task from the list if completed is true)
 *  @param {function} props.toggleItem (filters through the tasks and sets the state of completed to true if id matches)
 * @returns a React component
 */
const TodoList = ({clearCompleted, toggleItem, tasks}) => {
  // clearButton is called from onClick of the Clear Completed button
  const clearButton = e => {
    e.preventDefault();
    clearCompleted();
  }
    return (
      <div>
        <div className="todo-list">
      {tasks.map(task => (
        <Todo 
          key={task.id} 
          task={task} 
          toggleItem={toggleItem} 
          />

      ))}
    </div>
    <button onClick={clearButton} className="clear-btn">Clear Completed</button>
      </div>
    )
  }

  export default TodoList;