import React from 'react';
import './Background.css';

const particles = [
  { top: '10%', left: '20%' },
  { top: '30%', left: '80%' },
  { top: '70%', left: '50%' },
  { top: '40%', left: '10%' },
  { top: '60%', left: '90%' },
];

const Background = () => (
  <div className="background-particles">
    {particles.map((style, index) => (
      <div key={index} className="particle" style={style} />
    ))}
  </div>
);

export default Background;
