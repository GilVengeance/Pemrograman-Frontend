import styles from "./List.module.css";

function List() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Global</li>
      <li className={styles.item}>Indonesia</li>
      <li className={styles.item}>Provinsi</li>
      <li className={styles.item}>About</li>
    </ul>
  );
}

export default List;
