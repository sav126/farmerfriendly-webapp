import React from 'react';
import './Category.css';

const Fruits = () => {
  const items = [
    { name: 'Apples', image: '/images/apple.jpg' },
    { name: 'Bananas', image: '/images/banana.jpg' },
    { name: 'Oranges', image: '/images/orng.jpg' },
    { name: 'Grapes', image: '/images/grapes.jpg' },
  ];

  return (
    <div className="category-page">
      <h1>Fruits</h1>
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

export default Fruits;
