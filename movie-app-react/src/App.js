import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieHeader";
import MovieSearch from "./components/SearchMovie";
import AddFavorites from "./components/AddFavorites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [movieFavs, setMovieFavs] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=39375142`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  const addMovieFav = (movie) => {
    const newFavList = [...movieFavs, movie];
    setMovieFavs(newFavList);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className=" row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <MovieSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorites}
          handleFavouritesClick={addMovieFav}
        />
      </div>
      <div className=" row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favs" />
      </div>
      <div className="row">
        <MovieList
          movies={movieFavs}
          favoriteComponent={AddFavorites}
          handleFavouritesClick={addMovieFav}
        />
      </div>
    </div>
  );
};

export default App;
