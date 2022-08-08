import React from "react";
import { Film } from "./UI";
import Skeletons from "./Skeletons";
import { useFilmsContext } from "../context/FilmsContext";
import filmsData from "../models/dataModel";

type FilmsListProps = {
  films: filmsData[];
};

const FilmsList = (props: FilmsListProps) => {
  const { films } = props;
  const { loading } = useFilmsContext();

  const displayFilms = films.map((movie: filmsData, ind: number) => {
    return (
      <Film
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        src={movie.thumbnail.regular.large}
        isBookmarked={movie.isBookmarked}
        category={movie.category}
        key={ind}
      />
    );
  });

  return (
    <>
      {loading ? (
        <Skeletons isTrending={false} />
      ) : (
        <div className="films-display">{displayFilms}</div>
      )}
    </>
  );
};

export default FilmsList;
