import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
// import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import data from "../utils/constants/data";
import { useState } from "react";

function Main() {
    const [movies, setMovies] = useState(data);
    return (
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </main>
    )
}

function Home() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;