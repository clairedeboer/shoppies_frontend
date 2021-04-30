import React from "react"; 
import SearchBar from "./SearchBar.js";
import MoviesContainer from "./MoviesContainer.js"

const MoviesPage = ({ movie, onSearchChange}) => {
  return (
    <div>
      <h1 className="ui header" id="header">The Shoppies</h1>
      <SearchBar onSearchChange={onSearchChange} />
      <MoviesContainer movie={movie} />
      
    </div>
  );
}

export default MoviesPage;