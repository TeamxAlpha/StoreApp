import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';

function Products({category}){
const { addToCart } = useCart();
const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    console.log(category);
    const apiURL = category !== '' ? `https://api.escuelajs.co/api/v1/products/?categoryId=${category}` : 'https://api.escuelajs.co/api/v1/products';
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [category]);

  // if (!Array.isArray(products)){
  //   return <div>Loading...</div>;
  // }

return(
    <div>
  <h2 className='pdt'>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
          <h2 className="product-title">{product.title}</h2>
          <img src={product.images} alt={product.title} className="product-image" />
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <button className="cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        ))
        }
        
      </div>
      </div>
);
}

export default Products;