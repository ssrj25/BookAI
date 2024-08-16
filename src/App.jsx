import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Background from './components/Background/Background';
import Product from './components/Product/Product';
import Home from './components/Home.jsx/Home';
import Features from './components/Features/Features';
import HowItWork from './components/HowItWork/HowItWork';
import Roadmap from './components/Roadmap/Roadmap';
import Testimonal from './components/Testimonal/Testimonal';
import Pricing from './components/Pricing/Pricing';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <div>
        <Background />
        <Product />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home theme={theme} setTheme={setTheme} />
                <Features />
                <HowItWork />
                <Roadmap />
                <Testimonal />
              </>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
