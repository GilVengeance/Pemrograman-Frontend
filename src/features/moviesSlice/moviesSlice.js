import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        deleteMovie() {},
    },
});

const moviesReducer = moviesSlice.reducer;
const {addMovie, deleteMovie} = moviesSlice.actions;

export default moviesReducer;
export {addMovie, deleteMovie}; 