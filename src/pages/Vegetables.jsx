import React from 'react';
import './Category.css';

const Vegetables = () => {
  const items = [
    { name: 'Carrots', image: '/images/carrot.jpg' },
    { name: 'Spinach', image: '/images/spinach.jpg' },
    { name: 'Tomatoes', image: '/images/tomato.jpg' },
    { name: 'Potatoes', image: '/images/potato.jpg' },
  ];

  return (
    <div className="category-page">
      <h1>Vegetables</h1>
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

export default Vegetables;
