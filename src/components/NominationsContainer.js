import React from "react";
import NominationCard from "./NominationCard";

const NominationsContainer = ({ nominatedMovies, onDelete }) => {
  if (!nominatedMovies.length) {
    return null;
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
      <h3 className="ui header" id="title">
        Nominations
        <span id="span">{nominatedMovies.length >= 5 && " You've nominated your 5 movies"}</span>
      </h3>
      <div>{nominationCards}</div>
    </div>
  );
};

export default NominationsContainer;
