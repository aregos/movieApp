import React, {useState, useEffect} from 'react';
import './App.css';
import {Movie} from "./Movie";
import './index.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [search, changeSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const DEFAULT_MOVIE = 'http://www.omdbapi.com/?apikey=295be81d&s=ironman&type=movie';
  const SEARCH_API = 'http://www.omdbapi.com/?apikey=295be81d&s='

  async function searchMovies() {
    setLoading(true);
    const movies = await fetch(SEARCH_API + search);
    const moviesJson = await movies.json();
    console.log(movies);
    if (moviesJson.Error) {
      setLoading(false);
      return;
    } else if (moviesJson.Search) {
      setMovies(moviesJson.Search);
      console.log(moviesJson);
    }
    setLoading(false);
  }

  return (
    <div className="App">
      {//loading ? <span>Loading...</span> : 
      (
        <div className="container">
          <header className="App-header">
          <h1>
            HOOKED
          </h1>
          </header>
          <div className="search">
          <input onChange={(event) => changeSearch(event.target.value)} value={search}/>
          <button onClick={searchMovies}>Search</button>
          </div>
          <h2>
              Sharing a few of our favourite movies
          </h2>
          <div className="movies">
            {movies.length && movies.map(movie => (
              <Movie title={movie.Title} image={movie.Poster} year={movie.Year}/>)
            )}
          </div>
      </div>
      )}
      
    </div>
  );
}

export default App;
