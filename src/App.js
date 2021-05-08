import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MoviesPage from "./components/MoviesPage";
import NominationsPage from "./components/NominationsPage";

const OMDBAPIKEY = "8a111c74";
const apiUrl = "http://localhost:3000";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");

  const searchChange = (searchTerm) => {
    setSearchedWord(searchTerm);
    if (searchTerm) {
      fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDBAPIKEY}`)
        .then((response) => response.json())
        .then((omdbData) => {
          const transformedData = omdbData.Search?.map((movieObj, index) => {
            return {
              id: movieObj.imdbID + index,
              title: movieObj.Title,
              yearOfRelease: movieObj.Year,
            };
          });
          if (omdbData.Search) {
            setMovies(transformedData);
          } else {
            setMovies([]);
          }
        });
      }
    // } else {
    //   setMovies([]);
    // }
  };

  useEffect(() => {
    fetch(`${apiUrl}/nominatedMovies`)
      .then((response) => response.json())
      .then((nominatedMovieData) => setNominatedMovies(nominatedMovieData));
  }, []);

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
    })
      .then((response) => response.json())
      .then((movieData) => {
        setMovies([...movies, movieData]);
        createNomination(movieData);
      });
  };

  const createNomination = (newMovieObj) => {
    return fetch(`${apiUrl}/nominations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        movie_id: newMovieObj.id,
        nomination_status: true,
      }),
    })
      .then((response) => response.json())
      .then((nominatedMovieData) => {
        setNominatedMovies([...nominatedMovies, newMovieObj]);
      });
  };

  const deleteNomination = (id) => {
    fetch(`${apiUrl}/nominations/${id}`, {
      method: "DELETE",
    }).then((nominatedMoviesData) => {
      setNominatedMovies(
        nominatedMovies.filter((nominatedMovie) => nominatedMovie.id !== id)
      );
    });
  };

  return (
    <div>
      <div>
        <SearchBar onSearchChange={searchChange} searchedWord={searchedWord} />
      </div>
      <div className="ui two column grid">
        <MoviesPage
          movies={movies}
          onNominate={createMovie}
          nominatedMovies={nominatedMovies}
          searchedWord={searchedWord}
        />
        <NominationsPage
          nominatedMovies={nominatedMovies}
          onDelete={deleteNomination}
        />
      </div>
    </div>
  );
};

export default App;

//isn't clearing searched movies when you backspace, only on refresh
//Readme
//decided to use backend because I wanted data to persist
//URL that website is deployed to
//used React
