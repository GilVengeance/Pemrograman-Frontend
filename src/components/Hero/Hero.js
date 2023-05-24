/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

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
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>{movie.Genre}</h3>
                    <p className={styles.hero__description}>{movie.Plot}</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src={movie.Poster}
                        alt={movie.Title} />
                </div>
            </section>
        </div>
    )
}

export default Hero;