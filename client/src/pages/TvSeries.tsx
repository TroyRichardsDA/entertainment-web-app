import { FilmsList } from "../components";
import { Searchbar, SearchResults } from "../components/UI";
import { useFilmsContext } from "../context/FilmsContext";

const TvSeries = () => {
  const { films, search } = useFilmsContext();
  const tvSeries = films.filter((film) => film.category !== "Movie");

  return (
    <main className="tvseries">
      {" "}
      <Searchbar placeholder="Search for TV series" />
      {!search ? (
        <section>
          <h2 className="section__header">TV Series</h2>
          <FilmsList films={tvSeries} />
        </section>
      ) : (
        <SearchResults films={tvSeries} />
      )}
    </main>
  );
};

export default TvSeries;
