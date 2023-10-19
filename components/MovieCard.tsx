import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="mt-3">
      <h3 className="text-white text-2xl sticky top-40 bg-indigo-600 p-5 mb-2">
        My favorite movies list
      </h3>
      <img src={movie.Poster}></img>
      <div>
        <br />
        <h3 className="items-center">{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
