import { ImmerReducer, createReducerFunction } from "immer-reducer";

const initialState = {
  todos: [],
};

class TodoReducer extends ImmerReducer {
  addTodo(todoText) {
    console.log("🛠 Reducer adding todo:", todoText); // ✅ Debugging log
    this.draftState.todos.push({ id: Date.now(), text: todoText, isComplete: false });
  }

  removeTodo(todoId) {
    this.draftState.todos = this.draftState.todos.filter(todo => todo.id !== todoId);
  }

  completeTodo(todoId) {
    this.draftState.todos = this.draftState.todos.map(todo =>
      todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
    );
  }
}

export default createReducerFunction(TodoReducer, initialState);