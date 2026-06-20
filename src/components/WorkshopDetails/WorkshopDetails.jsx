import React from 'react';
import './WorkshopDetails.css';

const WorkshopDetails = () => {
  const details = [
    {
      icon: '👶',
      label: 'Age Group',
      value: '8–14 Years'
    },
    {
      icon: '📅',
      label: 'Duration',
      value: '4 Weeks'
    },
    {
      icon: '💻',
      label: 'Mode',
      value: 'Online'
    },
    {
      icon: '💰',
      label: 'Fee',
      value: '₹2,999'
    },
    {
      icon: '🚀',
      label: 'Start Date',
      value: '15 July 2026'
    }
  ];

  return (
    <section className="workshop-details-section">
      <div className="workshop-details-container">
        <h2 className="workshop-details-title">Workshop Details</h2>
        <div className="details-grid">
          {details.map((detail, index) => (
            <div key={index} className="detail-card">
              <div className="detail-icon">{detail.icon}</div>
              <div className="detail-content">
                <h3 className="detail-label">{detail.label}</h3>
                <p className="detail-value">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
