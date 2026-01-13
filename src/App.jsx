import { useState } from "react"


function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="container">
      <h1>My Todo List</h1>
      <ToDo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
