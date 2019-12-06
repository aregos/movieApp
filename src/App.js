import React, {useState, useEffect} from 'react';
import './App.css';
import * as movies from './movies.json';

function App() {
  const [search, changeSearch] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HOOKED
        </h1>
      </header>
      <input onChange={(event) => changeSearch(event.target.value)}/>
    </div>
  );
}

export default App;
