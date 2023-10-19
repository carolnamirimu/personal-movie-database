import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster}></img>
      <div>
        <br />
        <h3 className="items-center">{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
