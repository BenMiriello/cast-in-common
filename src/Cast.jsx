import React, { useState, useEffect } from "react";

import CastCard from "./CastCard";

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

  // when a movie is selected or deleted, remove cast or fetch and add cast to allCredits state
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
  }, [movies, allCredits]);

  // when allCredits state updates, compare all movies again
  useEffect(() => {
    if (movies.length === 1) {
      setCastInCommon(allCredits[0]);
    } else if (movies.length > 1) {
      const otherCredits = Object.assign([], allCredits);
      otherCredits.shift();
      const tempCastInCommon = Object.assign({cast: []}, { cast: allCredits[0].cast });

      for (let i = 0; i < tempCastInCommon.cast.length; i++) {
        if (
          !allCredits.every((credits) =>
            credits.cast.some(
              (member) => member.id === tempCastInCommon.cast[i].id
            )
          )
        ) {
          tempCastInCommon.cast.splice(i, 1);
        } else {
          otherCredits.forEach((credits) => {
            let common = credits.cast.find(
              (member) => member.id === tempCastInCommon.cast[i].id
            );
            while (common) {
              tempCastInCommon.cast[i].character += ", " + common.character;
              common.character = "";
              common = credits.cast.find(
                (member) => member.id === tempCastInCommon.cast[i].id
              );
            }
          });
        }
      }

      setCastInCommon(tempCastInCommon);
    } else setCastInCommon({ cast: [] });
  }, [allCredits]);

  const renderCastCards = () => {
    if (!castInCommon?.cast || !castInCommon.cast[0]) return null;
    return [
      ...castInCommon.cast.map((member) => {
        if (member)
          return (
            <CastCard
              key={member.id}
              name={member.name}
              image={member.profile_path}
              character={member.character}
            />
          );
      }),
    ];
  };

  return (
    <div className="movie-card-container">
      <ul>{renderCastCards()}</ul>
    </div>
  );
};

export default Cast;

const example = {
  id: 11,
  cast: [
    null,
    {
      cast_id: 7,
      character: "C-3PO",
      credit_id: "52fe420dc3a36847f8000451",
      gender: 2,
      id: 6,
      name: "Anthony Daniels",
      order: 5,
      profile_path: "/7kR4kwXtvXtvrsxWeX3QLX5NS5V.jpg",
    },
    {
      cast_id: 8,
      character: "R2-D2",
      credit_id: "52fe420dc3a36847f8000455",
      gender: 2,
      id: 130,
      name: "Kenny Baker",
      order: 6,
      profile_path: "/pwtOpCFlXny8YsG3uVz6MbCdY7U.jpg",
    },
  ],
  crew: [
    null,
    {
      credit_id: "5e85e7e298f1f10014ab3e74",
      department: "Directing",
      gender: 2,
      id: 1,
      job: "Director",
      name: "George Lucas",
      profile_path: "/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg",
    },
    {
      credit_id: "52fe420dc3a36847f800045b",
      department: "Production",
      gender: 2,
      id: 1,
      job: "Executive Producer",
      name: "George Lucas",
      profile_path: "/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg",
    },
    {
      credit_id: "562e75309251414006009955",
      department: "Writing",
      gender: 2,
      id: 1,
      job: "Writer",
      name: "George Lucas",
      profile_path: "/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg",
    },
    {
      credit_id: "52fe420dc3a36847f800046d",
      department: "Sound",
      gender: 2,
      id: 491,
      job: "Original Music Composer",
      name: "John Williams",
      profile_path: "/2Ats98PB1SH2yfEPikiLdhRuXZm.jpg",
    },
    {
      credit_id: "5aa9c1a50e0a2664f9003390",
      department: "Sound",
      gender: 2,
      id: 670,
      job: "Sound Designer",
      name: "Ben Burtt",
      profile_path: "/16OhOb7WngOi4WOnGpRpbDSzYnd.jpg",
    },
  ],
};
