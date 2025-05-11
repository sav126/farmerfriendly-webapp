import React, { useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Farmer’s Choice</h1>
        <nav className="nav">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      <div className="home">
        <img src="/images/orange.jpg" alt="Oranges" className="home-image" />
        <div className="home-text">
          A Direct Marketplace for Agriculture
        </div>
      </div>

      <section className="grid-section">
        <div className="grid-item" onClick={() => navigate("/marketplace")}>
          <h2>MARKETPLACE</h2>
          <img src="/images/marketplace1.jpg" alt="Marketplace" />
        </div>

        <div className="grid-item">
          <h2>SUPPLIERS</h2>
          <img src="/images/supplier2.jpg" alt="Suppliers" />
        </div>

        <div className="grid-item">
          <h2>YOUR ORDERS</h2>
          <img src="/images/orders1.jpg" alt="Orders" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
