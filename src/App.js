import React from 'react';
import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Store App</h1>
      </header>
      
      <Categories />
      <Products/>
      
    </div>
  );
}

export default App;
