import React from "react"; 

const NominationCard = ({ title, yearOfRelease, id, onDelete }) => {
  
  return (
    <div className="ui cards" id="nominationsCard">
      <div className="card">
        <div className="content">
          <div className="description">Title: {title}</div>
            <div className="description">Released: {yearOfRelease}</div>
          </div>
        <div className="ui bottom attached button" onClick={(event)=>onDelete(id)}>
          <i className="minus icon"></i>
          Remove
        </div>
      </div>
  </div>
  );
}

export default NominationCard;