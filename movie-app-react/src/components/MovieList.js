import React from "react";

const MovieList = (props) => {
  const Favorites = props.favoriteComponent;

  return (
    <div className="d-flex justify-content-start ">
      {props.movies.map((movie, index) => (
        <div key={index} className="image-container m-4">
          <img src={movie.Poster} alt="movie" className="m-3" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            {" "}
            <Favorites />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
