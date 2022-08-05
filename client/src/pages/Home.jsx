import { FilmsList, Trending } from "../components";
import { Searchbar, SearchResults } from "../components/UI";
import { useFilmsContext } from "../context/FilmsContext";

const Home = () => {
  const { films, search } = useFilmsContext();
  const notTrending = films.filter((film) => film.isTrending === false);

  return (
    <main className="home">
      <Searchbar placeholder="Search for movies or TV series" />
      {!search ? (
        <>
          <Trending />
          <section className="recommended">
            <h2 className="section__header">Recommended for you</h2>
            <FilmsList films={notTrending} />
          </section>
        </>
      ) : (
        <SearchResults films={films} search={search} />
      )}
    </main>
  );
};

export default Home;
