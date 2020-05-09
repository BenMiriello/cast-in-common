import React from "react";

const MovieCard = ({ data }) => {
  return <div className="movie-card">
      <img className="poster" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + data.poster_path} alt={data.title} />
  </div>;
};

export default MovieCard;

const example = {
  popularity: 1.231,
  vote_count: 0,
  video: false,
  poster_path: "/vqhyQqTSAs4Gx5nTYaZUU5oIhHY.jpg",
  id: 579754,
  adult: false,
  backdrop_path: null,
  original_language: "en",
  original_title: "Star War The Third Gathers: Backstroke of the West",
  genre_ids: [],
  title: "Star War The Third Gathers: Backstroke of the West",
  vote_average: 0,
  overview:
    "Star War The Third Gathers: Backstroke of the West is a dubbed version of Star Wars Episode III: Revenge of the Sith- that is, one poorly translated from Chinese to English, then fully voiced and subtitled. The project was completed by GratefulDeadpool in 2016 and boasts nealy 3 million views on YouTube.",
  release_date: "2016-12-01",
};
