import { useState } from "react"

const ToDo = ({ todos, setTodos }) => {

  const [newTodo, setNewTodo] = useState("")

  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const trimmed = newTodo.trim()
    if (!trimmed) return

    const todoObj = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false
    }

    setTodos(prevData => [...prevData, todoObj])
    setNewTodo("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo..."
          value={newTodo}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ToDo
