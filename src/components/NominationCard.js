import React from "react"; 

const NominationCard = () => {
  return (
    <div className="ui cards" id="nominationsCard">
      <div className="card">
        <div className="content">
        <div className="header">Nominations</div>
          <div className="description">Title: </div>
            <div className="description">Released: </div>
          </div>
        <div className="ui bottom attached button">
          <i className="minus icon"></i>
          Remove
        </div>
      </div>
  </div>
  );
}

export default NominationCard;