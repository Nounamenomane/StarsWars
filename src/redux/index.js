import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import FavoriteReducers from './FavoriteReducers';
import { setLocalStorage } from "../utils/localStorage";

const reducers = combineReducers({
    main: mainSlice,
    favorite: FavoriteReducers

})

export const store = configureStore({
    reducer: reducers
})

store.subscribe(() => {
    setLocalStorage('store', store.getState().favorite)
})