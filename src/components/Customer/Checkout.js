import React, { useState } from 'react';
import axios from 'axios';

const Checkout = ({ cartItems, onCheckoutSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleCheckout = async () => {
    try {
      await axios.post('/api/checkout', { cartItems, paymentMethod });
      onCheckoutSuccess();
    } catch (error) {
      console.error('Checkout failed', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
      </select>
      <button onClick={handleCheckout}>Pay Now</button>
    </div>
  );
};

export default Checkout;
