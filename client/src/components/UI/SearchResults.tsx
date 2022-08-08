import React from "react";
import Film from "./Film";
import filmsData from "../../models/dataModel";
import { useFilmsContext } from "../../context/FilmsContext";

type SearchResultsProps = {
  films: filmsData[];
};

const SearchResults = ({ films }: SearchResultsProps) => {
  const { search } = useFilmsContext();

  const filteredFilms = films
    .filter((film) => film.title.toLowerCase().includes(search.toLowerCase()))
    .map((film, ind) => {
      return (
        <Film
          title={film.title}
          year={film.year}
          rating={film.rating}
          src={film.thumbnail.regular.large}
          isBookmarked={film.isBookmarked}
          category={film.category}
          key={ind}
        />
      );
    });

  return (
    <section className="search-results">
      <h2 className="section__header">
        Found {filteredFilms.length} results for '{search}'
      </h2>
      <div className="search-results__results">{filteredFilms}</div>
    </section>
  );
};

export default SearchResults;
