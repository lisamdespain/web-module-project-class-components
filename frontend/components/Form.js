import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      itemText: ''
    }
  }

  handleChange = e =>{
    this.setState({
      itemText: e.target.value
    })
  }
  
  handleSubmit = e =>{
    e.preventDefault();
    this.props.addItem(e, this.state.itemText)
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
