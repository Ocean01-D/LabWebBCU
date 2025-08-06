import React from 'react';

function GreetingCard({ name }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    margin: '10px auto',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}! Welcome to React.</h2>
    </div>
  );
}

export default GreetingCard;
