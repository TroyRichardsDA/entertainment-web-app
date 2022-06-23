import { createContext, useContext, useState } from "react";
import data from "../data.json";

const StateContext = createContext(null);

const initialState = {
  home: false,
  movies: false,
  tvSeries: false,
  bookmarks: false,
};

export const ContextProvider = ({ children }) => {
  const [films, setFilms] = useState(data);
  const [currentPage, setCurrentPage] = useState(initialState);

  function changePage(page) {
    setCurrentPage({ ...initialState, [page]: true });
  }

  const value = { films, setFilms, changePage, currentPage };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
