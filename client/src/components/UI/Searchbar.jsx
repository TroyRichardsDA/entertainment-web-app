import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const Searchbar = (props) => {
  const { placeholder } = props;

  return (
    <form className="searchbar">
      <SearchIcon className="searchbar__icon" />
      <input
        className="searchbar__input"
        type="text"
        placeholder={placeholder}
      />
    </form>
  );
};

export default Searchbar;
