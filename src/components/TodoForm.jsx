import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
    const [input, setInput] = useState('');

    // Handle input change
    function handleChange(event) {
        setInput(event.target.value);
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        if (!input.trim()) return; // Prevent empty input
        onSubmit({ id: Date.now(), text: input, isComplete: false });
        setInput(''); // Clear input after submission
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                onChange={handleChange}  
                className="todo-input"
            />
            <button className="todo-button" type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;