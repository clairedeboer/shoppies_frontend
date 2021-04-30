import React, { useState } from "react"; 

const SearchBar = ({ onSearchChange }) => {
  const [searchedWord, setSearchedWord] = useState("");
  const handleSearchChange = (searchedWord) => {
    setSearchedWord(searchedWord);
    onSearchChange(searchedWord);
  };

  return (
    <div className="ui action fluid input" id="searchBar">
      <input
        type="text"
        placeholder="Search a movie title ..."
        value={searchedWord}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <button className="ui button">Search</button>
    </div>
  );
}

export default SearchBar;