import React from 'react';
import './LearningOutcomes.css';

const LearningOutcomes = () => {
  const outcomes = [
    {
      icon: '🤖',
      title: 'Understanding AI Basics',
      description: 'Learn the fundamentals of Artificial Intelligence and how machines think.'
    },
    {
      icon: '⚙️',
      title: 'Learning Robotics Fundamentals',
      description: 'Understand how robots work and build simple robotic systems.'
    },
    {
      icon: '🔧',
      title: 'Building Mini Projects',
      description: 'Create exciting hands-on projects to apply what you learn.'
    },
    {
      icon: '💡',
      title: 'Developing Problem Solving Skills',
      description: 'Enhance critical thinking and solve complex problems creatively.'
    },
    {
      icon: '💻',
      title: 'Understanding Coding Logic',
      description: 'Learn programming concepts and write your first lines of code.'
    }
  ];

  return (
    <section className="learning-outcomes-section">
      <div className="learning-outcomes-container">
        <h2 className="learning-outcomes-title">What Students Will Learn</h2>
        <div className="outcomes-grid">
          {outcomes.map((outcome, index) => (
            <div key={index} className="outcome-card">
              <div className="outcome-icon">{outcome.icon}</div>
              <h3 className="outcome-title">{outcome.title}</h3>
              <p className="outcome-description">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
