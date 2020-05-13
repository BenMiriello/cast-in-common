import React from "react";

const MovieCard = ({ result, title, poster, addMovie }) => {
    
    return <div className="movie-card" onClick={addMovie} >
        <img className="poster" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + poster} alt={title} />
    </div>;
};

export default MovieCard;

// const example = {
//   popularity: 1.231,
//   vote_count: 0,
//   video: false,
//   poster_path: "/vqhyQqTSAs4Gx5nTYaZUU5oIhHY.jpg",
//   id: 579754,
//   adult: false,
//   backdrop_path: null,
//   original_language: "en",
//   original_title: "Star War The Third Gathers: Backstroke of the West",
//   genre_ids: [],
//   title: "Star War The Third Gathers: Backstroke of the West",
//   vote_average: 0,
//   overview:
//     "Star War The Third Gathers: Backstroke of the West is a dubbed version of Star Wars Episode III: Revenge of the Sith- that is, one poorly translated from Chinese to English, then fully voiced and subtitled. The project was completed by GratefulDeadpool in 2016 and boasts nealy 3 million views on YouTube.",
//   release_date: "2016-12-01",
// };

// https://image.tmdb.org/t/p/w1280/

// https://image.tmdb.org/t/p/w276_and_h350_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg