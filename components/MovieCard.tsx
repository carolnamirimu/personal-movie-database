import React from "react";
import MovieRating from "./MovieRating";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-row mt-3 gap-3">
      <img className="w-36" src={movie.Poster} />
      <div className="">
        <h3 className="items-center">{movie.Title}</h3>
        <p>{movie.Year}</p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="blank">
          IMDB
        </a>
        <MovieRating rating={4} />
      </div>
    </div>
  );
};

export default MovieCard;
