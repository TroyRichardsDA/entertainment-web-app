import React from "react";
import { Recommended, Trending } from "../components";
import { Searchbar } from "../components/UI";

const Home = () => {
  return (
    <main className="home">
      <Searchbar placeholder="Search for movies or TV series" />
      <Trending />
      <Recommended />
    </main>
  );
};

export default Home;
