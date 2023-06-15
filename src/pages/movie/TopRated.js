import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTopRated();
    }, []);

    async function getTopRated() {
        const response = await axios(ENDPOINTS.TOPRATED);
        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <div>
            <Hero />
            <Movies title="Top Rated Movies" movies={movies} />
        </div>
    )
}

export default TopRatedMovie;