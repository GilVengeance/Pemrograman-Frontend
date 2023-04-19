import styles from "./Navbar.module.css";
import List from "../List";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h1 className={styles.navbar__title}>Covid ID</h1>
        </div>
        <div>
          <List />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
