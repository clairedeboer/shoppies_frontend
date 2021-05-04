import React from "react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, onNominate, searchedWord }) => {
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

  return (
    <div>
      <h3 className="ui header" id="header">Search Results For "{searchedWord}"</h3>
      <div>{movieCards}</div>
    
    </div>
  )  
};

export default MoviesContainer;
