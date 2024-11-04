import React from 'react';
import './App.css';

function App() {
  // Define the information as constants or state if you want them to be dynamic
  const courseName = "Fullstack Development - I";
  const labTitle = "React JS Programing Week09 Lab exercise";
  const studentId = "101061602"; // Replace with your actual student ID
  const studentName = "Oscar Piedrasanta Diaz"; // Replace with your actual name
  const college = "George Brown College, Toronto";

  return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="App-logo" alt="logo" />
          <h1>{courseName}</h1>
          <h2>{labTitle}</h2>
          <p>{studentId}</p>
          <p>{studentName}</p>
          <p>{college}</p>
        </header>
      </div>
  );
}

export default App;
