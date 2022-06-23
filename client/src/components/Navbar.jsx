import React, { useEffect } from "react";
import { ReactComponent as Home } from "../assets/icon-nav-home.svg";
import { ReactComponent as Movies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Tv } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmark } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import { useStateContext } from "../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentPage, changePage } = useStateContext();
  const nagivate = useNavigate();

  useEffect(() => {
    changePage("home");
  }, []);

  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <Logo className="navbar__logo" />
        <div className="navbar__icons">
          <Link to="/">
            <Home
              onClick={() => changePage("home")}
              className={`navbar__icon ${currentPage.home ? "selected" : ""}`}
            />
          </Link>
          <Link to="/movies">
            <Movies
              onClick={() => changePage("movies")}
              className={`navbar__icon ${currentPage.movies ? "selected" : ""}`}
            />
          </Link>
          <Link to="/tvSeries">
            <Tv
              onClick={() => changePage("tvSeries")}
              className={`navbar__icon ${
                currentPage.tvSeries ? "selected" : ""
              }`}
            />
          </Link>
          <Link to="/bookmarks">
            <Bookmark
              onClick={() => changePage("bookmarks")}
              className={`navbar__icon ${
                currentPage.bookmarks ? "selected" : ""
              }`}
            />
          </Link>
        </div>
        <figure className="navbar__img--wrapper">
          <img className="navbar__img" src={Avatar} alt="avatar" />
        </figure>
      </nav>
    </section>
  );
};

export default Navbar;
