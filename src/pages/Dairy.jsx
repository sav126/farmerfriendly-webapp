import React from 'react';
import './Category.css';

const Dairy = () => {
  const items = [
    { name: 'Milk', image: '/images/milk.jpg' },
    { name: 'Cheese', image: '/images/cheese.jpg' },
    { name: 'Butter', image: '/images/butter.jpg' },
    { name: 'Yogurt', image: '/images/yogurt.jpg' },
  ];

  return (
    <div className="category-page">
      <h1>Dairy</h1>
      <div className="item-grid">
        {items.map((item, idx) => (
          <div className="item-card" key={idx}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dairy;
