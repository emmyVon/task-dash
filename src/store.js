import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducer";

export default configureStore({
    reducer:rootReducers
})