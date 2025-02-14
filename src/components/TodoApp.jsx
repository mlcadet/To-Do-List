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
    dispatch(actions.addTodo(todoText));
  }

  function removeTodo(todoId) {
    dispatch(actions.removeTodo(todoId));
  }

  function completeTodo(todoId) {
    dispatch(actions.completeTodo(todoId));
  }

  function updateTodo(id, newText) {
    dispatch(actions.updateTodo({ id, newText }));
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoApp;