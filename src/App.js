import React from 'react'; 
import './App.css';
import MoviesPage from "./components/MoviesPage.js";
import NominationsPage from "./components/NominationsPage.js"

const App = () => {

  const searchChange = (searchedWord) => {
    fetch(`http://www.omdbapi.com/?t=${searchedWord}&apikey=8a111c74`)
        .then((response) => response.json())
        .then((omdData) => console.log(omdData));
  }

  return (
    <div>
      <MoviesPage onSearchChange={searchChange}/>
      <NominationsPage />
      
    </div>
  );
}

export default App;
