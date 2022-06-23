import React from "react";
import { useState } from "react";
import { Recommended, Trending } from "../components";
import { Searchbar, SearchResults } from "../components/UI";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  const [search, setSearch] = useState("");
  const { films } = useStateContext();

  return (
    <main className="home">
      <Searchbar
        search={search}
        setSearch={setSearch}
        placeholder="Search for movies or TV series"
      />
      {!search ? (
        <>
          <Trending />
          <Recommended />
        </>
      ) : (
        <SearchResults films={films} search={search} />
      )}
    </main>
  );
};

export default Home;
