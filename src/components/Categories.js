import React, { useState, useEffect } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <h2 className="Cat-Title">Categories</h2>
      <ul className="Categories-List">
        {categories.map((category, index) => (
          <button className="category-button" key={index}>{category.name}</button> 
        ))}
      </ul>
    </div>
  );
}

export default Categories;


