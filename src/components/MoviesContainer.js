import React from "react"; 
import MovieCard from "./MovieCard.js";

const MoviesContainer = ({ movie }) => {
  
  const movieCard = <MovieCard 
    key={movie.id}
    title={movie.title}
    yearOfRelease={movie.yearOfRelease}

/>

  return (
    <div>
      {movieCard}
    </div>
  );
}

export default MoviesContainer;