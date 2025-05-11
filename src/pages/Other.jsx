import React from 'react';
import './Category.css';

const Other = () => {
  const items = [
    { name: 'Honey', image: '/images/honey.jpg' },
    { name: 'Jaggery', image: '/images/jaggery.jpg' },
    { name: 'Spices', image: '/images/spices.jpg' },
    { name: 'Pickles', image: '/images/pickles.jpg' },
  ];

  return (
    <div className="category-page">
      <h1>Other Items</h1>
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

export default Other;
