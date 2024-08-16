import React from 'react';
import { faUserCircle, faStore, faUsers, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Roadmap.css'; 

const Roadmap = () => {
  return (
    <div className='container' id='roadmaps'>
      <div id="roadmap" className="roadmap">
        <h2>Roadmap</h2>
        <div className="roadmap-container">
          <div className="roadmap-item">
            <div className="roadmap-icon">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <div className="roadmap-content">
              <h3>Advanced Character Development</h3>
              <p>AI-powered tool for creating deep, complex characters.</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">
              <FontAwesomeIcon icon={faStore} />
            </div>
            <div className="roadmap-content">
              <h3>E-book Platform Integration</h3>
              <p>Seamless publishing to popular e-book platforms.</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="roadmap-content">
              <h3>Collaborative Writing</h3>
              <p>Co-create stories with other authors or AI assistants.</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">
              <FontAwesomeIcon icon={faPaintBrush} />
            </div>
            <div className="roadmap-content">
              <h3>AI Cover Art Generation</h3>
              <p>Create stunning book covers with AI-generated art.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
