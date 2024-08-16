import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBook, faDownload, faLanguage } from '@fortawesome/free-solid-svg-icons';

const featureData = [
  {
    icon: faRobot,
    title: 'AI-Powered Writing',
    description: 'Generate high-quality content with advanced AI technology.',
  },
  {
    icon: faBook,
    title: 'Custom Genres',
    description: 'Create stories in any genre or blend multiple styles.',
  },
  {
    icon: faDownload,
    title: 'Instant Download',
    description: 'Get your completed book in various formats instantly.',
  },
  {
    icon: faLanguage,
    title: 'Multilingual',
    description: 'Generate content in multiple languages effortlessly.',
  },
];

const Features = () => (
  <div className='container' id='features'>
    <div className="features">
      {featureData.map((feature, index) => (
        <div key={index} className="feature">
          <div className="feature-icon">
            <FontAwesomeIcon icon={feature.icon} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
