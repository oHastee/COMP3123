import './App.css';

import React from 'react';
import PersonList from './PersonList';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Lab 11 - Axios Example</h1>
        </header>
        <main>
          <PersonList />
        </main>
      </div>
  );
}

export default App;
