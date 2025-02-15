// components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, name, description, price }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <div className="product-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  </div>
);

export default ProductCard;