import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const reducers = combineReducers({
    main: mainSlice,
})

export const store = configureStore({
    reducer: reducers
})