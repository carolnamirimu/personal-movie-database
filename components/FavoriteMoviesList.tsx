import React from "react";

import MovieCard from "./MovieCard";

const FavoriteMoviesList = ({ movies, onThumbnailClick }) => {
  return (
    <div>
      <h2
        id="favoriteMoviesList"
        className="mx-1 sticky top-29 text-white text-2xl  top-40 bg-gray-500 p-5 mt-3"
      >
        My favorite Movies List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} onThumbnailClick={onThumbnailClick} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteMoviesList;
