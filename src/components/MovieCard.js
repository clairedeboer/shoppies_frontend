import React from "react"; 

const MovieCard = ({ title, yearOfRelease, nominatedStatus, onNominate }) => {
    
  return (
    <div className="ui cards" id="movieCard">
      <div className="card">
        <div className="content">
          <div className="description">Title: {title}</div>
            <div className="description">Released: {yearOfRelease}</div>
          </div>
          {!nominatedStatus? (<div className="ui bottom attached button" onClick={(event)=>onNominate(title, yearOfRelease)}>
            <i className="add icon"></i>
            Nominate
          </div>) : (<div className="ui bottom attached button">Already Nominated</div>)}
        </div>
    </div>
    
  );
}

export default MovieCard;