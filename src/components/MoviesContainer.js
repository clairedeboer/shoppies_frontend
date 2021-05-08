import React from "react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, onNominate, searchedWord, nominatedMovies }) => {
  const moviesWithNominationStatus = movies.map((movie) => {
    const nominated = nominatedMovies.find((nominatedMovie) => nominatedMovie.title === movie.title && nominatedMovie.year_of_release === movie.yearOfRelease)
    return {...movie, nominatedStatus: !!nominated}
  })

  const movieCards = moviesWithNominationStatus.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        title={movie.title}
        yearOfRelease={movie.yearOfRelease}
        nominatedStatus={movie.nominatedStatus}
        onNominate={onNominate}
        nominatedMovies={nominatedMovies}
      />
    );
  });

  return (
    <div>
      {searchedWord && (<h3 className="ui header" id="title">
        Search Results For "{searchedWord}"
      </h3>)}
      <div>{movieCards}</div>
    </div>
  );
};

export default MoviesContainer;
