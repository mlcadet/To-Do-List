import { ImmerReducer, createReducerFunction } from "immer-reducer";

// Initial state
const initialState = {
  todos: [],  
};

// Reducer class
class TodoReducer extends ImmerReducer {
  addTodo(todo) {
    this.draftState.todos.push(todo);
  }

  removeTodo(index) {
    this.draftState.todos.splice(index, 1);
  }

  toggleComplete(index) {
    this.draftState.todos[index].completed = !this.draftState.todos[index].completed;
  }
}

// Create and export reducer function
export default createReducerFunction(TodoReducer, initialState);