import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";
import { Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("")
    const { dispatch } = useContext(TodoContext)
    // const [isEmpty, setIsEmpty] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()

        if (todoString.trim() === "") {
            // const notify = () => toast("Empty item not allowed !")
            // setIsEmpty(true)
            // TODO: add react-toastify instead of alert
            return alert("Empty item not allowed !")
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")
    }
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <form method="post" onSubmit={e => handleSubmit(e)}>
                    <input type="text" placeholder="Add new todo" name="todo" id="todo" style={
                        {
                            padding: "8px",
                            borderRadius: "5px",
                            border: "none"
                        }
                    }
                        value={todoString}
                        onChange={(e) => setTodoString(e.target.value)}
                    />
                    <Button type="submit" variant="warning"
                    >Add</Button>
                    
                </form>
            </div>
        </div>
    )
}

export default TodoForm;