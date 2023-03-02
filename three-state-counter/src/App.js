import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header>
        <h1>Counter App using State/hooks</h1>
      </header>
      <h2>Value of counter is {counter}.</h2>
      <button className="button" onClick={() => counter < 10 ? setCounter(counter + 1) : ""}>Increment by 1</button>
      <button className="button" onClick={() => counter > 0 ? setCounter(counter - 1) : ""}>Decrement by 1</button>
      <button className="button" onClick={() => setCounter(0)}>Reset to 0</button>
    </div>
  )
}

export default App