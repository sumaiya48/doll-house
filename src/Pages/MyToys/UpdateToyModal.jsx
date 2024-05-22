import React, { useState } from 'react';

const UpdateToyModal = ({ isOpen, toy, onClose, onUpdate }) => {
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
      await onUpdate(updatedToy);
    } catch (error) {
      setMessage('Failed to update toy: ' + (error.response?.data?.message || error.message));
      console.error('Error updating toy:', error);
    }
  };

  return (
    <dialog id="update_toy_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
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
            <button className="btn btn-error mr-2" type="submit">Update</button>
            <button className="btn mt-3" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateToyModal;
