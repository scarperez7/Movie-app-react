import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

const App = () => {
  let [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=lion king&apikey=39375142";
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
