import React from "react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, onNominate, searchedWord, nominations }) => {

  const moviesWithNominationStatus = movies.map((movie) => {
    const nominated = nominations.find((nomination) => nomination.title === movie.title && nomination.year_of_release === movie.yearOfRelease)
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
        nominations={nominations}
      />
    );
  });

  return (
    <div>
      {searchedWord && (<h3 className="ui header" id="header">
        Search Results For "{searchedWord}"
      </h3>)}
      <div>{movieCards}</div>
    </div>
  );
};

export default MoviesContainer;
