import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart, setCurrentPage, orderPlaced, setOrderPlaced } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      setCurrentPage('cart');
    }
  }, [cartItems, orderPlaced, setCurrentPage]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.address.trim()) newErrors.address = 'Address required';
    if (!formData.city.trim()) newErrors.city = 'City required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOrderPlaced(true);
      clearCart();
      setTimeout(() => {
        setOrderPlaced(false);
        setCurrentPage('products');
      }, 3000);
    }
  };

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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px'
  };

  const sectionStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const orderItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ecf0f1',
    paddingBottom: '15px',
    marginBottom: '15px'
  };

  const itemInfoStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const itemNameStyle = {
    fontWeight: '600',
    fontSize: '16px',
    color: '#2c3e50',
    marginBottom: '4px'
  };

  const itemQuantityStyle = {
    color: '#7f8c8d',
    fontSize: '14px'
  };

  const itemPriceStyle = {
    fontWeight: '600',
    fontSize: '16px',
    color: '#e74c3c'
  };

  const totalContainerStyle = {
    paddingTop: '20px',
    borderTop: '2px solid #3498db'
  };

  const totalStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#27ae60'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#2c3e50'
  };

  const inputStyle = {
    width: '100%',
    border: '2px solid #ddd',
    borderRadius: '6px',
    padding: '12px 16px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  };

  const errorInputStyle = {
    ...inputStyle,
    borderColor: '#e74c3c'
  };

  const errorTextStyle = {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '4px'
  };

  const gridTwoStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  };

  const placeOrderButtonStyle = {
    width: '100%',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  if (orderPlaced) {
    return (
      <div style={containerStyle}>
        <div style={{
          ...sectionStyle,
          textAlign: 'center',
          backgroundColor: '#d1f2eb',
          border: '2px solid #00b894'
        }}>
          <div style={{
            fontSize: '64px',
            marginBottom: '20px'
          }}>✅</div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#00b894'
          }}>Order Placed Successfully!</h2>
          <p style={{
            fontSize: '16px',
            color: '#2c3e50',
            marginBottom: '20px'
          }}>Thank you for your purchase! Your order is being processed.</p>
          <p style={{
            fontSize: '14px',
            color: '#7f8c8d'
          }}>You will be redirected to the homepage shortly...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .form-input:focus {
            border-color: #3498db !important;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
          }
          .place-order-btn:hover {
            background-color: #229954 !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(39, 174, 96, 0.3);
          }
          @media (max-width: 768px) {
            .checkout-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .form-grid-two {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <h1 style={titleStyle}>🛒 Checkout</h1>
        
        <div style={gridStyle} className="checkout-grid">
          {/* Order Summary */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              📋 Order Summary
            </h2>
            {cartItems.map(item => (
              <div key={item.id} style={orderItemStyle}>
                <div style={itemInfoStyle}>
                  <p style={itemNameStyle}>{item.name}</p>
                  <p style={itemQuantityStyle}>Qty: {item.quantity}</p>
                </div>
                <p style={itemPriceStyle}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div style={totalContainerStyle}>
              <div style={totalStyle}>
                <span>💰 Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              🚚 Shipping Information
            </h2>
            <form onSubmit={handlePlaceOrder}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>📧 Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={errors.email ? errorInputStyle : inputStyle}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <p style={errorTextStyle}>{errors.email}</p>}
              </div>
              
              <div style={gridTwoStyle} className="form-grid-two">
                <div style={formGroupStyle}>
                  <label style={labelStyle}>👤 First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={errors.firstName ? errorInputStyle : inputStyle}
                    className="form-input"
                    placeholder="First name"
                    required
                  />
                  {errors.firstName && <p style={errorTextStyle}>{errors.firstName}</p>}
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>👤 Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={errors.lastName ? errorInputStyle : inputStyle}
                    className="form-input"
                    placeholder="Last name"
                    required
                  />
                  {errors.lastName && <p style={errorTextStyle}>{errors.lastName}</p>}
                </div>
              </div>
              
              <div style={formGroupStyle}>
                <label style={labelStyle}>🏠 Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  style={errors.address ? errorInputStyle : inputStyle}
                  className="form-input"
                  placeholder="Enter your address"
                  required
                />
                {errors.address && <p style={errorTextStyle}>{errors.address}</p>}
              </div>
              
              <div style={gridTwoStyle} className="form-grid-two">
                <div style={formGroupStyle}>
                  <label style={labelStyle}>🏙️ City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={errors.city ? errorInputStyle : inputStyle}
                    className="form-input"
                    placeholder="City"
                    required
                  />
                  {errors.city && <p style={errorTextStyle}>{errors.city}</p>}
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>📮 Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    style={errors.zipCode ? errorInputStyle : inputStyle}
                    className="form-input"
                    placeholder="Zip code"
                    required
                  />
                  {errors.zipCode && <p style={errorTextStyle}>{errors.zipCode}</p>}
                </div>
              </div>
              
              <button
                type="submit"
                style={placeOrderButtonStyle}
                className="place-order-btn"
              >
                🎉 Place Order - ${getTotalPrice().toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default CheckoutPage;
