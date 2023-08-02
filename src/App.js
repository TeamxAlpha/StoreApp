import React, {useState} from 'react';
import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart';
// import { CartProvider } from './Context/CartContext';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './store/store';

function App() {
const [selectedCategory, setSelectedCategory] = useState ('');

const handleCategoryClick = (category) => {

  console.log(category)
  setSelectedCategory(category);
};

  return (

    <Provider store={store}>
      <Router>
    <div className='hero'>
    <div className="App">
      <header className="App-header">
      <div className="Header-Links">
            {/* <a href="none" className='GFG'>HOME</a> */}

            <Link to="/" className="GFG">
                  HOME
                </Link>
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
      <Routes>
            <Route path="/" element={<Products category={selectedCategory} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
            </div>
    </Router>
    </Provider>
   
  );
}

export default App;