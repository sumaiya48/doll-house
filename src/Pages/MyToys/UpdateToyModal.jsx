import React, { useState } from 'react';
import axios from 'axios';

const UpdateToyModal = ({ toy, onClose, onUpdate }) => {
  const [price, setPrice] = useState(toy.price);
  const [quantity, setQuantity] = useState(toy.quantity);
  const [description, setDescription] = useState(toy.description);
  const [message, setMessage] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();

    const updatedToy = {
      ...toy,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      description,
    };

    try {
      const response = await axios.put(`http://localhost:5000/doll/${toy._id}`, updatedToy);
      onUpdate(response.data);
    } catch (error) {
      setMessage('Failed to update toy');
      console.error('Error updating toy:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl mb-4">Update Toy</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleUpdate}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
              className="input input-bordered" 
              required 
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="textarea textarea-bordered" 
              required 
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary mr-2" type="submit">Update</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToyModal;
