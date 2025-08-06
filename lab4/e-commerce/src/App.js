import React from 'react';
import { CartProvider, useCart } from './components/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from './components/CheckoutPage';

function AppContent() {
  const { currentPage } = useCart();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductList />;
      case 'product-details':
        return <ProductDetails />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      default:
        return <ProductList />;
    }
  };

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const mainStyle = {
    paddingTop: '20px',
    paddingBottom: '40px'
  };

  return (
    <div style={appStyle}>
      <Header />
      <main style={mainStyle}>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;