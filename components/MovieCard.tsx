import React from "react";
import MovieRating from "./MovieRating";
import MovieNotes from "./MovieNotes";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex sm:flex-col md:flex-row mt-3 p-2 gap-3 text-black bg-white ">
      <div className="sm:w-full md:w-2/5 ">
        <img src={movie.Poster} />
      </div>
      <div className="sm:w-full md:w-3/5 ">
        <div className="items-center align-middle ">
          <label className="font-bold px-2">Title: </label>
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
        {/* <MovieRating rating={4} /> */}
        <div>
          <MovieNotes movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
