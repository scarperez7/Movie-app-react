import React from "react";

const MovieList = (props) => {
  return (
    <div className="d-flex justify-content-start ">
      {props.movies.map((movie, index) => (
        <img src={movie.Poster} alt="movie" className="m-3" />
      ))}
      ;
    </div>
  );
};

export default MovieList;
