import React from "react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, onNominate }) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        title={movie.title}
        yearOfRelease={movie.yearOfRelease}
        onNominate={onNominate}
      />
    );
  });

  return <div>{movieCards}</div>;
};

export default MoviesContainer;
