import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateModal from './UpdateModal';

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedToyData, setUpdatedToyData] = useState({
    name: '',
    quantity: '',
    description: '',
    picture: ''
  });

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await axios.get('http://localhost:5000/doll');
      setToys(response.data);
    } catch (error) {
      console.error('Failed to fetch toys:', error);
    }
  };

  const handleUpdateToy = (toy) => {
    setSelectedToy(toy);
    setUpdatedToyData({
      name: toy.name,
      quantity: toy.quantity,
      description: toy.description,
      picture: toy.picture
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/doll/${selectedToy._id}`, updatedToyData);
      fetchToys();
      setIsModalOpen(false); // Close the modal after updating
    } catch (error) {
      console.error('Failed to update toy:', error);
    }
  };

  const handleDeleteToy = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/doll/${id}`);
      fetchToys();
    } catch (error) {
      console.error('Failed to delete toy:', error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-5">My Toys</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <div key={toy._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={toy.picture} alt={toy.name} className="w-full mb-4" />
            <h2 className="text-lg font-semibold mb-2">{toy.name}</h2>
            <p>Price: {toy.price}</p>
            <p>Quantity: {toy.quantity}</p>
            <p>Description: {toy.description}</p>
            <div className="mt-4">
              <button onClick={() => handleUpdateToy(toy)} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">Update</button>
              <button onClick={() => handleDeleteToy(toy._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <UpdateModal isOpen={isModalOpen} onClose={handleModalClose} onUpdate={handleModalUpdate} updatedToyData={updatedToyData} setUpdatedToyData={setUpdatedToyData} />
    </div>
  );
};

export default MyToys;
