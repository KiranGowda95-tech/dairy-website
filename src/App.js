import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Notification from './components/Shared/Notifications';
import Login from './components/Login';
import ProductForm from './components/Admin/ProductForm';
import ProductList from './components/Admin/ProductList';
import OfferManagement from './components/Admin/OfferManagement';
import ProductCatalog from './components/Customer/ProductCatalog';
import ProductDetails from './components/Customer/ProductDetails';
import Cart from './components/Customer/Cart';
import Checkout from './components/Customer/Checkout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUserType(userData.type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userType={userType} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<ProductCatalog onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn && userType === 'admin' && (
          <>
            <Route path="/admin/products" element={<ProductList />} />
            <Route path="/admin/add-product" element={<ProductForm onProductAdded={() => {}} />} />
            <Route path="/admin/offers" element={<OfferManagement onOfferAdded={() => {}} />} />
          </>
        )}
        {isLoggedIn && userType === 'customer' && (
          <>
            <Route path="/products" element={<ProductCatalog onAddToCart={handleAddToCart} />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} onCheckoutSuccess={handleCheckoutSuccess} />} />
          </>
        )}
      </Routes>
      <Notification message="" type="" />
      <Footer />
    </Router>
  );
};

export default App;
