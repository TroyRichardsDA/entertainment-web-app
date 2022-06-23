import React from "react";
import { Film } from "./UI";
import { useStateContext } from "../context/ContextProvider";

const Recommended = () => {
  const { films } = useStateContext();

  const recommendedFilms = films.map((film, ind) => {
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
        />
      );
    } else return null;
  });

  return (
    <section className="recommended">
      <h2 className="recommended__title">Recommended for you</h2>
      <div className="recommended__films">{recommendedFilms}</div>
    </section>
  );
};

export default Recommended;
