import React from "react"; 
import NominationsContainer from "./NominationsContainer"

const NominationsPage = ({ nominatedMovies, onDelete }) => {
  
  return (
    <div id="nominationsPage">
      <NominationsContainer nominatedMovies={nominatedMovies} onDelete={onDelete} />
      
    </div>
  );
}

export default NominationsPage;