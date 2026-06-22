import {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App(){
  const [todos,setTodos]=useState([]);
  const addTodo=(task)=>{
    const newTodo={
      id:Date.now(),
      text:task,
      completed:false
    };
    setTodos([...todos,newTodo]);
  }
  const deleteTodo=(id)=>{
    setTodos(
      todos.filter(todo=>todo.id!==id)
    );
  }
  const toggleComplete=(id)=>{
    setTodos(todos.map(todo=> todo.id===id?{...todo,completed:!todo.completed}:todo));
  }
  return(
    <div className="app">
      <h1> Todo App </h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
    </div>
  )
}
export default App;