// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // if using React Router

const Home = () => {
  const navigate = useNavigate();

  const handleMarketplaceClick = () => {
    navigate("/marketplace"); // route to Marketplace page
  };

  return (
    <div>
      <button onClick={handleMarketplaceClick}>Marketplace</button>
    </div>
  );
};

export default Home;
