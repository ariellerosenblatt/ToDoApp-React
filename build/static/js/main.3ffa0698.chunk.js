(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),r=n.n(s),c=(n(14),n(1)),i=n(2),l=n(4),d=n(3),u=n(5),p=n(6),h=(n(16),n(17),"ea812b-af8305-822932-c0383a-7dea17");var m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"userTaskSection",id:"userTaskCONTENT"},o.a.createElement("div",{className:"ALL"},o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:this.props.completed,onChange:function(){return e.props.markComplete(e.props.id)}}),o.a.createElement("p",{className:"toDoTitle"},this.props.text),o.a.createElement("button",{className:"deleteButton",onClick:function(){return e.props.deleteTask(e.props.id)}},"Delete"),o.a.createElement("div",{className:"date"},o.a.createElement("p",{className:"space"}," "),o.a.createElement("p",null," ",o.a.createElement("b",null," Date Created: ")," ",this.props.date)))))}}]),t}(a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos&&this.props.todos.sort(function(t,n){return e.props.sortMethod?t.created_at<n.created_at?1:-1:t.created_at<n.created_at?-1:1}).map(function(t,n){return o.a.createElement(m,{key:t.id,id:t.id,text:t.text,date:t.created_at,completed:t.completed,markComplete:e.props.handleCheck,deleteTask:e.props.handleDelete})}))}}]),t}(a.Component),k="ea812b-af8305-822932-c0383a-7dea17",v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],newTask:"",sortMethod:!1,trigger:!1},n.handleCheck=function(e){var t="https://cse204.work/todos/"+e,a=Object(p.a)(Object(p.a)(n)),o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var t=JSON.parse(this.responseText);console.log(t);var n=a.state.todos.filter(function(t){return t.id!==e?t:(t.completed=!0,t)});a.setState({todos:n})}else 4===this.readyState&&console.log(this.responseText)},o.open("PUT",t,!0),o.setRequestHeader("Content-type","application/json"),o.setRequestHeader("x-api-key",k),o.send(JSON.stringify({completed:!0}))},n.handleDelete=function(e){!function(e){var t=e,n=new XMLHttpRequest;n.open("DELETE","https://cse204.work/todos/"+t,!0),n.setRequestHeader("content-type","application/json"),n.setRequestHeader("x-api-key",h),n.send()}(e);var t=n.state.todos.filter(function(t){return e!=t.id});n.setState({todos:t})},n.handleAdd=function(){!function(e){var t={text:e};try{var n=new XMLHttpRequest;n.open("POST","https://cse204.work/todos",!0),n.setRequestHeader("content-type","application/json"),n.setRequestHeader("x-api-key",h),n.send(JSON.stringify(t)),console.log(t)}catch(a){console.log(a)}}(n.state.newTask),n.setState({newTask:""}),n.getItems()},n.handleEnter=function(e){"Enter"===e.code&&n.handleAdd()},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"getItems",value:function(){var e=this;fetch("https://cse204.work/todos",{method:"GET",headers:{"x-api-key":k}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({todos:t})}).catch(function(e){return console.log(e)}).finally(function(){return e.setState({trigger:!e.state.trigger})})}},{key:"render",value:function(){var e=this;console.log("rendered");var t=this.state.todos;return a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement("div",{className:"add"},a.createElement("h",null,"To Do List"),a.createElement("input",{className:"input",onChange:function(t){return e.setState({newTask:t.target.value})},value:this.state.newTask,onKeyDown:this.handleEnter}),a.createElement("button",{className:"addButton",onClick:this.handleAdd},"Add Task"),a.createElement("button",{className:"sortButton",onClick:function(){return e.setState({sortMethod:!e.state.sortMethod})}},"Sort ",this.state.sortMethod?"Recent":"Oldest"," ")," "),a.createElement(f,{todos:t,sortMethod:this.state.sortMethod,handleCheck:this.handleCheck,handleDelete:this.handleDelete})))}}]),t}(a.Component),g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,20)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),s(e),r(e)})};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),g()},9:function(e,t,n){e.exports=n(19)}},[[9,3,2]]]);
//# sourceMappingURL=main.3ffa0698.chunk.js.map