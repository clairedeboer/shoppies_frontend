import React from "react"; 
import SearchBar from "./components/SearchBar.js";
import MoviesContainer from "./components/MoviesContainer.js"

const MoviesPage = () => {
  return (
    <div>
      <SearchBar />
      <MoviesContainer />
      
    </div>
  );
}

export default MoviesPage;