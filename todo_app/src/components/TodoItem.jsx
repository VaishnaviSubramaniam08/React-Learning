function TodoItem({ todo, deleteTodo, toggleComplete }) {


    return (

        <div>


            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />


            <span
                style={{
                    textDecoration:
                        todo.completed ?
                            "line-through" : "none"
                }}
            >
                {todo.text}
            </span>


            <button
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>


        </div>

    )

}


export default TodoItem;