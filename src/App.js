import React, {useState, useEffect} from 'react';
import './App.css';
import movies from './movies.json';

function App() {
  const [search, changeSearch] = useState('');

  console.log(movies);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HOOKED
        </h1>
      </header>
      <input onChange={(event) => changeSearch(event.target.value)}/>
      <div className="movies">
        {movies.map(movie => {
          return (
            <div className="movie">
              <div>{movie.title}</div>
              <div>{movie.age}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
