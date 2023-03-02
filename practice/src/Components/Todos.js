import { TodoContext } from "../context/TodoContext"
import React, { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { FaCheckDouble } from "react-icons/fa"
import { REMOVE_TODO } from "../context/action.types"

const Todos = () => {

    const { todos, dispatch } = useContext(TodoContext)

    return (
        <ListGroup style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem"
        }}>
            {
                todos.map(todo => (
                    <ListGroup.Item
                        style={{
                            width: "60vw"
                        }}
                        key={todo.id}
                        variant="flush"
                        action >
                        {todo.title}
                        <span
                            onMouseEnter={e => (
                                e.target.style.color = "red"
                            )}
                            onMouseLeave={e => (
                                e.target.style.color = "black"
                            )}
                            style={{
                                position: "absolute",
                                right: "0.5rem"
                            }}
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_TODO,
                                    payload: todo.id
                                })
                            }}
                        >
                            <FaCheckDouble />
                        </span>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default Todos