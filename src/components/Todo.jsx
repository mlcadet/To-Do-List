import React, { useState } from 'react';
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({ id: null, value: '' });

    // Handle edit submission
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({ id: null, value: '' });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
                    <div onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <button onClick={() => removeTodo(todo.id)}>❌</button>
                    <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>✏️</button>
                </div>
            ))}
            {edit.id && <TodoForm onSubmit={submitUpdate} />}
        </>
    );
}

export default Todo;