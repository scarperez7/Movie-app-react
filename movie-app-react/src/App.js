import React from "react";
import Movies from "./Movies.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Movies defaultMovie="Avengers" />
      </header>
      <footer className="fixed-bottom text-center">
        <a
          href="https://github.com/scarperez7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source code
        </a>
        {""} by Scarlett Perez
      </footer>
    </div>
  );
}
 export default App