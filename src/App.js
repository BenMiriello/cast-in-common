import React, { useState, useCallback } from "react";
// import logo from './logo.svg';
import "./App.css";
import { debounce } from "lodash";
import MovieCard from "./MovieCard";

function App() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

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
  }, 300);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
    getSearchResults();
  };

  const resultCards = () => {
    if (results.length < 1) return null;
    console.log(results);
    return results.map((data) => <MovieCard data={data} />);
  };

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          value={searchText}
          onChange={handleOnChange}
        />
      </div>
      <div className="movie-card-container">{resultCards()}</div>
    </>
  );
}

export default App;
