import React from 'react';
import './HowItWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faPencilAlt, faCogs, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const HowItWork = () => {
  return (
    <div className='container' id="HowItWorks">
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="step-container">
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faMagic} />
            </div>
            <div className="step-content">
              <h3 id="how">Choose Your Genre</h3>
              <p>
                Select from a wide range of genres or create a custom blend.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>
            <div className="step-content">
              <h3 id="how">Provide Key Details</h3>
              <p>
                Input main characters, plot points, or themes to guide the AI.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <div className="step-content">
              <h3 id="how">AI Generation</h3>
              <p>Our advanced AI creates your book based on your inputs.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="step-content">
              <h3 id="how">Review and Download</h3>
              <p>
                Review your generated book and download in your preferred
                format.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="book-samples">
        <h2>Sample Books Generated by BookAI</h2>
        <p>
          Explore some of the captivating books created using our AI technology.
        </p>
        <div className="samples-container">
          <div className="book-sample">
            <div className="book-cover-1"></div>
            <h3>Science Fiction</h3>
            <p className="book-excerpt">
              "As Dr. Elara stepped through the shimmering portal, she knew
              there was no turning back. The fate of two universes now rested in
              her hands..."
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="book-sample">
            <div className="book-cover-2"></div>
            <h3>Mystery</h3>
            <p className="book-excerpt">
              "The old lighthouse stood silent, its beacon long extinguished.
              But on foggy nights, some swore they could still see its ghostly
              light..."
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="book-sample">
            <div className="book-cover-3"></div>
            <h3>Fantasy</h3>
            <p className="book-excerpt">
              "The ancient prophecy spoke of a child born with starlight in
              their eyes. As the comet blazed overhead, the kingdom held its
              breath..."
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="ai-demo">
          <div style={{ position: 'relative', paddingBottom: 'calc(47.46527777777778% + 41px)', height: 0, width: '100%' }}>
            <iframe
              src="https://demo.arcade.software/OvUdnIEhwNxssQsB3COY?embed&amp;show_copy_link=true"
              title="BookAI: Revolutionary AI-Powered Book Generation | Create Professional Books in Minutes"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
            />
          </div>
          <div className="floating-ui bottom-right">
            <div className="floating-icon"></div>
            <span>Chapter complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
