import React from "react"; 

const MovieCard = ({ title, yearOfRelease }) => {
  return (
    <div className="ui cards" id="movieCard">
      <div className="card">
        <div className="content">
        <div className="header">Search Results For {title}</div>
          <div className="description">Title: {title}</div>
            <div className="description">Released: {yearOfRelease}</div>
          </div>
        <div className="ui bottom attached button">
          <i className="add icon"></i>
          Nominate
        </div>
      </div>
  </div>
    
  );
}

export default MovieCard;