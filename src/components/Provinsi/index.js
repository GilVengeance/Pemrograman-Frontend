import styles from "./Provinsi.module.css";

function Provinsi(props) {
  // destructing data props
  const { provinces } = props;
  return (
    <div className={styles.container}>
      <div className={styles.provinsi}>
        <h1 className={styles.provinsi__title}>Provinsi</h1>
        <h3 className={styles.provinsi__caption}>Data Covid Berdasarkan Provinsi</h3>
        <table className={styles.provinsi__table}>
          <tr className={styles.thead}>
            <th>No</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Dirawat</th>
            <th>Meninggal</th>
          </tr>
          {provinces.map((provi) => {
            return (
              <tr className={styles.tbody} key={provi.id}>
                <td>{provi.id}</td>
                <td>{provi.kota}</td>
                <td>{provi.kasus}</td>
                <td>{provi.sembuh}</td>
                <td>{provi.dirawat}</td>
                <td>{provi.meninggal}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Provinsi;
