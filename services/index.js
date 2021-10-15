const config = {
  url: "https://api.themoviedb.org/3",
  api_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
  language: "pt-BR",
};

export const getMovies = async (page = 1) => {
  return await fetch(
    `${config.url}/movie/popular/?api_key=${config.api_key}&language=${config.language}&page=${page}`
  )
    .then((response) => response.json())
    .then(function (data) {
      return data.results;
    })
    .catch((error) => console.log("Error Movies:", error));
};

export const getGenres = async () => {
  return await fetch(
    `${config.url}/genre/movie/list?api_key=${config.api_key}&language=${config.language}`
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log('Data Genress: '+data.genres);
      return data.genres;
    })
    .catch((error) => console.log("Error Genres", error));
};

export const getMovie = async (idMovie) => {
  return await fetch(
    `${config.url}/movie/${idMovie}?api_key=${config.api_key}&language=${config.language}`
  )
    .then((response) => response.json())
    .then(function (data) {
      return data;
    })
    .catch((error) => console.log("Error Genres", error));
};
