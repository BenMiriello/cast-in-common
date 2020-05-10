import React from "react";

const MovieCard = ({ result, title, poster, addMovie }) => {
    
    return <div className="movie-card" onClick={addMovie} >
        <img className="poster" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + poster} alt={title} />
    </div>;
};

export default MovieCard;

// const example = {"id":11,"cast":[null,null,null,null,null,{"cast_id":7,"character":"C-3PO","credit_id":"52fe420dc3a36847f8000451","gender":2,"id":6,"name":"Anthony Daniels","order":5,"profile_path":"/7kR4kwXtvXtvrsxWeX3QLX5NS5V.jpg"},{"cast_id":8,"character":"R2-D2","credit_id":"52fe420dc3a36847f8000455","gender":2,"id":130,"name":"Kenny Baker","order":6,"profile_path":"/pwtOpCFlXny8YsG3uVz6MbCdY7U.jpg"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"crew":[{"credit_id":"5e85e7e298f1f10014ab3e74","department":"Directing","gender":2,"id":1,"job":"Director","name":"George Lucas","profile_path":"/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg"},{"credit_id":"52fe420dc3a36847f800045b","department":"Production","gender":2,"id":1,"job":"Executive Producer","name":"George Lucas","profile_path":"/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg"},{"credit_id":"562e75309251414006009955","department":"Writing","gender":2,"id":1,"job":"Writer","name":"George Lucas","profile_path":"/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg"},null,{"credit_id":"52fe420dc3a36847f800046d","department":"Sound","gender":2,"id":491,"job":"Original Music Composer","name":"John Williams","profile_path":"/2Ats98PB1SH2yfEPikiLdhRuXZm.jpg"},null,null,null,null,{"credit_id":"5aa9c1a50e0a2664f9003390","department":"Sound","gender":2,"id":670,"job":"Sound Designer","name":"Ben Burtt","profile_path":"/16OhOb7WngOi4WOnGpRpbDSzYnd.jpg"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}

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