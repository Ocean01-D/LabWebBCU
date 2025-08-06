import React from 'react';
import { useCart } from './CartContext';

function Header() {
  const { getTotalItems, setCurrentPage, currentPage } = useCart();
  const totalItems = getTotalItems();

  const headerStyle = {
    backgroundColor: '#333',
    padding: '15px 0',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const navButtonStyle = {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    position: 'relative'
  };

  const activeNavStyle = {
    ...navButtonStyle,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderBottom: '2px solid #fff'
  };

  const cartButtonStyle = {
    ...navButtonStyle,
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  };

  const cartBadgeStyle = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    fontWeight: 'bold',
    minWidth: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: totalItems > 0 ? 'pulse 2s infinite' : 'none'
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .nav-button:hover {
            background-color: rgba(255,255,255,0.15) !important;
            transform: translateY(-1px);
          }
          .logo-button:hover {
            color: #f39c12 !important;
          }
        `}
      </style>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <button 
            onClick={() => setCurrentPage('products')}
            style={logoStyle}
            className="logo-button"
          >
            🛍️ E-Shop
          </button>
          <nav style={navStyle}>
            <button
              onClick={() => setCurrentPage('products')}
              style={currentPage === 'products' ? activeNavStyle : navButtonStyle}
              className="nav-button"
            >
              📦 Products
            </button>
            <button 
              onClick={() => setCurrentPage('cart')}
              style={currentPage === 'cart' ? {...activeNavStyle, ...cartButtonStyle} : cartButtonStyle}
              className="nav-button"
            >
              🛒 Cart
              {totalItems > 0 && (
                <span style={cartBadgeStyle}>
                  {totalItems}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
