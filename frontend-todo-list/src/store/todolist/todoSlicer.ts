import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoList {
  list: Todo[];
}

const initialState: TodoList = {
  list: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos")!)
    : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    toggleComplete: (state, action) => {
      // const todo = state.list.find((todo) => todo.id === action.payload);
      // if (todo) {
      //   todo.completed = !todo.completed;
      // }
      state.list = state.list.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
  },
});
export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
