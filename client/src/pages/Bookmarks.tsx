import { FilmsList } from "../components";
import { Searchbar, SearchResults } from "../components/UI";
import { useFilmsContext } from "../context/FilmsContext";

const Bookmarks = () => {
  const { films, search } = useFilmsContext();
  const movies = films.filter(
    (film) => film.category === "Movie" && film.isBookmarked
  );
  const tvSeries = films.filter(
    (film) => film.category !== "Movie" && film.isBookmarked
  );
  const bookmarkedFilms = films.filter((film) => film.isBookmarked);

  return (
    <main className="movies">
      {" "}
      <Searchbar placeholder="Search for movies" />
      {!search ? (
        <>
          <section>
            <h2 className="section__header">Bookmarked Movies</h2>
            <FilmsList films={movies} />
          </section>
          <section>
            <h2 className="section__header">Bookmarked TV Series</h2>
            <FilmsList films={tvSeries} />
          </section>
        </>
      ) : (
        <SearchResults films={bookmarkedFilms} search={search} />
      )}
    </main>
  );
};

export default Bookmarks;
