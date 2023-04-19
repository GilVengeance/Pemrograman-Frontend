import { useState } from "react";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import Form from "../components/Form";

import data from "../utils/constants/provinces";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <Global />
      <Provinsi provinces={provinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
