import React, { useState } from 'react';
import { useCart } from './CartContext';

function ProductDetails() {
  const { selectedProduct, addToCart, isLoading, setCurrentPage } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  
  if (!selectedProduct) {
    return (
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        marginTop: '20px'
      }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '20px'
        }}>😕</div>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#2c3e50'
        }}>Product Not Found</h2>
        <p style={{
          fontSize: '16px',
          color: '#7f8c8d',
          marginBottom: '30px'
        }}>Sorry, we couldn't find the product you're looking for.</p>
        <button 
          onClick={() => setCurrentPage('products')}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  };

  const backButtonStyle = {
    backgroundColor: 'transparent',
    color: '#3498db',
    border: '2px solid #3498db',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  };

  const imageContainerStyle = {
    position: 'relative'
  };

  const imageStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  const fallbackImageStyle = {
    width: '100%',
    height: '500px',
    backgroundColor: '#ecf0f1',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    color: '#7f8c8d'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#2c3e50'
  };

  const categoryStyle = {
    color: '#e74c3c',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const priceStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '20px'
  };

  const descriptionStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#34495e',
    marginBottom: '24px'
  };

  const stockInfoStyle = {
    padding: '16px',
    backgroundColor: selectedProduct.stock < 5 ? '#ffeaa7' : '#d1f2eb',
    borderRadius: '8px',
    marginBottom: '24px',
    border: `2px solid ${selectedProduct.stock < 5 ? '#fdcb6e' : '#00b894'}`
  };

  const stockTextStyle = {
    fontSize: '14px',
    color: '#2c3e50',
    marginBottom: '8px'
  };

  const urgencyTextStyle = {
    color: '#d63031',
    fontSize: '14px',
    fontWeight: '600'
  };

  const quantityContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '30px'
  };

  const quantityLabelStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#2c3e50'
  };

  const selectStyle = {
    border: '2px solid #ddd',
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '16px',
    backgroundColor: '#fff',
    cursor: 'pointer'
  };

  const addToCartButtonStyle = {
    backgroundColor: selectedProduct.stock === 0 ? '#95a5a6' : '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: selectedProduct.stock === 0 ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    opacity: isLoading ? 0.7 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  return (
    <>
      <style>
        {`
          .back-button:hover {
            background-color: #3498db !important;
            color: white !important;
            transform: translateX(-5px);
          }
          .add-to-cart-btn:hover:not(:disabled) {
            background-color: #c0392b !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(231, 76, 60, 0.3);
          }
          @media (max-width: 768px) {
            .product-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <button 
          onClick={() => setCurrentPage('products')}
          style={backButtonStyle}
          className="back-button"
        >
          ← Back to Products
        </button>
        
        <div style={gridStyle} className="product-grid">
          <div style={imageContainerStyle}>
            {!imageError ? (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={imageStyle}
                onError={() => setImageError(true)}
              />
            ) : (
              <div style={fallbackImageStyle}>
                <span>📷 Image not available</span>
              </div>
            )}
          </div>
          
          <div style={contentStyle}>
            <h1 style={titleStyle}>{selectedProduct.name}</h1>
            <p style={categoryStyle}>{selectedProduct.category}</p>
            <p style={priceStyle}>
              ${selectedProduct.price.toFixed(2)}
            </p>
            
            <p style={descriptionStyle}>{selectedProduct.description}</p>
            
            <div style={stockInfoStyle}>
              <p style={stockTextStyle}>
                <strong>📦 Stock:</strong> {selectedProduct.stock} items available
              </p>
              {selectedProduct.stock < 5 && selectedProduct.stock > 0 && (
                <p style={urgencyTextStyle}>
                  ⚠️ Hurry! Only {selectedProduct.stock} left in stock!
                </p>
              )}
            </div>
            
            <div style={quantityContainerStyle}>
              <label style={quantityLabelStyle}>Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={selectStyle}
                disabled={selectedProduct.stock === 0}
              >
                {[...Array(Math.min(selectedProduct.stock, 10))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={isLoading || selectedProduct.stock === 0}
              style={addToCartButtonStyle}
              className="add-to-cart-btn"
            >
              {selectedProduct.stock === 0 ? (
                <>❌ Out of Stock</>
              ) : (
                <>🛒 Add {quantity} to Cart</>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
