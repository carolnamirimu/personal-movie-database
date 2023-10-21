import React from "react";

const MoviesList = ({ movies, onThumbnailClick }) => {
  const movieImage = movies.map((movie, index) => (
    <div
      onClick={() => onThumbnailClick(movie)}
      className=" hover:bg-indigo-600  text-green-50 bg-indigo-400 ease-out hover:translate-y-5 transition-all rounded"
    >
      <img className="hover:animate-" src={movie.Poster}></img>
      <div>
        <br />
        <h3 className="justify-center items-center m-5 font-bold">
          {movie.Title}
        </h3>
      </div>
    </div>
  ));

  return movieImage;
};

export default MoviesList;