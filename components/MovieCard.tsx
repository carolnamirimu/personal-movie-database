import React from "react";
import MovieNotes from "./MovieNotes";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex sm:flex-row flex-col m-2 p-2 gap-3 text-black bg-white rounded-md">
      <div className=" ">
        <img src={movie.Poster} />
      </div>
      <div className="sm:w-full ">
        <div className="items-center align-middle ">
          <label className="font-bold px-2 flex-wrap">Title: </label>
          {movie.Title}
        </div>
        <p>
          <label className="font-bold px-2">Date of release:</label>
          {movie.Year}
        </p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="blank">
          <label className="font-bold px-2">Link to Movie details:</label>
          IMDB
        </a>
        <div>
          <MovieNotes movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
