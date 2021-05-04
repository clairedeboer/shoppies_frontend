import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MoviesContainer from "./MoviesContainer";

const MoviesPage = ({ movies, onSearchChange, onNominate }) => {
  const [searchedWord, setSearchedWord] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchedWord(searchTerm);
    onSearchChange(searchTerm);
  };

  return (
    <div>
      <h1 className="ui header" id="header">
        The Shoppies
      </h1>
      <SearchBar onSearchChange={handleSearch} />
      <MoviesContainer
        movies={movies}
        onNominate={onNominate}
        searchedWord={searchedWord}
      />
    </div>
  );
};

export default MoviesPage;
