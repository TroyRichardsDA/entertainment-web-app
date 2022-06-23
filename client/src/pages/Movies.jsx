import React, { useState } from "react";
import MovieList from "../components/MovieList";
import { Searchbar, SearchResults } from "../components/UI";
import { useStateContext } from "../context/ContextProvider";

const Movies = () => {
  const [search, setSearch] = useState("");
  const { films } = useStateContext();
  const movies = films.filter((film) => film.category === "Movie");

  return (
    <main className="movies">
      {" "}
      <Searchbar
        search={search}
        setSearch={setSearch}
        placeholder="Search for movies"
      />
      {!search ? (
        <MovieList movies={movies} />
      ) : (
        <SearchResults films={movies} search={search} />
      )}
    </main>
  );
};

export default Movies;
