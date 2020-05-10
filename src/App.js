import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { debounce } from "lodash";
import MovieCard from "./MovieCard";
import Cast from "./Cast";

function App() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [selections, setSelections] = useState([]);

  const getSearchResults = debounce(() => {
    if (searchText.length >= 1) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4ebee3b01a64abae21f486ae095d3f1b` +
          `&language=en-US` +
          `&query=${searchText}` +
          `&page=1` +
          `&include_adult=false`
      )
        .then((r) => r.json())
        .then((response) => setResults(response.results));
    }
  }, 500);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    getSearchResults();
  };

  const handleCardClick = (id) => {
    if (selections.some((movie) => movie.id === id)) {
      setSelections([...selections.filter((movie) => movie.id !== id)]);
    } else {
      const newSelection = results.find((movie) => movie.id === id);
      setSelections([newSelection, ...selections]);
    }
  };

  const showResults = () =>
    results.map((data) => (
      <MovieCard
        key={data.id}
        title={data.title}
        poster={data.poster_path}
        addMovie={() => handleCardClick(data.id)}
      />
    ));

  const showMovieCards = () =>
    selections.map((data) => (
      <MovieCard
        key={data.id}
        title={data.title}
        poster={data.poster_path}
        addMovie={() => handleCardClick(data.id)}
      />
    ));

  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div className="movie-card-container">
        {searchText !== "" ? showResults() : null}
      </div>
      <div className="movie-card-container">
        {showMovieCards(selections, true)}
      </div>
      <Cast movies={selections} />
    </div>
  );
}

export default App;
