import React, { useReducer } from "react";
import TodoForm from "./Components/TodoForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer"
import { Container } from "react-bootstrap";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{
      todos, dispatch
    }}>
      <Container fluid>
        <h1 className="text-center my-3 text-primary">Todo list with React context and reducer</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  )
}

export default App;