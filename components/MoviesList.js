import React from "react";
import MovieThumbnail from "./MovieThumbnail";

const MoviesList = ({ movies, onThumbnailClick }) => {
  const movieImage = movies.map((movie, index) => (
    <>
      <MovieThumbnail movie={movie} onThumbnailClick={onThumbnailClick} />
    </>
  ));

  return movieImage;
};

export default MoviesList;
