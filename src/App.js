import { useState } from 'react';
import './App.css';
import Header from './components/UI/Header';
import PokemonList from './components/UI/content/PokemonList';
import Main from './components/UI/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
