import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useFilmsContext } from "../../context/FilmsContext";

const Searchbar = (props) => {
  const { placeholder } = props;
  const { search, updateSearch } = useFilmsContext();

  return (
    <form className="searchbar">
      <SearchIcon className="searchbar__icon" />
      <input
        value={search}
        className="searchbar__input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => updateSearch(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
