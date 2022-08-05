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
  const [currentPage, setCurrentPage] = useState(initialState);

  function changePage(page) {
    setCurrentPage({ ...initialState, [page]: true });
  }

  useEffect(() => {
    changePage("home");
  }, []);

  const value = { films, setFilms, changePage, currentPage };

  return (
    <FilmsContext.Provider value={value}>{children}</FilmsContext.Provider>
  );
};

export const useFilmsContext = () => useContext(FilmsContext);
