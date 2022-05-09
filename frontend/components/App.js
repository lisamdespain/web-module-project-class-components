import React from 'react'
import '../styles/reset.css'
import '../styles/styles.css'
import Form from './Form';
import TodoList from './TodoList';

const tasks = [];


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }

  toggleItem = (taskId) =>{
    // map over the array
    // when we find the item we clicked, toggle the purchased field
    // if other, return the item untouched
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    });
  }

  addItem = (e, item) =>{
    e.preventDefault();
    const newItem = {
      tasks: item, 
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newItem]
    })
  }

  clearCompleted = () =>{
    this.setState({
      tasks: this.state.tasks.filter(item => !itemCompleted)
    })
  }

  render() {
    return (
      <div>
        <div>
        <h1>To Do App</h1>
        <Form 
          addItem={this.addItem} 
           
        />
        </div>
        <TodoList 
          tasks={this.state.tasks} 
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
          />
        
      </div>
    )
  }
}
