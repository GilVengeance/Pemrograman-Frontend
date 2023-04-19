import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <h3 className={styles.hero__caption}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>Lihat data Covid di seluruh Indonesia dalam waktu real-time.</p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={`${process.env.PUBLIC_URL}/img/undraw_Doctors_p6aq.png`} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
