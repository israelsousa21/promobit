import { Container, Sentinel } from "./List.elements";
import Cardmovies from "../Cardmovie/Cardmovie";
import { useState, useEffect } from "react";
import { GenresList } from "../index";
import { getMovies, getGenres } from "../../services/index";

function List(props) {
  //const [filter, setFilter] = useState([0, 'ALL']);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function loadMovies() {
    const freshMovies = await getMovies(currentPage);
    setMovies((prevMovies) => [...prevMovies, ...freshMovies]);
  }

  async function loadGenres() {
    const allGenres = await getGenres();
    setGenres(allGenres);
  }

  useEffect(() => {
    loadMovies();
  }, [currentPage]);

  useEffect(() => {
    loadGenres();

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });

    intersectionObserver.observe(document.querySelector("#sentinel"));
    return () => intersectionObserver.disconnect();
  }, []);

  // useEffect(() => {

  //   }, []);

  // const filterMovies = (getMovies) => {
  //     if (filter[0] === 0) return movies;
  //     return movies.filter((m) => {
  //       return m.genre_ids && m.genre_ids.includes(filter[0]);
  //     });
  //   };

  function filterMovies(movies) {
    if (filter[0] === 0) return movies;
    return movies.filter((m) => {
      return m.genre_ids && m.genre_ids.includes(filter[0]);
    });
  }

  return (
    <Container>
      <GenresList dark={props.dark} genres={genres} />
      {movies.map((movie) => (
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
