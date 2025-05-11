import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MarketplacePage from './pages/MarketplacePage';
import Vegetables from './pages/Vegetables';
import Fruits from './pages/Fruits';
import Dairy from './pages/Dairy';
import Other from './pages/Other';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;
