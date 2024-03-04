import { createStore } from "redux";
import { tasksReducer } from "./tasksReducer";


export const store =  createStore(tasksReducer);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
