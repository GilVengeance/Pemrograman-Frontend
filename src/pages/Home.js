// import Form from "../components/Form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { updateMovies } from "../features/moviesSlice/moviesSlice";

function Home({}) {
    const dispatch = useDispatch();
    const moviesLocal = useSelector((store) => store.movies.moviesLocal);

    useEffect(() => {
        dispatch(updateMovies(moviesLocal));
    }, [])

    return (
        <div>
            <Hero />
            <Movies title="Latest Movies" />
        </div>
    );

    // return <Counter />

}

export default Home;