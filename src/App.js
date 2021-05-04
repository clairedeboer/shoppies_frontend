import React, { useState } from 'react'; 
import './App.css';
import MoviesPage from "./components/MoviesPage";
import NominationsPage from "./components/NominationsPage"

const OMDBAPIKEY = "8a111c74";
const apiUrl = "http://localhost:3000"

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])

  const searchChange = (searchedWord) => {
    fetch(`http://www.omdbapi.com/?s=${searchedWord}&apikey=${OMDBAPIKEY}`)
        .then((response) => response.json())
        .then((omdData) => {
          console.log(omdData.Search)
            const transformedData =  omdData.Search?.map((movieObj) => {
              return {
                title: movieObj.Title, 
                yearOfRelease: movieObj.Released
              }
            })
            
            if (omdData.Title?.toLowerCase().includes(searchedWord.toLowerCase())) {
              // const filteredMovies = movies.filter((movie) => {
              //   return movie.title?.toLowerCase().includes(searchedWord.toLowerCase())
              // })
              setMovies([...movies, transformedData])
            }
        });
      }

  const createMovie = (title, yearOfRelease) => {
    return fetch(`${apiUrl}/movies`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({
        title: title, 
        year_of_release: yearOfRelease, 
      }), 
    }).then((response) => response.json())
      .then((movieData) => {
        setMovies([...movies, movieData])
        createNomination(movieData)
      })
  }

  console.log('movies', movies)

  const createNomination = (newMovieObj) => {
    return fetch(`${apiUrl}/nominations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1, 
        movie_id: newMovieObj.id, 
        nomination_status: true
      }),
    }).then((response) => response.json())
      .then((nominationData) => setNominations([...nominations, nominationData]))
  };
  
console.log('nominations', nominations)

  const deleteNomination = (title, yearOfRelease) => {
    // const toDeleteNomination = nominations.find(
    //   (nomination) => nomination.title === title
    // );
    // fetch(`http://www.omdbapi.com/?t=${title}&apikey=8a111c74`, {
    //   method: "DELETE",
    // }).then((nominationsData) => setNominations(nominationsData));
  };

  return (
    <div>
      <MoviesPage movies={movies} onSearchChange={searchChange} onNominate={createMovie}/>
      <NominationsPage nominations={nominations} onDelete={deleteNomination} />
      
    </div>
  );
}

export default App;

//should I be getting more than one search result? 
//change Search Results for searchedWord instead of title
//reformat year released
//move nominations up to right of movie cards
//finish 4-6
