import React, { useState, useEffect } from "react";
import "./App.css";
import MoviesPage from "./components/MoviesPage";
import NominationsPage from "./components/NominationsPage";

const OMDBAPIKEY = "8a111c74";
const apiUrl = "http://localhost:3000";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);

  const searchChange = (searchedWord) => {
    fetch(`http://www.omdbapi.com/?s=${searchedWord}&apikey=${OMDBAPIKEY}`)
      .then((response) => response.json())
      .then((omdbData) => {
        const transformedData = omdbData.Search?.map((movieObj) => {
          return {
            id: movieObj.imdbID + movieObj.Year,
            title: movieObj.Title,
            yearOfRelease: movieObj.Year,
          };
        });
        if (omdbData.Search) {
          setMovies(transformedData);
        }
      });
  };

  useEffect(() => {
    fetch(`${apiUrl}/nominatedMovies`)
      .then((response) => response.json())
      .then((nominatedMovieData) => setNominations(nominatedMovieData));
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
      .then((nominationData) =>
        setNominations([...nominations, nominationData])
      );
  };

  const deleteNomination = (id) => {
    // const toDeleteNomination = nominations.find(
    //   (nomination) => nomination.movie_id === movieId
    // );
    fetch(`${apiUrl}/nominations/${id}`, {
      method: "DELETE",
    }).then((nominationsData) => {
      setNominations([
        ...nominations,
        nominations.filter((nomination) => nomination.id !== id),
      ]);
    });
  };

  return (
    <div>
      <MoviesPage
        movies={movies}
        onSearchChange={searchChange}
        onNominate={createMovie}
      />
      <NominationsPage nominations={nominations} onDelete={deleteNomination} />
    </div>
  );
};

export default App;

//move nominations up to right of movie cards
//finish 4-6
