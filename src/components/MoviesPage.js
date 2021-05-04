import React from "react"; 
import SearchBar from "./SearchBar";
import MoviesContainer from "./MoviesContainer"

const MoviesPage = ({ movies, onSearchChange, onNominate }) => {
  return (
    <div>
      <h1 className="ui header" id="header">The Shoppies</h1>
      <SearchBar onSearchChange={onSearchChange} />
      <MoviesContainer movies={movies} onNominate={onNominate}/>
      
    </div>
  );
}

export default MoviesPage;