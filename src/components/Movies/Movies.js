import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import Movie from "../Movie/Movie";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
    const [movies, setMovies] = useState(data);

    function handleClick() {
        const movie = {
            id: nanoid(6),
            title: "Trolls",
            year: 2016,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

        setMovies([...movies, movie]);
    }

    return (
        <div>
            <div className={styles.container}>
                <section className={styles.movies}>
                    <h2 className={styles.movies__title}>Latest Movies</h2>
                    <div className={styles.movie__container}>
                        {movies.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />;
                        })}
                    </div>
                    <button className={styles.movies__button} onClick={handleClick}>Add Movie</button>
                </section>
            </div>
        </div>
    );
}

export default Movies;