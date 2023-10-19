import React, { useState } from "react";
import MoviesList from "./MoviesList";

const MovieData = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Smile",
      Year: "2022",
      imdbID: "tt15474916",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    },
    {
      Title: "Mona Lisa Smile",
      Year: "2003",
      imdbID: "tt0304415",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTI0NjEwNDgwOV5BMl5BanBnXkFtZTYwOTI1NTA3._V1_SX300.jpg",
    },
    {
      Title: "I Smile Back",
      Year: "2015",
      imdbID: "tt3640682",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk0NDQ3MzgxOF5BMl5BanBnXkFtZTgwMDAzMjExNzE@._V1_SX300.jpg",
    },
    {
      Title: "Falling Into Your Smile",
      Year: "2021–",
      imdbID: "tt11290960",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzY3MDI0ZWEtZGRjYy00YWE0LWIzOWQtMzBjZDYwNTg1ZmExXkEyXkFqcGdeQXVyOTE4NzcwNzI@._V1_SX300.jpg",
    },
    {
      Title: "Smile",
      Year: "1975",
      imdbID: "tt0073722",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVkMWE2YzQtNzg1Ny00OTJkLTkzODgtNjNmYzhlZmQ3N2IwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
    {
      Title: "The Etruscan Smile",
      Year: "2018",
      imdbID: "tt5459382",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDE1MDE5OWUtNjVhNi00NzZjLWJkNmQtNjk4MjkyZDMyYTczXkEyXkFqcGdeQXVyNDM5OTY1MTE@._V1_SX300.jpg",
    },
    {
      Title: "My Mother's Smile",
      Year: "2002",
      imdbID: "tt0317965",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGY0M2YxZDctZGE1ZS00YmI1LThjYzMtMDc5MTE2NDA5YTMwXkEyXkFqcGdeQXVyMjIyMDk1Nzg@._V1_SX300.jpg",
    },
    {
      Title: "Secret Smile",
      Year: "2005",
      imdbID: "tt0462520",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzcyZDIzMjAtMmExZi00ZDMxLTgyZWEtNGQ5MzUxZTQxZTg2XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
    },
    {
      Title: "The Smile Man",
      Year: "2013",
      imdbID: "tt2987342",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGY3ZWFjNGQtYzFhNy00MWFiLTllNzQtNzRiMjQ1NWQzNzA4XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg",
    },
    {
      Title: "Razor Blade Smile",
      Year: "1998",
      imdbID: "tt0159693",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxNjczMDYyOV5BMl5BanBnXkFtZTcwODk2MzEzMQ@@._V1_SX300.jpg",
    },
  ]);
  console.log(movies);

  return (
    <div className="flex ">
      <MoviesList movies={movies} />
    </div>
  );
};

export default MovieData;
