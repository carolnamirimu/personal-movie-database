import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Searchbar from "./Searchbar";
import FavoriteMovieList from "./FavoriteMoviesList";

const MovieData = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);
  console.log(movies);
  const getMovieReaquest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2532d0c9`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieReaquest(searchValue);
  }, [searchValue]);

  const addMovie = (movie) => {
    !selectedMovies.find((item) => item.imdbID === movie.imdbID) &&
      selectedMovies.length < 10 &&
      setSelectedMovies((prev) => [...prev, movie]);
  };
  const removeMovie = (movie) => {
    setSelectedMovies((prev) =>
      prev.filter((item) => item.imdbID !== movie.imdbID)
    );
  };
  return (
    <div>
      <Searchbar props={searchValue} setSearchValue={setSearchValue} />
      <div className="flex flex-wrap max-8 space-x-2 ">
        <MoviesList movies={movies} onThumbnailClick={addMovie} />
      </div>
      <FavoriteMovieList
        movies={selectedMovies}
        onThumbnailClick={removeMovie}
      />
    </div>
  );
};

export default MovieData;
