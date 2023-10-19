import React from "react";

const MoviesList = ({ movies, onThumbnailClick }) => {
  const movieImage = movies.map((movie, index) => (
    <div onClick={() => onThumbnailClick(movie)}>
      <img src={movie.Poster}></img>
      <div>
        <br />
        <h3 className="items-center">{movie.Title}</h3>
      </div>
    </div>
  ));

  return movieImage;
};

export default MoviesList;
