import React from "react";
import { ReactComponent as Home } from "../assets/icon-nav-home.svg";
import { ReactComponent as Movies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Tv } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmark } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar__wrapper">
        <Logo className="navbar__logo" />
        <div className="navbar__icons">
          <Home className="navbar__icon" />
          <Movies className="navbar__icon" />
          <Tv className="navbar__icon" />
          <Bookmark className="navbar__icon" />
        </div>
        <figure className="navbar__img--wrapper">
          <img className="navbar__img" src={Avatar} alt="avatar" />
        </figure>
      </nav>
    </section>
  );
};

export default Navbar;
