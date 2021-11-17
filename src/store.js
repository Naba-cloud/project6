import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/TodoApp/todoSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})
