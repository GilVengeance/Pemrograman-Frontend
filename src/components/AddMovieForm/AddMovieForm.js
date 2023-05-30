import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import Button from "../UI/Button/Button";

// Menangkap props
function AddMovieForm(props) {
    /**
     * Ini hanya snippet(potongan) code.
     * Kode yang lainnya tetap sama.
     */

    // Destructing props: state movies
    const { movies, setMovies } = props;

    // Membuat object state data
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        type: "",
        poster: "",
    })

    // Membuat function handleChange
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const [formErrors, setFormErrors] = useState({
        isTitleError: false,
        isYearError: false,
        isTypeError: false,
        isPosterError: false
    });

    function handleError(input, boolean) {
        setFormErrors({
            ...formErrors,
            [input]: boolean,
        })
    }

    // destructing data
    const { title, year, type, poster } = formData;
    const { isTitleError, isYearError, isTypeError, isPosterError } = formErrors;

    function validate() {
        // Jika title kosong, set isTitleError true
        if (title === "") {
            handleError("isTitleError", "true");
        }
        // Jika year kosong, set isYearError true
        else if (year === "") {
            handleError("isYearError", "true");
        }
        // Jika year kosong, set isYearError true
        else if (type === "") {
            handleError("isTypeError", "true");
        }
        // Jika year kosong, set isYearError true
        else if (poster === "") {
            handleError("isPosterError", "true");
        }
        else {
            return true;
        }
    }

    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: year,
            type: type,
            poster: poster,
        };

        // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
        setMovies([...movies, movie]);

    }

    function handleSubmit(e) {
        /**
         * Mencegah perilaku default form.
         * Mencegah form direfresh ketika disubmit.
         */
        e.preventDefault();

        validate() && addMovie();
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="https://picsum.photos/536/354" alt="" />
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
                                // Memberikan value input: title
                                value={title}
                                // Memberikan event onChange
                                onChange={handleChange}
                            />
                            {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
                            {isTitleError && <Alert>*Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="year" className={styles.form__label}>
                                Year
                            </label>
                            <input
                                id="year"
                                className={styles.form__input}
                                type="number"
                                name="year"
                                // Memberikan value input: year
                                value={year}
                                // Memberikan event onChange
                                onChange={handleChange}
                            />
                            {/*
               * Menambahkan infline if: operator &&
               * Jika isYearError true maka render error
               */}
                            {isYearError && <Alert>*Year Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.form__group}>
                            <label className={styles.form__label} htmlFor="type">
                                Genre Movies:
                            </label>
                            <select className={styles.form__input} id="type" name="type" onChange={handleChange} value={type}>
                                <option value="">Pilih genre</option>
                                <option value="drama">Drama</option>
                                <option value="romance">Romance</option>
                                <option value="horror">Horror</option>
                                <option value="adventure">Adventure</option>
                            </select>

                            {/*
               * Menambahkan infline if: operator &&
               * Jika isTypeError true maka render error
               */}
                            {isTypeError && <Alert>*Type Wajib Dipilih</Alert>}
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="poster" className={styles.form__label}>
                                Link Poster
                            </label>
                            <input
                                id="poster"
                                className={styles.form__input}
                                type="text"
                                name="poster"
                                // Memberikan value input: poster
                                value={poster}
                                // Memberikan event onChange
                                onChange={handleChange}
                            />
                            {/*
               * Menambahkan infline if: operator &&
               * Jika isPosterError true maka render error
               */}
                            {isPosterError && <Alert>*Link Poster Wajib Diisi</Alert>}
                        </div>

                        <div>
                            <Button full size="lg">Add Movie</Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;
