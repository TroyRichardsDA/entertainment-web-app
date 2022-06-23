import React, { useEffect } from "react";
import { ReactComponent as Home } from "../assets/icon-nav-home.svg";
import { ReactComponent as Movies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Tv } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmark } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
  const { currentPage, changePage } = useStateContext();

  useEffect(() => {
    changePage("home");
  }, []);

  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <Logo className="navbar__logo" />
        <div className="navbar__icons">
          <Home
            onClick={() => changePage("home")}
            className={`navbar__icon ${currentPage.home ? "selected" : ""}`}
          />
          <Movies
            onClick={() => changePage("movies")}
            className={`navbar__icon ${currentPage.movies ? "selected" : ""}`}
          />
          <Tv
            onClick={() => changePage("tvSeries")}
            className={`navbar__icon ${currentPage.tvSeries ? "selected" : ""}`}
          />
          <Bookmark
            onClick={() => changePage("bookmarks")}
            className={`navbar__icon ${
              currentPage.bookmarks ? "selected" : ""
            }`}
          />
        </div>
        <figure className="navbar__img--wrapper">
          <img className="navbar__img" src={Avatar} alt="avatar" />
        </figure>
      </nav>
    </section>
  );
};

export default Navbar;
