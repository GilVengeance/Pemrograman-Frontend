import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";


function AddMovieForm(props) {
    // Destructing props: state movies
    const { movies, setMovies } = props;

    // State title dan date
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [poster, setPoster] = useState("");
    const [type, setGenre] = useState("");

    // State: isTitleError, isDateError
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);
    const [isGenreError, setIsGenreError] = useState(false);

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handlePoster(e) {
        setPoster(e.target.value);
    }

    function handleGenre(e) {
        setGenre(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (title === "") {
            setIsTitleError(true);
        } else if (date === "") {
            setIsDateError(true);
            setIsTitleError(false);
        } else if (poster === "") {
            setIsPosterError(true);
            setIsDateError(false);
        } else if (type === "") {
            setIsGenreError(true);
            setIsPosterError(false);
        } else {
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: type,
                poster: poster,
            };

            setMovies([...movies, movie]);

            setIsTitleError(false);
            setIsDateError(false);
            setIsPosterError(false);
            setIsGenreError(false);
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://picsum.photos/536/354"
                        alt=""
                    />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="title" className={styles.form__label}>
                                Title
                            </label>
                            <input
                                id="title"
                                className={styles.form__input}
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleTitle}
                            />

                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="date" className={styles.form__label}>
                                Date
                            </label>
                            <input
                                id="date"
                                className={styles.form__input}
                                type="number"
                                name="date"
                                value={date}
                                onChange={handleDate}
                            />

                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="img" className={styles.form__label}>
                                Link Gambar
                            </label>
                            <input
                                id="img"
                                className={styles.form__input}
                                type="text"
                                name="img"
                                value={poster}
                                onChange={handlePoster}
                            />

                            {isPosterError && <Alert>Link Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="genre" className={styles.form__label}>
                                Genre
                            </label>
                            <select name="" id="" onChange={handleGenre} value={type} className={styles.form__input}>
                                <option value="" disabled selected>Select Your Option</option>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Romance">Romance</option>
                            </select>

                            {isGenreError && <Alert>Genre Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <button className={styles.form__button}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;