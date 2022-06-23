import React from "react";
import data from "../../data.json";
import Film from "./Film";

const SearchResults = ({ search }) => {
  const filteredFilms = data
    .filter((film) => film.title.toLowerCase().includes(search.toLowerCase()))
    .map((film, ind) => {
      return (
        <Film
          title={film.title}
          year={film.year}
          rating={film.rating}
          src={film.thumbnail.regular.small}
          isBookmarked={film.isBookmarked}
          category={film.category}
          key={ind}
        />
      );
    });

  return (
    <section className="search-results">
      <h2 className="search-results__header">
        Found {filteredFilms.length} results for '{search}'
      </h2>
      <div className="search-results__results">{filteredFilms}</div>
    </section>
  );
};

export default SearchResults;
