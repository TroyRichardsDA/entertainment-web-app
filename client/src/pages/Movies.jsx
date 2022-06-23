import React, { useState } from "react";
import MovieList from "../components/MovieList";
import { Searchbar, SearchResults } from "../components/UI";

const Movies = () => {
  const [search, setSearch] = useState("");
  return (
    <main className="movies">
      {" "}
      <Searchbar
        search={search}
        setSearch={setSearch}
        placeholder="Search for movies"
      />
      <MovieList />
    </main>
  );
};

export default Movies;
