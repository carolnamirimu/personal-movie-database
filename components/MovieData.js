import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Searchbar from "./Searchbar";
import MovieCard from "./MovieCard";

const MovieData = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({})

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

  const onThumbnailClick = (movie) => {
    console.log(movie);
    setSelectedMovie(movie)
  };
  return (
    <div>
      <Searchbar props={searchValue} setSearchValue={setSearchValue} />
      <div className="flex flex-wrap:nowarp max-3">
        <MoviesList movies={movies} onThumbnailClick={onThumbnailClick} />
      </div>
      <MovieCard movie={selectedMovie} />
    </div>
  );
};

export default MovieData;
