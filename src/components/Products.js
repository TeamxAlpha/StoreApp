import React, { useState, useEffect } from 'react';

function Products(){
const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

return(
    <div>
  <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2 className="product-title">{product.title}</h2>
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
      </div>

);
}

export default Products;