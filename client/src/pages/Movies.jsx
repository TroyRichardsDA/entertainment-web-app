import { FilmsList } from "../components";
import { Searchbar, SearchResults } from "../components/UI";
import { useFilmsContext } from "../context/FilmsContext";

const Movies = () => {
  const { films, search } = useFilmsContext();
  const movies = films.filter((film) => film.category === "Movie");

  return (
    <main className="movies">
      {" "}
      <Searchbar placeholder="Search for movies" />
      {!search ? (
        <section>
          <h2 className="section__header"> Movies</h2>
          <FilmsList films={movies} />
        </section>
      ) : (
        <SearchResults films={movies} search={search} />
      )}
    </main>
  );
};

export default Movies;
