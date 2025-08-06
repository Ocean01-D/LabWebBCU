import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={toggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '6px',
          backgroundColor: isVisible ? '#f44336' : '#4CAF50',
          color: 'white',
          marginBottom: '10px',
          cursor: 'pointer'
        }}
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <p style={{ maxWidth: '400px', margin: 'auto' }}>
          Blank content is displayed here.
        </p>
      )}
    </div>
  );
}

export default ToggleVisibility;
