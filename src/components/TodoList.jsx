import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // Function to add todos
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;
        setTodos([todo, ...todos]);
    };

    // Function to update todos
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) return;
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // Function to remove todos
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Function to mark todo as complete
    const completeTodo = id => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ));
    };

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    );
}

export default TodoList;