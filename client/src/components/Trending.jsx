import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Film } from "./UI";

const Trending = () => {
  const { films } = useStateContext();

  const trendingFilms = films.map((movie, ind) => {
    if (movie.isTrending) {
      return (
        <Film
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          src={movie.thumbnail.trending.large}
          isBookmarked={movie.isBookmarked}
          category={movie.category}
          key={ind}
          isTrending={movie.isTrending}
        />
      );
    }
    return null;
  });

  return (
    <section className="trending">
      <h2 className="section__header">Trending</h2>
      <div className="trending__slide">{trendingFilms}</div>
    </section>
  );
};

export default Trending;
