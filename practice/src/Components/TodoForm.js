import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.types";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("")
    const { dispatch } = useContext(TodoContext)

    const handleSubmit = e => {
        e.preventDefault()

        if (todoString.trim().length === 0) {
            return toast("Empty todo not allowed !", { type: "error" })
        }
        else {
            toast("Todo added successfully !", { type: "success" })
        }
        const todo = {
            id: v4(),
            title: todoString
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("")

    }

    return (
        <Container className="my-2">
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}

            <Form onSubmit={handleSubmit} style={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Form.Group className="my-4 mx-4" controlId="formTodoItem">
                    <Form.Control type="text"
                        placeholder="Add next todo ..."
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                        style={{
                            width: "40rem",
                            color: "#333"
                        }}
                    />
                </Form.Group>
                <Button type="submit" variant="outline-success">Add</Button>
            </Form>
        </Container>
    )

}

export default TodoForm;