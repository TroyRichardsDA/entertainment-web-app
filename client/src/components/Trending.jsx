import React from "react";
import data from "../data.json";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as TVIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkFull } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as BookmarkEmpty } from "../assets/icon-bookmark-empty.svg";
import { Film } from "./UI";

const Trending = () => {
  const movies = data.map((movie, ind) => {
    if (movie.isTrending) {
      return (
        <Film
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          src={movie.thumbnail.trending.small}
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
      <h2 className="trending__header">Trending</h2>
      <div className="trending__slide">{movies}</div>
    </section>
  );
};

export default Trending;
