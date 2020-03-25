import React, {useState, useEffect} from 'react';
import './App.css';
import {Movie} from "./Movie";
import './index.css';

function App() {
  const [search, changeSearch] = useState('');
  const [movies] = useState([]);

  const DATA_API = 'http://www.omdbapi.com/?apikey=295be81d?type=movie';
  const POSTER_API = 'http://img.omdbapi.com/?apikey=295be81d';

  async function searchMovies() {
      const movies = await fetch(DATA_API);
      this.setState({movies})
  }

  if (search === '') {
      this.setState({movies: []})
  }

  useEffect( () => {
      function f() {
          if (search !== '') {
              searchMovies();
          }
    }
  }
,[search]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HOOKED
        </h1>
      </header>
      <input onChange={(event) => changeSearch(event.target.value)} value={search}/>
        <h2>
            Sharing a few of our favourite movies
        </h2>
      <div className="movies">
        {movies.map(movie => {
          return <Movie title={movie.title} image={movie.image} age={movie.age}/>})
        }
      </div>
    </div>
  );
}

export default App;
