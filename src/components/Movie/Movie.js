import StyledMovie from "./Movie.styled";

// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img
        src={movie.poster ||
          `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        }
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p className="movie__date ">{movie.year || movie.release_date.substring(0,4)}</p>
    </StyledMovie>
  );
}

export default Movie;