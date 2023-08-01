import React, {useState} from 'react';
import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import { CartProvider } from './Context/CartContext';

function App() {
const [selectedCategory, setSelectedCategory] = useState ('');

const handleCategoryClick = (category) => {

  console.log(category)
  setSelectedCategory(category);
};

  return (
    <CartProvider>
   
    <div className='hero'>
    <div className="App">
      <header className="App-header">
      <div className="Header-Links">
            <a href="none" className='GFG'>HOME</a>
            <a href="none" className='GFG'>CONTACT</a>
            <a href="none" className='GFG'>ABOUT</a>
          </div>
         
        <h1 className='Store-title'>Emumba Store</h1>  
        <h3 className='slogan'>"Shop 'til you drop! Find everything you need and more."</h3>
        
        </header>
        </div>
    </div>
      <div className="toshow">
      <div className="categories-container">
      <Categories onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      </div>
      <div className="Products-container" >
      <Products category={selectedCategory} />
      </div>
    </div>
    </CartProvider>
   
  );
}

export default App;