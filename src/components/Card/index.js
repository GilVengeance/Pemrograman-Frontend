import styles from "./Card.module.css";

function Card(props) {
  const { indo } = props;
  const total = indo.total;
  //function format angka
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{indo.status}</h3>
      <a className={styles.card__detail} href={indo.detail}>
        <h2 style={{ color: indo.color }} className={styles.card__content}>
          {formatNumber(total)}
        </h2>
      </a>
    </div>
  );
}

export default Card;
