import React, { useEffect } from "react";
import { ReactComponent as Home } from "../assets/icon-nav-home.svg";
import { ReactComponent as Movies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Tv } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmark } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentPage, changePage } = useStateContext();
  useEffect(() => {
    changePage("home");
  }, []);

  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <Logo className="navbar__logo" />
        <div className="navbar__links">
          <Link
            className="navbar__link"
            onClick={() => changePage("home")}
            to="/"
          >
            <Home className={currentPage.home ? "selected" : ""} />
          </Link>
          <Link
            className="navbar__link"
            onClick={() => changePage("movies")}
            to="/movies"
          >
            <Movies className={currentPage.movies ? "selected" : ""} />
          </Link>
          <Link
            className="navbar__link"
            onClick={() => changePage("tvSeries")}
            to="/tvSeries"
          >
            <Tv className={currentPage.tvSeries ? "selected" : ""} />
          </Link>
          <Link
            className="navbar__link"
            onClick={() => changePage("bookmarks")}
            to="/bookmarks"
          >
            <Bookmark className={currentPage.bookmarks ? "selected" : ""} />
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
