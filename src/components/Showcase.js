// components/Showcase.js
import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

const Showcase = () => {
  const products = [
    { image: product1, name: 'Hoodie 1', description: 'Comfortable and warm.', price: 3000 },
    { image: product2, name: 'Hoodie 2', description: 'Comfortable and elegant.', price: 3000 },
    { image: product3, name: 'Hoodie 3', description: 'Comfortable and stylish.', price: 3000 }
  ];

  return (
    <section className="showcase">
      <h2>Here is what we have in store for you</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;