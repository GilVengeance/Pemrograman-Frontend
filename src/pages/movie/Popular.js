import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    // Simpan API & URL
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        const response = await axios(URL);
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