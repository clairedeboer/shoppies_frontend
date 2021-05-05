import React from "react"; 
import NominationsContainer from "./NominationsContainer"

const NominationsPage = ({ nominations, onDelete }) => {
  
  return (
    <div>
      <NominationsContainer nominations={nominations} onDelete={onDelete} />
      
    </div>
  );
}

export default NominationsPage;