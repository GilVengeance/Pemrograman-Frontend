import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlaying();
    }, []);

    async function getNowPlaying() {
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <div>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </div>
    )
}

export default NowPlaying;