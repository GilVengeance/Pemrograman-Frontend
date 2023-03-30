import styles from "./Movies.module.css";

function Movies() {
    return (
        <div className={styles.movies}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movie</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={styles.movie__title}>Spongebob Squarepants</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={styles.movie__title}>John Wick 4</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={styles.movie__title}>Para Pencari Janda</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={styles.movie__title}>Para Pencari Janda</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={styles.movie__title}>Para Pencari Janda</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={styles.movie__title}>Para Pencari Janda</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Movies;