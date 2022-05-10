import React from 'react'
/**
 * this determines how the form adds a new task to state
 * @param {object} props
 * @param {function} props.addItem (user inputs a new task to state)
 * @returns a React component
 */
export default class Form extends React.Component {
  constructor(){
    super();
    // setting state for the task text to an empty string
    this.state = {
      itemText: ''
    }
  }

  // adding user input from the form
  handleChange = e =>{
    this.setState({
      itemText: e.target.value 
    })
  }
  
  // what happens when the user hits the add task button. Preventing the browswer from reloading, adding the new item to state, setting local back to an empty string
  handleSubmit = e =>{
    e.preventDefault();
    this.props.addItem(e, this.state.itemText);
    // trying to reuse handleChange, altering the parameter to match the function
    const defaultText = {target:{value:''}}
    this.handleChange(defaultText)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          type="text"
          name="task"
          value={this.state.itemText}
        />
        <button>Add Task</button>
        </form>
      </div>
    )
  }
}
