import React from "react"; 

const SearchBar = ({ onSearchChange, searchedWord }) => {
  
  return (
    <div className="ui action fluid input" id="searchBar">
      <input
        type="text"
        placeholder="Search a movie title ..."
        value={searchedWord}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <button className="ui button">Search</button>
    </div>
  );
}

export default SearchBar;