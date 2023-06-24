/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice/moviesSlice";

function TopRatedMovie() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRated();
    }, []);

    async function getTopRated() {
        const response = await axios(ENDPOINTS.TOPRATED);
        dispatch(updateMovies(response.data.results));
    }

    return (
        <div>
            <Hero />
            <Movies title="Top Rated Movies" />
        </div>
    )
}

export default TopRatedMovie;