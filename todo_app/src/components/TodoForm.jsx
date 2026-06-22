import {useState} from "react";
function TodoForm({addTodo}){
    const [task,setTask]=useState("");
    function submit(e){
        e.preventDefault();
        if(task.trim()!==""){
            addTodo(task);
            setTask("");
        }
    }
return (
    <form onSubmit={submit}>
        <input value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter task"/>
        <button>Add</button>


    </form>
)
}
export default TodoForm;