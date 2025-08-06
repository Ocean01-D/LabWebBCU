import React from 'react';

function Loading() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
    backgroundColor: '#f8f9fa'
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '4px solid #e3e3e3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px'
  };

  const textStyle = {
    fontSize: '18px',
    color: '#7f8c8d',
    fontWeight: '500',
    textAlign: 'center'
  };

  const dotsStyle = {
    fontSize: '24px',
    color: '#3498db',
    animation: 'dots 1.5s steps(5, end) infinite'
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes dots {
            0%, 20% { content: ''; }
            40% { content: '.'; }
            60% { content: '..'; }
            80%, 100% { content: '...'; }
          }
          .dots::after {
            content: '';
            animation: dots 1.5s steps(5, end) infinite;
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={spinnerStyle}></div>
        <div style={textStyle}>
          Loading<span className="dots" style={dotsStyle}></span>
        </div>
      </div>
    </>
  );
}

export default Loading;
