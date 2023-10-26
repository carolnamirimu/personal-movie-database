import React from "react";

const MovieThumbnail = ({ movie, onThumbnailClick }) => {
  return (
    <div
      onClick={() => onThumbnailClick(movie)}
      className=" hover:bg-gray-400  text-green-50 bg-gray-700 ease-out hover:translate-y-5 transition-all "
    >
      <img className="hover:animate-" src={movie.Poster}></img>
      <div>
        <br />
        <h3 className="justify-center items-center m-5 font-bold">
          {movie.Title}
        </h3>
      </div>
    </div>
  );
};

export default MovieThumbnail;
