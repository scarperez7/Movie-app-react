import React from "react";

const MovieSearch = (props) => {
  return (
    <div className=" col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        placeholder="Search for movie"
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};
export default MovieSearch;
