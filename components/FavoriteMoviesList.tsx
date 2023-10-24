import React from "react";

import MovieCard from "./MovieCard";

const FavoriteMoviesList = ({ movies, onThumbnailClick }) => {
  return (
    <div>
      <h2 className="text-white text-2xl  top-40 bg-indigo-600 p-5 mb-2 sticky top-4">
        My favorite Movies List
      </h2>
      <div className="w-3/6">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} onThumbnailClick={onThumbnailClick} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteMoviesList;
