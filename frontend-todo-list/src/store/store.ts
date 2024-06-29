import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todolist/todoSlicer.ts";

export const store = configureStore({
  reducer: {
    list: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
