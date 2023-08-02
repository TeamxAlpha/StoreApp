
import React, { useState, useEffect } from 'react';
import {  useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function Products({ category }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    const apiURL =
      category !== ''
        ? `https://api.escuelajs.co/api/v1/products/?categoryId=${category}`
        : 'https://api.escuelajs.co/api/v1/products';
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [category]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(cartItems); 
  };
  return (

    <div>
      <Link to="/cart">
        <button className='cart-button'>View Cart</button>
      </Link>
      <h2 className='pdt'>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2 className="product-title">{product.title}</h2>
            <img src={product.images} alt={product.title} className="product-image" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button className='cart-button' onClick={() => handleAddToCart(product)}>Add to Cart</button> 
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Products;
