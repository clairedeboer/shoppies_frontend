import React from "react";
import MoviesContainer from "./MoviesContainer";

const MoviesPage = ({ movies, searchedWord, onNominate, nominatedMovies }) => {
  return (
    <div id="moviesPage">
      <MoviesContainer
        movies={movies}
        onNominate={onNominate}
        searchedWord={searchedWord}
        nominatedMovies={nominatedMovies}
      />
    </div>
  );
};

export default MoviesPage;
