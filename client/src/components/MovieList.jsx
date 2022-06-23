import React from "react";
import { Film } from "./UI";

const MovieList = (props) => {
  const { movies } = props;
  const displayMovies = movies.map((movie, ind) => {
    return (
      <Film
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        src={movie.thumbnail.regular.small}
        isBookmarked={movie.isBookmarked}
        category={movie.category}
        key={ind}
      />
    );
  });

  return (
    <section className="movie-list">
      <h2 className="section__header"> Movies</h2>
      <div className="films-display">{displayMovies}</div>
    </section>
  );
};

export default MovieList;
