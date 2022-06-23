import React from "react";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as TVIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as BookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";

const Film = (props) => {
  const { title, year, isTrending, rating, src, isBookmarked, category } =
    props;

  function toggleBookmark() {}

  return (
    <div className="film">
      <figure
        className={`film__img--wrapper film__img--wrapper-${
          isTrending ? "t" : "r"
        }`}
      >
        <img className="film__img" src={src} alt="" />
      </figure>
      <div
        className={`film__bookmark--wrapper film__bookmark--wrapper-${
          isTrending ? "t" : "r"
        }`}
      >
        {isBookmarked ? (
          <BookmarkFull onClick={toggleBookmark} />
        ) : (
          <BookmarkEmpty onClick={toggleBookmark} />
        )}
      </div>
      <div className={`film__content${isTrending ? "--trending" : ""}`}>
        <div className="film__content--wrapper">
          <div className="film__stats">
            <p>{year}</p>
            <div className="film__dot--wrapper">
              <div className="film__dot"></div>
            </div>
            <p className="film__type">
              {category === "Movie" ? (
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
            <div className="film__dot--wrapper">
              <div className="film__dot"></div>
            </div>
            <p>{rating}</p>
          </div>
        </div>
        <h3 className="film__title">{title}</h3>
      </div>
    </div>
  );
};

export default Film;
