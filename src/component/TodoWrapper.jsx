import { useState } from 'react';
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {

    const [todos, setTodos] = useState([
        {content: 'wash', id: Math.random(), isCompleted: false, isEditing: false},
        {content: 'do homework', id: Math.random(), isCompleted: false, isEditing: false},
    ]);

    const addTodo = (content) => {
        setTodos([...todos, {content, id: Math.random(), isCompleted: false, isEditing: false}])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }

    const check = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id == id) {
                if (todo.isCompleted == true) {
                    todo.isCompleted = false 
                }
                else{
                    todo.isCompleted = true
                }
            }
            return todo
        }))
    }

    const toggleIsEditing = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, isEditing: !todo.isEditing}
                : todo
        }))
    }

    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? {...todo, content: newContent, isEditing: false}
                : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>todo:</h1>
            <CreateForm addTodo={addTodo}/>
            {todos.map((todo) => {
                return <Todo props={todo} key={todo.id} 
                deleteTodo={deleteTodo} check={check} toggleIsEditing={toggleIsEditing} editTodo={editTodo}/>
            })}
        </div>
    )
}

export default TodoWrapper