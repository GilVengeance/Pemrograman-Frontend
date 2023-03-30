import styles from "./Form.module.css";

function Form() {
    return (
        <div className={styles.container}>
            <section className={styles.forms}>
                <div className={styles.forms__left}>
                    <img className={styles.forms__image} src="https://picsum.photos/536/354" alt="" />
                </div>
                <div className={styles.forms__right}>
                    <h2 className={styles.forms__title}>Add Movie</h2>
                    <form className={styles.form} action="">
                        <div className={styles.form__group}>
                            <label className={styles.form__inputLabel} htmlFor="title">Title</label><br />
                            <input className={styles.form__input} id="title" name="title" type="text" />
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__inputLabel} htmlFor="title">Title</label><br />
                            <input className={styles.form__input} id="title" name="title" type="text" />
                        </div>
                        <div className={styles.form__group}>
                            <button className={styles.form__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;