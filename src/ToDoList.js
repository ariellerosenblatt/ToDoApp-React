import React, { Component } from "react";
// import "./Todo.css";
import NewToDo from "./NewToDo";

class ToDoList extends Component {
    // constructor(props)
    // {
    //     super()
    //     this.props = props;
       
    // }
  render() {
    return (
        <div>
        {this.props.todos && this.props.todos.sort((a,b)=>{
  if(this.props.sortMethod) {
    return a.created_at < b.created_at ? 1:-1
  }
  else
  {
    return a.created_at < b.created_at ? -1:1
  }
}).map((x,i)=>(
  <NewToDo 
    key = {x.id}
    id = {x.id}
    text={x.text}
    date={x.created_at}
    completed={x.completed}
    markComplete={this.props.handleCheck}
    deleteTask={this.props.handleDelete}
  />
))}
</div>
    )}
}

export default ToDoList;