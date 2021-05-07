import React from "react";
import NominationCard from "./NominationCard";

const NominationsContainer = ({ nominatedMovies, onDelete }) => {
  if (nominatedMovies.length >= 5) {

  }

  const nominationCards = nominatedMovies.map((nominatedMovie) => {
    return (
      <NominationCard
        key={nominatedMovie.id}
        id={nominatedMovie.id}
        title={nominatedMovie.title}
        yearOfRelease={nominatedMovie.year_of_release}
        movieId={nominatedMovie.movie_id}
        onDelete={onDelete}
      />
    ); 
  });

  return (
    <div>
      <div>
      {nominatedMovies.length > 0 && (<h3 className="ui header title" id="header">
        Nominations
      </h3>)}
      {nominatedMovies.length >= 5 && (<h4 className="ui header" id="header">
        You've nominated your 5 movies
      </h4>)}
      </div>
      <div>{nominationCards}</div>
    </div>
  );
};

export default NominationsContainer;
