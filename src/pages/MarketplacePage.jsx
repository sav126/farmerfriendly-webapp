import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MarketplacePage.css';

const MarketplacePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="marketplace-container">
      <header className="marketplace-header">
        <nav className="marketplace-nav">
          <a href="/">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Search</a>
          <span className="logo">Farmer’s Choice</span>
        </nav>
        <div className="marketplace-banner">
          <h1>PRODUCTS</h1>
          <p>We offer a wide range of agricultural consumables</p>
        </div>
      </header>

      <div className="product-grid">
        <div className="product-card" onClick={() => handleNavigation('/vegetables')}>
          <img src="/images/vege.jpg" alt="Vegetables" />
          <div className="product-label">VEGETABLES</div>
        </div>
        <div className="product-card" onClick={() => handleNavigation('/fruits')}>
          <img src="/images/fruits.jpg" alt="Fruits" />
          <div className="product-label">FRUITS</div>
        </div>
        <div className="product-card" onClick={() => handleNavigation('/dairy')}>
          <img src="/images/d1.jpg" alt="Dairy" />
          <div className="product-label">DAIRY</div>
        </div>
        <div className="product-card" onClick={() => handleNavigation('/other')}>
          <img src="/images/sss.jpg" alt="Other" />
          <div className="product-label">OTHER</div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
