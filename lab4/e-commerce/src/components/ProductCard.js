import React from 'react';
import { useCart } from './CartContext';

function ProductCard({ product }) {
  const { addToCart, isLoading, setCurrentPage, setSelectedProduct } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleViewDetails = () => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '200px'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const contentStyle = {
    padding: '16px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#2c3e50',
    transition: 'color 0.3s ease'
  };

  const categoryStyle = {
    color: '#7f8c8d',
    fontSize: '14px',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const priceContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#e74c3c'
  };

  const buttonStyle = {
    backgroundColor: product.stock === 0 ? '#95a5a6' : '#3498db',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    opacity: isLoading ? 0.7 : 1
  };

  const stockWarningStyle = {
    color: '#e67e22',
    fontSize: '12px',
    marginTop: '8px',
    fontWeight: '500'
  };

  const stockBadgeStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: product.stock < 5 ? '#e74c3c' : '#27ae60',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  return (
    <>
      <style>
        {`
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
          }
          .product-card:hover .product-image {
            transform: scale(1.05);
          }
          .product-card:hover .product-title {
            color: #3498db !important;
          }
          .product-button:hover:not(:disabled) {
            background-color: #2980b9 !important;
            transform: translateY(-1px);
          }
        `}
      </style>
      <div style={cardStyle} className="product-card">
        <div style={imageContainerStyle} onClick={handleViewDetails}>
          <img
            src={product.image}
            alt={product.name}
            style={imageStyle}
            className="product-image"
          />
          <div style={stockBadgeStyle}>
            {product.stock < 5 ? `Only ${product.stock} left!` : 'In Stock'}
          </div>
        </div>
        <div style={contentStyle}>
          <div onClick={handleViewDetails}>
            <h3 style={titleStyle} className="product-title">
              {product.name}
            </h3>
          </div>
          <p style={categoryStyle}>{product.category}</p>
          <div style={priceContainerStyle}>
            <span style={priceStyle}>
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={isLoading || product.stock === 0}
              style={buttonStyle}
              className="product-button"
            >
              {product.stock === 0 ? '❌ Out of Stock' : '🛒 Add to Cart'}
            </button>
          </div>
          {product.stock < 5 && product.stock > 0 && (
            <p style={stockWarningStyle}>⚠️ Only {product.stock} left!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
