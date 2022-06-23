import React from "react";
import data from "../data.json";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as TVIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkFull } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as BookmarkEmpty } from "../assets/icon-bookmark-empty.svg";
import { Film } from "./UI";

const Recommended = () => {
  const films = data.map((film, ind) => {
    if (!film.isTrending) {
      return (
        <Film
          title={film.title}
          year={film.year}
          rating={film.rating}
          src={film.thumbnail.regular.small}
          isBookmarked={film.isBookmarked}
          category={film.category}
          key={ind}
          isTrending={film.isTrending}
        />
      );
    }
  });

  return (
    <section className="recommended">
      <h2 className="recommended__title">Recommended for you</h2>
      <div className="recommended__films">{films}</div>
    </section>
  );
};

export default Recommended;
