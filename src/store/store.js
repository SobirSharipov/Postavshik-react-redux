import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../reduse/contentSlice";
import { toDoListSlice } from "../reduse/toDoList";
import { toDoCartSlice } from "../reduse/todoCart";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todolist: toDoListSlice.reducer,
    todoCart: toDoCartSlice.reducer,
  },
});
