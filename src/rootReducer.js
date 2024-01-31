import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./Features/TaskSlice"

const rootReducers = combineReducers({
    tasks:tasksReducer
});

export default rootReducers;