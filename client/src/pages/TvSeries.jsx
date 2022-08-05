import React, { useState } from "react";
import { FilmsList } from "../components";
import { Searchbar, SearchResults } from "../components/UI";
import { useFilmsContext } from "../context/FilmsContext";

const TvSeries = () => {
  const [search, setSearch] = useState("");
  const { films } = useFilmsContext();
  const tvSeries = films.filter((film) => film.category !== "Movie");

  return (
    <main className="tvseries">
      {" "}
      <Searchbar
        search={search}
        setSearch={setSearch}
        placeholder="Search for TV series"
      />
      {!search ? (
        <section>
          <h2 className="section__header">TV Series</h2>
          <FilmsList films={tvSeries} />
        </section>
      ) : (
        <SearchResults films={tvSeries} search={search} />
      )}
    </main>
  );
};

export default TvSeries;
