import React from "react";

const FavoriteMovieList = ({ movie }) => {
  return (
    <div className=" hover:bg-indigo-600  text-green-50 bg-indigo-400 ease-out hover:translate-y-5 transition-all rounded">
      <h2 className="text-white text-2xl sticky top-40 bg-indigo-600 p-5 mb-2">
        My favorite movies list
      </h2>
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

export default FavoriteMovieList;
