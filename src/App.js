import React, { useState } from 'react'; 
import './App.css';
import MoviesPage from "./components/MoviesPage.js";
import NominationsPage from "./components/NominationsPage.js"

const App = () => {
  const [movie, setMovie] = useState({})

  const searchChange = (searchedWord) => {
    fetch(`http://www.omdbapi.com/?t=${searchedWord}&apikey=8a111c74`)
        .then((response) => response.json())
        .then((omdData) => {
            const transformedData =  {
              title: omdData.Title, 
              yearOfRelease: omdData.Released
            }
          setMovie(transformedData)
        });
      }

  return (
    <div>
      <MoviesPage movie={movie} onSearchChange={searchChange} />
      <NominationsPage />
      
    </div>
  );
}

export default App;

//should I be getting more than one search result? 
//change Search Results for searchedWord instead of title
//reformat year released
//finish 4-6
