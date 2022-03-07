import { useState, useEffect } from "react";

import MovieItem from "./MovieItem";

const MovieContainer = ({ movies, rating, input }) => {
  const [filtredMovies, setFiltredMovies] = useState(movies);

  useEffect(() => {
    setFiltredMovies(
      movies.filter((movie) => {
        return (
          movie.name
            .trim()
            .toLowerCase()
            .includes(input.trim().toLowerCase()) && movie.rating >= rating
        );
      })
    );
  }, [rating, input, movies]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto auto",
        width: "70%",
      }}
    >
      <MovieItem filtredMovies={filtredMovies} />
    </div>
  );
};

export default MovieContainer;
