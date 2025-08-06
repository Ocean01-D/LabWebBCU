import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Các component trang riêng
function Home() {
  return <h2>🏠 Welcome to the Home Page (Maybe) </h2>;
}

function About() {
  return <h2>ℹ️ This is the About Page (Maybe too)</h2>;
}

function Contact() {
  return <h2>📬And the Contact (Yup) </h2>;
}

function NavigationApp() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navigation menu */}
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>

        {/* Nội dung mỗi trang */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Style đơn giản
const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px'
};

export default NavigationApp;
