import styles from "./Global.module.css";
import Card from "../Card";
import dataIndonesia from "../../utils/constants/indonesia";

function Global() {
  // destructing data props
  const indonesia = dataIndonesia;

  return (
    <div className={styles.container}>
      <section className={styles.global}>
        <h1 className={styles.global__title}>Global</h1>
        <h3 className={styles.global__caption}>Data Covid Berdasarkan Global</h3>
        <div className={styles.global__container}>
          {indonesia.map((indo) => {
            return <Card indo={indo} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Global;
