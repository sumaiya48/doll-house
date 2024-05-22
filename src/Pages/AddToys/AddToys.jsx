import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';


const AddToys = () => {
  const { user } = useContext(AuthContext); 
  const [pictureURL, setPictureURL] = useState('');
  const [name, setName] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newToy = {
      pictureURL,
      name,
      
      subCategory,
      price: parseFloat(price),
      rating: parseFloat(rating),
      quantity: parseInt(quantity),
      description,
    };

    try {
      const response = await axios.post('http://localhost:5000/doll', newToy);
      setMessage('Toy added successfully!');
      // Clear form fields after successful submission
      setPictureURL('');
      setName('');
      setSubCategory('');
      setPrice('');
      setRating('');
      setQuantity('');
      setDescription('');
    } catch (error) {
      setMessage('Failed to add toy. Please try again.');
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
        
      <div className="hero-content flex-col lg:flex-row-reverse">
      
        <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            {message && <p>{message}</p>}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input 
                    type="url" 
                    value={pictureURL} 
                    onChange={(e) => setPictureURL(e.target.value)} 
                    placeholder="Picture URL" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Sub-category</span>
                  </label>
                  <input 
                    type="text" 
                    value={subCategory} 
                    onChange={(e) => setSubCategory(e.target.value)} 
                    placeholder="Sub-category" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    placeholder="Price" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
               
              </div>
              <div className="w-full lg:w-1/2 px-3">
               
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input 
                    type="number" 
                    step="0.1" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    placeholder="Rating" 
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
                    placeholder="Available Quantity" 
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
                    placeholder="Detail Description" 
                    className="textarea textarea-bordered" 
                    required 
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error" type="submit">Add Toy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
