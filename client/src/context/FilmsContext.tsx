import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import data from "../data.json";
import filmsData from "../models/dataModel";

type FilmsContextProps = {
  children: ReactNode;
};

type Pages = {
  home: boolean;
  movies: boolean;
  tvSeries: boolean;
  bookmarks: boolean;
};

type FilmsContextI = {
  films: filmsData[];
  search: string;
  currentPage: Pages;
  loading: boolean;
  changePage: (page: string) => void;
  updateSearch: (input: string) => void;
  toggleBookmark: (title: string) => void;
};

const FilmsContext = createContext({} as FilmsContextI);

export const useFilmsContext = () => useContext(FilmsContext);

const initialState = {
  home: false,
  movies: false,
  tvSeries: false,
  bookmarks: false,
};

export const FilmsContextProvider = ({ children }: FilmsContextProps) => {
  const [films, setFilms] = useState<filmsData[]>(data);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(initialState);
  const [loading, setLoading] = useState(true);

  function changePage(page: string) {
    setCurrentPage({ ...initialState, [page]: true });
    setSearch("");
  }

  function updateSearch(input: string) {
    setSearch(input);
  }

  function toggleBookmark(title: string) {
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

  useEffect(() => {
    if (films.length > 1) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [films]);

  const values = {
    films,
    currentPage,
    search,
    loading,
    changePage,
    updateSearch,
    toggleBookmark,
  };

  return (
    <FilmsContext.Provider value={values}>{children}</FilmsContext.Provider>
  );
};
