import React from "react";
import NominationCard from "./NominationCard";

const NominationsContainer = ({ nominations, onDelete = { onDelete } }) => {
  const nominationCards = nominations.map((nomination) => {
    return (
      <NominationCard
        key={nomination.id}
        title={nomination.title}
        yearOfRelease={nomination.yearOfRelease}
        onDelete={onDelete}
      />
    );
  });

  return <div>{nominationCards}</div>;
};

export default NominationsContainer;
