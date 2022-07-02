import React from "react";

const SearchBar = () => {
  return (
    <div>
      <label htmlFor="search">Search Pokemon: </label>
      <input id="search" type="text" />
    </div>
  );
};

export default SearchBar;
