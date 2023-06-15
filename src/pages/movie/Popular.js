import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
    // Simpan API & URL
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <div>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </div>
    )
}

export default PopularMovie;