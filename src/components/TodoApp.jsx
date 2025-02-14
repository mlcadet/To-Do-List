import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActionCreators } from "immer-reducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoReducer from "../redux/reducer";

const actions = createActionCreators(TodoReducer);

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function addTodo(todoText) {
    dispatch(actions.addTodo({ text: todoText, completed: false }));
  }

  function toggleTodo(index) {
    dispatch(actions.toggleComplete(index));
  }

  function removeTodo(index) {
    dispatch(actions.removeTodo(index));
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      {/* ✅ Pass addTodo as a prop */}
      <TodoForm addTodo={addTodo} />  
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoApp;