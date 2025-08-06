import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, setCurrentPage } = useCart();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#2c3e50'
  };

  const emptyCartStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '60px 40px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    marginTop: '20px'
  };

  const emptyIconStyle = {
    fontSize: '80px',
    marginBottom: '20px'
  };

  const emptyTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#2c3e50'
  };

  const emptyTextStyle = {
    fontSize: '16px',
    color: '#7f8c8d',
    marginBottom: '30px'
  };

  const continueShoppingStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px'
  };

  if (cartItems.length === 0) {
    return (
      <>
        <style>
          {`
            .continue-shopping-btn:hover {
              background-color: #2980b9 !important;
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
            }
          `}
        </style>
        <div style={containerStyle}>
          <div style={emptyCartStyle}>
            <div style={emptyIconStyle}>🛒</div>
            <h2 style={emptyTitleStyle}>Your Cart is Empty</h2>
            <p style={emptyTextStyle}>
              Looks like you haven't added any items to your cart yet.<br/>
              Start shopping to find amazing products!
            </p>
            <button
              onClick={() => setCurrentPage('products')}
              style={continueShoppingStyle}
              className="continue-shopping-btn"
            >
              🛍️ Continue Shopping
            </button>
          </div>
        </div>
      </>
    );
  }

  const cartContainerStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  };

  const cartHeaderStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px 30px',
    borderBottom: '2px solid #e9ecef',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const itemCountStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50'
  };

  const cartItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '25px 30px',
    borderBottom: '1px solid #ecf0f1',
    transition: 'background-color 0.3s ease'
  };

  const itemImageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const itemInfoStyle = {
    flex: 1,
    marginRight: '20px'
  };

  const itemNameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '8px'
  };

  const itemPriceStyle = {
    fontSize: '16px',
    color: '#7f8c8d',
    marginBottom: '4px'
  };

  const itemCategoryStyle = {
    fontSize: '14px',
    color: '#95a5a6',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginRight: '20px'
  };

  const quantityButtonStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#ecf0f1',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2c3e50',
    transition: 'all 0.3s ease'
  };

  const quantityDisplayStyle = {
    minWidth: '40px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50'
  };

  const itemTotalStyle = {
    textAlign: 'right',
    minWidth: '120px'
  };

  const itemTotalPriceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: '8px'
  };

  const removeButtonStyle = {
    backgroundColor: 'transparent',
    color: '#e74c3c',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'underline',
    transition: 'color 0.3s ease'
  };

  const cartFooterStyle = {
    padding: '30px',
    backgroundColor: '#f8f9fa'
  };

  const totalSectionStyle = {
    marginBottom: '25px',
    textAlign: 'right'
  };

  const totalLabelStyle = {
    fontSize: '16px',
    color: '#7f8c8d',
    marginBottom: '8px'
  };

  const totalPriceStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#27ae60'
  };

  const actionButtonsStyle = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  };

  const clearButtonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const checkoutButtonStyle = {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '12px 32px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <>
      <style>
        {`
          .cart-item:hover {
            background-color: #f8f9fa;
          }
          .quantity-btn:hover {
            background-color: #3498db !important;
            color: white !important;
            transform: scale(1.1);
          }
          .remove-btn:hover {
            color: #c0392b !important;
            font-weight: 600;
          }
          .clear-btn:hover {
            background-color: #c0392b !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
          }
          .checkout-btn:hover {
            background-color: #229954 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
          }
          @media (max-width: 768px) {
            .cart-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 15px;
            }
            .action-buttons {
              justify-content: center !important;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <h1 style={titleStyle}>🛒 Shopping Cart</h1>
        
        <div style={cartContainerStyle}>
          <div style={cartHeaderStyle}>
            <div style={itemCountStyle}>
              📦 {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in your cart
            </div>
          </div>

          {cartItems.map(item => (
            <div key={item.id} style={cartItemStyle} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                style={itemImageStyle}
              />
              <div style={itemInfoStyle}>
                <h3 style={itemNameStyle}>{item.name}</h3>
                <p style={itemPriceStyle}>${item.price.toFixed(2)} each</p>
                <p style={itemCategoryStyle}>{item.category}</p>
              </div>
              <div style={quantityControlStyle}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={quantityButtonStyle}
                  className="quantity-btn"
                >
                  −
                </button>
                <span style={quantityDisplayStyle}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={quantityButtonStyle}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <div style={itemTotalStyle}>
                <p style={itemTotalPriceStyle}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={removeButtonStyle}
                  className="remove-btn"
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
          
          <div style={cartFooterStyle}>
            <div style={totalSectionStyle}>
              <div style={totalLabelStyle}>Total Amount:</div>
              <div style={totalPriceStyle}>
                💰 ${getTotalPrice().toFixed(2)}
              </div>
            </div>
            <div style={actionButtonsStyle} className="action-buttons">
              <button
                onClick={clearCart}
                style={clearButtonStyle}
                className="clear-btn"
              >
                🗑️ Clear Cart
              </button>
              <button
                onClick={() => setCurrentPage('checkout')}
                style={checkoutButtonStyle}
                className="checkout-btn"
              >
                🎉 Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default CartPage;
