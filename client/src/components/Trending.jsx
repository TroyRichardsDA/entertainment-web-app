import React from "react";
import data from "../data.json";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as TVIcon } from "../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkFull } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as BookmarkEmpty } from "../assets/icon-bookmark-empty.svg";

const Trending = () => {
  const movies = data.map((movie, ind) => {
    if (movie.isTrending) {
      return (
        <div className="trending__movie" key={ind}>
          <figure className="trending__img--wrapper">
            <img
              className="trending__img"
              src={movie.thumbnail.trending.large}
              alt=""
            />
          </figure>
          <div className="trending__bookmark--wrapper">
            {movie.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
          </div>
          <div className="trending__content">
            <div className="trending__content--wrapper">
              <div className="trending__stats">
                <p>{movie.year}</p>
                <div className="trending__dot--wrapper">
                  <div className="trending__dot"></div>
                </div>
                <p>
                  {movie.category === "Movie" ? (
                    <>
                      <MovieIcon /> Moive
                    </>
                  ) : (
                    <>
                      {" "}
                      <TVIcon /> TV Series
                    </>
                  )}
                </p>
                <div className="trending__dot--wrapper">
                  <div className="trending__dot"></div>
                </div>
                <p>{movie.rating}</p>
              </div>
            </div>
            <h3 className="trending__title">{movie.title}</h3>
          </div>
        </div>
      );
    }
  });

  return (
    <section className="trending">
      <h2 className="trending__header">Trending</h2>
      <div className="trending__slide">{movies}</div>
    </section>
  );
};

export default Trending;
