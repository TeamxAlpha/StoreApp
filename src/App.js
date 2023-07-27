import React, {useState} from 'react';
import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
const [selectedCategory, setSelectedCategory] = useState ('');

const handleCategoryClick = (category) => {

  console.log(category)
  setSelectedCategory(category);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emumba Store</h1>   
        </header>
      
      <Categories onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      <Products category={selectedCategory} />
    </div>
  );
}

export default App;