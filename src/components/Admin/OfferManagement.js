import React, { useState } from 'react';
import axios from 'axios';

const OfferManagement = ({ onOfferAdded }) => {
  const [offer, setOffer] = useState({
    productId: '',
    discount: '',
    description: ''
  });

  const handleChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/offers', offer);
      onOfferAdded();
    } catch (error) {
      console.error('Error adding offer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="productId" value={offer.productId} onChange={handleChange} placeholder="Product ID" />
      <input name="discount" value={offer.discount} onChange={handleChange} placeholder="Discount" />
      <input name="description" value={offer.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Add Offer</button>
    </form>
  );
};

export default OfferManagement;
