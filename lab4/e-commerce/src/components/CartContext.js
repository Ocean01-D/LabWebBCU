import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart Provider với state persistence
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setIsLoading(true);
    setTimeout(() => {
      setCartItems(prev => {
        const existingItem = prev.find(item => item.id === product.id);
        if (existingItem) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prev, { ...product, quantity }];
      });
      setIsLoading(false);
    }, 300);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      isLoading,
      currentPage,
      setCurrentPage,
      selectedProduct,
      setSelectedProduct,
      orderPlaced,
      setOrderPlaced
    }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };