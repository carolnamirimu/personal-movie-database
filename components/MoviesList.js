
import React from "react";

const MoviesList = ({movies}) => {
  const movieImage = movies.map((movie, index) => (
    <div>
      <img src={movie.Poster}></img>
    </div>
  ));

  return  movieImage ;
};

export default MoviesList;
