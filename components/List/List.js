import { Container, Sentinel } from "./List.elements";
import Cardmovies from "../Cardmovie/Cardmovie";
import { useState, useEffect } from "react";
import { GenresList } from "../index";
import { getMovies } from "../../services/index";

function List(props) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterGerens, setFilterGenres] = useState([0]);

  async function loadMovies(currentPage) {
    const freshMovies = await getMovies(currentPage);
    setMovies((prevMovies) => [...prevMovies, ...freshMovies]);
  }

  useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage, filterGerens]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinel"));
    return () => intersectionObserver.disconnect();
  }, []);

  function filterMovies(movies) {
    if (filterGerens[0] === 0) return movies;
    return movies.filter((m) => {
      return m.genre_ids && m.genre_ids.includes(filterGerens[0]);
    });
  }

  function getGenresFilter(filter){
    setFilterGenres(filter)
  }

  return (
    <Container>
      <GenresList 
        dark={props.dark} 
        //datagenres={genres} 
        genresFilter={getGenresFilter}
      />

      {filterMovies(movies).map((movie) => (
        <Cardmovies
          key={movie.id}
          id={movie.id}
          title={movie.title}
          post={movie.poster_path}
          dark={props.dark}
        />
      ))}
      <Sentinel id="sentinel" />
    </Container>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      access_key: process.env.ACCESS_KEY,
    },
  };
}

export default List;
