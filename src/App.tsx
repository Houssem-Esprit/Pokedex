import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeCard from './components/layouts/PokeCard';
import MainPage from './pages/MainPage';


function App() {
  return (
    <div className="App-header">
      <header className="header">
        <p className='logo'>Pokedex | <span className='logo'> 
          <img src='https://res2.weblium.site/res/5e6114c4d12f9f00211ad416/6091cb10305c9b00226c88ab_optimized_450?nowebp' 
            alt='' width="150px"/> 
          </span></p>
      </header>
      <div className='solid'>
      <hr></hr>
      </div>
      <MainPage />
    </div>
  );
}

export default App;
