import styles from "./Footer.module.css";
import List from "../List";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div className={styles.footer__brand}>
          <h1>Covid ID</h1>
          <p>Made by GilVengeance</p>
        </div>
        <div>
          <List />
        </div>
      </nav>
    </div>
  );
}

export default Footer;
