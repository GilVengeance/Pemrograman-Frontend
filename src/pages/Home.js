import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

function Main() {
    return (
        <main>
            <Hero />
            <Movies />
            <Form />
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