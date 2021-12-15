import React, { Component } from 'react';
// import { markComplete } from '../../react-to-do/src/controller.js';
// import './NewToDo.css';
// import App from ./App.js
// import App from './App.js';


class NewToDo extends Component {
    // constructor(props)
    // {
    //     super()
    //     this.props = props;
    //     this.state = {
    //         id:props.id,
    //         text:props.text,
    //         date:props.date,
    //         completed: props.completed,
    //         // markComplete:props.markComplete,
    //         // deleteTask:props.delete
    //     }
    // }
  render() {
    return (
        <div className="userTaskSection" id="userTaskCONTENT">
             <div className="ALL"> 
          <div className="todo-item">
              <input type="checkbox" checked={this.props.completed} onChange={()=>this.props.markComplete(this.props.id)}/>
            <p className="toDoTitle">{this.props.text}</p>
          <button className="deleteButton" onClick={()=>this.props.deleteTask(this.props.id)}>Delete</button>
          <div className="date">
            <p className="space"> </p>
          <p> <b> Date Created: </b> {this.props.date}</p>
          </div>
          </div>
          </div>
       </div>
    )}
}

export default NewToDo;