import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
