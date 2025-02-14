import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";  // ✅ Ensures CSS is applied

function App() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <TodoForm />
        </div>
    );
}

export default App;
