/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";

function Hero() {
    // Membuat State movie
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && movie.videos.results[0].key;


    // async function fetchMovie() {
    //     const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    //     // Melakukan Fetch data dari API omdb.
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     // Update state movie dengan data movie (hasil fetch)
    //     setMovie(data);
    // }

    // Menjalankan useEffect
    useEffect(() => {
        getDetailMovie();
    }, []);

    // Mendapatkan 1 data dari trending movies
    async function getTrendingMovies() {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios(URL);
        console.log(response.data.results[0]);
        return response.data.results[0];
    }

    // Membuat fungsi untuk mendapatkan detail movies
    async function getDetailMovie() {
        // ambil id dari trending movie
        const trendingMovie = await getTrendingMovies();
        const id = trendingMovie.id;
        // fetch detail movie by id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
        console.log(response.data);

        setMovie(response.data);
    }

    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2>{movie.title}</h2>
                    <h3>{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button
                        as="a"
                        href={`https://www.youtube.com/watch?v=${idTrailer}`}
                        target="_blank"
                    >Watch</Button>
                </div>
                <div className="hero__right">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero;