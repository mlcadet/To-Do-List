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
    console.log("📢 Dispatching ADD_TODO:", todoText);
    dispatch(actions.addTodo(todoText));
  }

  function removeTodo(todoId) {
    dispatch(actions.removeTodo(todoId));
  }

  function completeTodo(todoId) {
    dispatch(actions.completeTodo(todoId));
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoApp;