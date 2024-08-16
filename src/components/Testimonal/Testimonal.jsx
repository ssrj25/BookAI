import React from 'react';
import './Testimonal.css';

const Testimonal = () => {
  return (
    <div className='container'>
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>
              "BookAI revolutionized my writing process. I completed my debut
              novel in just two weeks!"
            </p>
            <p><strong>- Sarah J., Author</strong></p>
          </div>
          <div className="testimonial">
            <p>
              "The AI-generated ideas helped me overcome writer's block. It's
              like having a co-author at your fingertips."
            </p>
            <p><strong>- Mark T., Aspiring Writer</strong></p>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for the latest AI writing tips and BookAI
          updates.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <footer>
        <p>© 2024 BookAI. All rights reserved.</p>
        <div>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Testimonal;
