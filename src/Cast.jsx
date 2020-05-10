import React, { useState, useEffect } from "react";

const Cast = ({ movies }) => {
  const [allCredits, setAllCredits] = useState([]);
  const [castInCommon, setCastInCommon] = useState({});

  const getCredits = async (id) => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}` +
        `/credits?api_key=4ebee3b01a64abae21f486ae095d3f1b`
    )
      .then((r) => r.json())
      .then((credits) => setAllCredits([credits, ...allCredits]));
  };

  const removeCredits = (id) => {
    setAllCredits(allCredits.filter((credits) => credits.id !== id));
  };

  // when a movie is selected or deleted, remove cast or fetch and add cast to state
  useEffect(() => {
    allCredits.forEach((credits) => {
      if (!movies.some((movie) => movie.id === credits.id)) {
        removeCredits(credits.id);
      }
    });

    movies.forEach((movie) => {
      if (!allCredits.some((credits) => credits.id === movie.id)) {
        getCredits(movie.id);
      }
    });
  }, [movies]);

  // when allCredits state updates, compare all movies again
  useEffect(() => {
    if (movies.length === 1) {
      setCastInCommon(allCredits[0]);
    } else if (movies.length > 1) {
      // set shared cast obj to = cast obj for first movie
      // then for each cast member, check all other cast objs
      // & remove if it's not found
      // repeat for crew

      const otherCredits = Object.assign([], allCredits);
      otherCredits.shift();
      const tempCastInCommon = Object.assign({}, allCredits[0]);

      const compareCredits = (cast) => {
        for (let i = 0; i < tempCastInCommon[cast].length; i++) {
          for (let j = 0; j < otherCredits.length; j++) {
            let shared = false;
            for (let k = 0; k < otherCredits[j].cast.length; k++) {
              if (
                otherCredits[j][cast][k] &&
                tempCastInCommon[cast][i] &&
                otherCredits[j][cast][k].id === tempCastInCommon[cast][i].id
              ) {
                shared = true;
                break;
              }
            }
            if (!shared) delete tempCastInCommon[cast][i];
          }
        }
      };

      compareCredits("cast");
      compareCredits("crew");
      setCastInCommon(tempCastInCommon);
    } else setCastInCommon("");
  }, [allCredits]);

  return (
    <div>
      <ul>{JSON.stringify(castInCommon)}</ul>
    </div>
  );
};

export default Cast;
