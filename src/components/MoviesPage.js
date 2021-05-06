import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MoviesContainer from "./MoviesContainer";

const MoviesPage = ({ movies, onSearchChange, onNominate, nominations }) => {
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
      <SearchBar onSearchChange={handleSearch} searchedWord={searchedWord} />
      <MoviesContainer
        movies={movies}
        onNominate={onNominate}
        searchedWord={searchedWord}
        nominations={nominations}
      />
    </div>
  );
};

export default MoviesPage;
