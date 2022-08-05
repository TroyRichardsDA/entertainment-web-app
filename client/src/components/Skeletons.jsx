import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const Skeletons = ({ isTrending }) => {
  const fill = isTrending ? Array(4).fill(0) : Array(24).fill(0);

  const skeletons = fill.map((_, ind) => (
    <div className="film" key={ind}>
      <Skeleton
        baseColor="#2c354c"
        height={460}
        highlightColor="#844c4c"
        className={`film__img--wrapper-${isTrending ? "t" : "r"}`}
      />
      {!isTrending && (
        <div className="film__content">
          <div className="film__content--wrapper">
            <div className="film__stats--r ">
              <p>
                <Skeleton
                  width={`60%`}
                  baseColor="#2c354c"
                  highlightColor="#844c4c"
                />
              </p>
            </div>
          </div>
          <p className={`film__title film__title--r`}>
            <Skeleton
              width={`60%`}
              baseColor="#2c354c"
              highlightColor="#844c4c"
            />
          </p>
        </div>
      )}
    </div>
  ));
  return (
    <div className={isTrending ? "trending__slide" : "films-display"}>
      {skeletons}
    </div>
  );
};

export default Skeletons;
