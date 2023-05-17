import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>The Walking Dead</h2>
                    <h3 className={styles.hero__genre}>Genre: Horor, Serial Drama, Zombie Apocalypse</h3>
                    <p className={styles.hero__description}>
                        Sheriff Deputy Rick Grimes gets shot in combat and awakens to a zombie apocalypse. He meets a group on the outskirts of Atlanta and, soon, becomes their leader. The walkers (what they call zombies) feed on the living, so they try to move to different and safer locations to survive.
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/600/400" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Hero;