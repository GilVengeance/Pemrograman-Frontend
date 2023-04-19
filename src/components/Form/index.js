import { useState } from "react";
import Alert from "../Alert";
import styles from "./Form.module.css";
import { nanoid } from "nanoid";

function Form(props) {
  // Destructing props: state movies
  const { provinces, setProvinces } = props;

  // Membuat state provinsi, status, & jumlah
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  // Membuat state: isProvinsiError, isStatusError, & isJumlahError
  const [isProvinsiError, setIsProvinsiError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  /**
   * Membuat fungsi handleProvinsi
   * Dijalankan ketika nilai input berubah
   */
  function handleProvinsi(e) {
    /**
     * Jalankan fungsi setProvinsi.
     * Set Provinsi nilai baru: input saat ini.
     */
    setProvinsi(e.target.value);
  }

  /**
   * Membuat fungsi handleStatus
   * Dijalankan ketika nilai input berubah
   */
  function handleStatus(e) {
    /**
     * Jalankan fungsi setStatus.
     * Set status nilai baru: input saat ini.
     */
    setStatus(e.target.value);
  }

  /**
   * Membuat fungsi handeJumlah
   * Dijalankan ketika nilai input berubah
   */
  function handleJumlah(e) {
    /**
     * Jalankan fungsi setJumlah.
     * Set jumlah nilai baru: input saat ini.
     */
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika provinsi kosong, set isProvinsiError true
    if (provinsi === "") {
      setIsProvinsiError(true);
    }
    // Jika status kosong, set isStatusError true
    else if (status === "") {
      setIsStatusError(true);
      setIsProvinsiError(false);
    }
    // Jika jumlah kosong, set isJumlahError true
    else if (jumlah === "") {
      setIsJumlahError(true);
      setIsStatusError(false);
    }
    // Jika tidak, maka push data form dan set error false
    else {
      let DataCovid = provinces.map((data) => ({ ...data }));
      const dataForUpdate = DataCovid.find((data) => data.kota === provinsi);
      if (dataForUpdate) {
        if (status === "kasus") {
          dataForUpdate.kasus += Number(jumlah);
        } else if (status === "sembuh") {
          dataForUpdate.sembuh += Number(jumlah);
        } else if (status === "dirawat") {
          dataForUpdate.dirawat += Number(jumlah);
        } else if (status === "meninggal") {
          dataForUpdate.meninggal += Number(jumlah);
        } else {
          if (status === "kasus") {
            DataCovid.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: Number(jumlah),
                sembuh: 0,
                meninggal: 0,
                dirawat: 0,
              },
            });
          } else if (status === "sembuh") {
            DataCovid.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: 0,
                sembuh: Number(jumlah),
                meninggal: 0,
                dirawat: 0,
              },
            });
          } else if (status === "dirawat") {
            DataCovid.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: 0,
                sembuh: 0,
                meninggal: 0,
                dirawat: Number(jumlah),
              },
            });
          } else if (status === "meninggal") {
            DataCovid.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: 0,
                sembuh: 0,
                meninggal: Number(jumlah),
                dirawat: 0,
              },
            });
          }
        }
      }
      setProvinces(DataCovid);

      setIsProvinsiError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={`${process.env.PUBLIC_URL}/img/undraw_Team_up_re_84ok.png`} alt="" />
        </div>

        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="provinsi">
                Provinsi
              </label>
              <select className={styles.form__input} id="provinsi" name="provinsi" onChange={handleProvinsi} value={provinsi}>
                <option value="" disabled>Pilih provinsi</option>
                {provinces.map((provi) => {
                  return <option value={provi.kota}>{provi.kota}</option>;
                })}
              </select>
              {isProvinsiError && <Alert>*Provinsi Wajib Dipilih</Alert>}
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="status">
                Status
              </label>
              <select className={styles.form__input} id="status" name="status" onChange={handleStatus} value={status}>
                <option value="" disabled>Pilih status</option>
                <option value="kasus">Positive</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>*Status Wajib Dipilih</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input id="jumlah" className={styles.form__input} type="number" name="jumlah" onChange={handleJumlah} value={jumlah} placeholder="Isi jumlah" />
              {isJumlahError && <Alert>*Jumlah Wajib Diisi</Alert>}
            </div>

            <div>
              <button className={styles.form__button}>Add Data</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
