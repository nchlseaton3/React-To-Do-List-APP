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

  const toggleTodo = todoId => {
    setTodos(prevData =>
      prevData.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = todoId => {
    setTodos(prevData =>
      prevData.filter(todo => todo.id !== todoId)
    )
  }

  const remainingCount = todos.filter(todo => !todo.completed).length

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

      <p>Remaining: {remainingCount}</p>

      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}
              </span>

              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default ToDo
