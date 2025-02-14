import React, { useState } from "react";

function TodoForm({ addTodo }) {  // ✅ Ensure addTodo is received as a prop
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!input.trim()) return; // Prevent empty input
    addTodo(input);  // ✅ Calls the function passed from TodoApp
    setInput(""); // ✅ Clears input after adding
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        className="todo-input"
      />
      <button className="todo-button" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;