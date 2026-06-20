import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">AI & Robotics Summer Workshop</h1>
          <p className="hero-description">
            Learn Artificial Intelligence, Robotics, and Coding through exciting hands-on projects designed especially for young learners.
          </p>
          <button className="hero-button" onClick={scrollToForm}>
            Enroll Now
          </button>
        </div>
        <div className="hero-illustration">
          <div className="robot-illustration">
            <div className="robot-head">
              <div className="robot-eye left"></div>
              <div className="robot-eye right"></div>
              <div className="robot-mouth"></div>
            </div>
            <div className="robot-body">
              <div className="robot-arm left"></div>
              <div className="robot-arm right"></div>
              <div className="robot-antenna"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
