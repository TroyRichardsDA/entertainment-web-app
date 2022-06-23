import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const Searchbar = (props) => {
  const { placeholder, search, setSearch } = props;

  return (
    <form className="searchbar">
      <SearchIcon className="searchbar__icon" />
      <input
        value={search}
        className="searchbar__input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
