import React from "react";
import NominationCard from "./NominationCard";

const NominationsContainer = ({ nominations, onDelete }) => {
  if (nominations.length >= 5) {

  }

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
      {nominations.length > 0 && (<h3 className="ui header" id="header">
        Nominations
      </h3>)}
      {nominations.length >= 5 && (<h4 className="ui header" id="header">
        You've nominated your 5 movies
      </h4>)}
      <div>{nominationCards}</div>
    </div>
  );
};

export default NominationsContainer;
