import React from 'react'
import './App.css';
import MoviesPage from "./components/MoviesPage.js";
import NominationsPage from "./components/NominationsPage.js"

const App = () => {
  return (
    <div>
      <MoviesPage />
      <NominationsPage />
      
    </div>
  );
}

export default App;
