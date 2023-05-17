import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Index";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<TopRatedMovie />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App;
