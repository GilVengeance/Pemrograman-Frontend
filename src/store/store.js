import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice/moviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer
    }
})

export default store;