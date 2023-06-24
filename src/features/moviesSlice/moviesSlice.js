import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
        moviesLocal: data,
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        // Membuat reducer updateMovies
        updateMovies(state, action) {
            state.movies = action.payload;
        },
    },
});

const moviesReducer = moviesSlice.reducer;
const {addMovie, updateMovies} = moviesSlice.actions;

export default moviesReducer;
export {addMovie, updateMovies}; 