import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    discount: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', product);
      onProductAdded();
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
      <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />
      <input name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" />
      <input name="price" value={product.price} onChange={handleChange} placeholder="Price" />
      <input name="discount" value={product.discount} onChange={handleChange} placeholder="Discount" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
