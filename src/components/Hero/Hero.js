/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import StyledHero from "./Hero.styled";

function Hero() {
    // Membuat State movie
    const [movie, setMovie] = useState("");

    async function fetchMovie() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        // Melakukan Fetch data dari API omdb.
        const response = await fetch(url);
        const data = await response.json();

        // Update state movie dengan data movie (hasil fetch)
        setMovie(data);
    }

    // Menjalankan useEffect
    useEffect(() => {
        fetchMovie();
    }, []);

    // Tampilkan state movie.
    console.log(movie);
    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button>Watch</Button>
                </div>
                <div className="hero__right">
                    <img
                        src="https://picsum.photos/536/354"
                        alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero;