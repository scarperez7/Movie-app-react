import React from "react";

const MovieList = (props) => {
  return (
    <div className="d-flex justify-content-start ">
      {props.movies.map((movie, index) => (
        <div className="image-container m-4">
          <img src={movie.Poster} alt="movie" className="m-3" />
          <div className="overlay d-flex align-items-center justify-content-center">
            Add to Favourites
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default MovieList;
