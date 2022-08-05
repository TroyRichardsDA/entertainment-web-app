import { createContext, useContext, useEffect, useState } from "react";
import data from "../data.json";

const FilmsContext = createContext(null);

const initialState = {
  home: false,
  movies: false,
  tvSeries: false,
  bookmarks: false,
};

export const FilmsContextProvider = ({ children }) => {
  const [films, setFilms] = useState(data);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(initialState);

  function changePage(page) {
    setCurrentPage({ ...initialState, [page]: true });
    setSearch("");
  }

  function updateSearch(input) {
    setSearch(input);
  }

  function toggleBookmark(title) {
    setFilms((prev) =>
      prev.map((film) => {
        if (film.title === title) {
          return { ...film, isBookmarked: !film.isBookmarked };
        } else {
          return film;
        }
      })
    );
  }

  useEffect(() => {
    changePage("home");
  }, []);

  const values = {
    films,
    changePage,
    currentPage,
    search,
    updateSearch,
    toggleBookmark,
  };

  return (
    <FilmsContext.Provider value={values}>{children}</FilmsContext.Provider>
  );
};

export const useFilmsContext = () => useContext(FilmsContext);
