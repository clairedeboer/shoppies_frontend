import React from "react";
import NominationCard from "./NominationCard";

const NominationsContainer = ({ nominations, onDelete }) => {
  const nominationCards = nominations.map((nomination) => {
    return (
      <NominationCard
        key={nomination.id}
        id={nomination.id}
        title={nomination.title}
        yearOfRelease={nomination.year_of_release}
        movieId={nomination.movie_id}
        onDelete={onDelete}
      />
    ); 
  });

  return (
    <div>
      <h3 className="ui header" id="header">
        Nominations
      </h3>
      <div>{nominationCards}</div>
    </div>
  );
};

export default NominationsContainer;
