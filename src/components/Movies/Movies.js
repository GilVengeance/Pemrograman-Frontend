import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import Button from "../UI/Button/Button";

function Movies(props) {
    // Destructing props: state movies
    const { movies, setMovies } = props;

    function handleClick() {
        const movie = {
            id: nanoid(),
            title: "Jigsaw Spiral",
            year: 2021,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

        /**
         * Update state movies: setMovies
         * Melakukan teknik spread untuk copy dan merge array
         */
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
                    <Button size="lg" variant="primary" onClick={handleClick}>Add Movie</Button>
                </section>
            </div>
        </div>
    );
}

export default Movies;