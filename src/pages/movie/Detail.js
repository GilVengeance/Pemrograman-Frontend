import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
    }, [params.id]);

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATION(params.id));
        setMovies(response.data.results)
    }

    console.log(movies);

    return (
        <>
            <DetailMovie />
            <Movies movies={movies} />
        </>
    )
}

export default Detail;