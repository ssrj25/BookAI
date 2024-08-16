import React, { useEffect } from 'react';
import './Home.css';
import logo from '../../assets/logo.png';
import book2 from '../../assets/book2.png';
import paradox from '../../assets/paradox.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from '../ParticleBackground.jsx/ParticleBackground';

const Home = ({ theme, setTheme }) => {
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <ParticleBackground />
      <div className="header">
        <div className="logo">
          <div className="logo-icon"></div>
          <img src={logo} width="50" alt="BookAI Logo" />BookAI
        </div>
        <nav>
          <a onClick={() => handleScrollToSection('features')}>Features</a>
          <a onClick={() => handleScrollToSection('HowItWorks')}>How It Works</a>
          <a onClick={() => handleScrollToSection('roadmaps')}>Roadmap</a>
          <a href="/pricing#pricing" className="a">API</a>
          <a href="/pricing" className="a">Price</a>
          <a href="/pricing#pricing" className="a">Models</a>
          <a href="javascript:void(0);" id="auth-button">Login / Sign Up</a>
        </nav>
        <div className="theme-toggle-switch">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </label>
          </div>
        </div>
      </div>

      <div className="hero">
        <h1 className='headtop'>
          Explore the Possibilities of
          <span className="highlight">AI Book Writing</span> with BookAI
        </h1>
        <p className="subtitle">
          Unleash the power of AI to create captivating books in minutes.
          Download, Distribute wherever you want. Generate unlimited free books
        </p>
        <a href="/playground" className="cta">Get Started</a>
        <a href="/pricing" className="cta">Get API Access</a>
        <br />
        <br />
        <p className="yellow-content"><span>Attention:</span> TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
      </div>

      <div className="programs">
        <div className="ai-demo">
          <img src={book2} alt="" />
          <div className="floating-ui top-left">
            <div className="floating-icon"></div>
            <img src={paradox} alt="" width="90" height="130" />
          </div>
          <div className="floating-ui bottom-right">
            <div className="floating-icon"></div>
            <span>Chapter com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
