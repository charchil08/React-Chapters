import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";
import { ListGroup } from "react-bootstrap";
import { FaCheckDouble } from "react-icons/fa"

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext)

    return (
        <ListGroup className="" style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }} >
            {
                todos.map(todo => <ListGroup.Item className="px-4" style={{
                    width: "50rem",
                    overflow: "auto",
                }} variant="flush" action key={todo.id} >{
                        todo.todoString
                    }
                    <span
                        onMouseEnter={e => {
                            e.target.style.color = "blue"
                        }}
                        onMouseLeave={e => {
                            e.target.style.color = "black"
                        }}
                        style={{
                            position: "absolute",
                            right: "8px"
                        }}
                        onClick={() => {
                            dispatch({
                                type: REMOVE_TODO,
                                payload: todo.id
                            })
                        }}
                    ><FaCheckDouble /></span>
                </ListGroup.Item>)
            }
        </ListGroup >
    )
}

export default Todos;