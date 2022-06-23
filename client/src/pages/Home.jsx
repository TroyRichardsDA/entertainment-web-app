import React from "react";
import { Trending } from "../components";
import { Searchbar } from "../components/UI";

const Home = () => {
  return (
    <main className="home">
      <Searchbar placeholder="Search for movies or TV series" />
      <Trending />
    </main>
  );
};

export default Home;
