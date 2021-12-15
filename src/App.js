import logo from './logo.svg';
import './App.css';
import * as controller from "./controller"
import * as React from 'react';
import NewToDo from './NewToDo';
import ToDoList from './ToDoList';

// import React, {useState} from 'react';
var APIKey = "ea812b-af8305-822932-c0383a-7dea17";
class App extends React.Component
{
  // constructor(){
    // super()
   
    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleEnter = this.handleEnter.bind(this);

  // }
componentDidMount(){ this.getItems()}
// shouldComponentUpdate(nextProps, nextState) {
//   console.log("currentstate", this.state)
//   console.log("nextstate", nextState)
//   return true;
// }

state = {
  todos: [],
  newTask: "",
  sortMethod: false,
  trigger: false
}

getItems()
{
  // this.setState({todos:[]})
  fetch("https://cse204.work/todos",{
    method:"GET",
    headers:{
      "x-api-key":APIKey
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    this.setState({todos:data})
  }
    )
  .catch(err=>console.log(err)).finally(()=>this.setState({trigger: !this.state.trigger}))
}
handleCheck=(id)=>
{
  // controller.markComplete(id);
  // this.getItems();
  // setTimeout(() => {
  //   this.forceUpdate()
  // }, 250);

    var url = "https://cse204.work/todos/" + id;
    var data = {
      completed: true
    }
    var self = this;
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var todo = JSON.parse(this.responseText);
            console.log(todo);

            const newTodos = self.state.todos.filter((todo) => {

              if (todo.id !== id) {
                return todo;
              }
              else{
                todo.completed = true;

                return todo;
              }
            });
            self.setState({
              todos: newTodos
            })
    
        } else if (this.readyState === 4) {
            console.log(this.responseText);
        }
    };

    xhttp.open("PUT", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", APIKey);
    xhttp.send(JSON.stringify(data));
  // }
}

handleDelete=id=>
{
  controller.deleteItem(id);
  // this.getItems();
  let newList = this.state.todos.filter(x=>id!=x.id)
  this.setState({todos:newList})

}

handleAdd=()=>
{
  controller.newTask(this.state.newTask);
  // setNewTask("");
  this.setState({newTask:""});
  this.getItems();
}

handleEnter=(e)=>
{
  if (e.code === "Enter")
  {
    this.handleAdd()
  }
}

render() {
  console.log("rendered");
  let newList = this.state.todos;
  return(
    <div className="App">
      <header className="App-header">
      <div className="add"> 
      <h>To Do List</h>
        <input className="input" onChange={e=>this.setState({newTask:e.target.value})} value={this.state.newTask} onKeyDown={this.handleEnter}/>
        <button className="addButton" onClick={this.handleAdd}>Add Task</button>
        <button className="sortButton" onClick={()=>this.setState({sortMethod:!this.state.sortMethod})}>Sort {this.state.sortMethod?"Recent":"Oldest"} </button> </div>
        {/* {this.state.todos && this.state.todos.sort((a,b)=>{
          if(this.state.sortMethod) {
            return a.created_at < b.created_at ? 1:-1
          }
          else
          {
            return a.created_at < b.created_at ? -1:1
          }
        }).map((x,i)=>(
          <NewToDo 
            key = {JSON.stringify(x)}
            id = {x.id}
            text={x.text}
            date={x.created_at}
            completed={x.completed}
            markComplete={this.handleCheck}
            deleteTask={this.handleDelete}
          />
        ))} */}
        <ToDoList
        todos={newList}
        sortMethod={this.state.sortMethod}
        handleCheck={this.handleCheck}
        handleDelete={this.handleDelete}
         />
      </header>
    </div>
  )

}
}
export default App;
