import React from "react";
import { useState } from "react";
import { Recommended, Trending } from "../components";
import { Searchbar, SearchResults } from "../components/UI";

const Home = () => {
  const [search, setSearch] = useState("");

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
        <SearchResults search={search} />
      )}
    </main>
  );
};

export default Home;
