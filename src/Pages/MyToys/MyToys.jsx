import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateToyModal from './UpdateToyModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toyToDelete, setToyToDelete] = useState(null);

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
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalUpdate = async (updatedToy) => {
    try {
      await axios.put(`http://localhost:5000/doll/${selectedToy._id}`, updatedToy);
      fetchToys();
      setIsModalOpen(false); // Close the modal after updating
    } catch (error) {
      console.error('Failed to update toy:', error.response?.data?.message || error.message);
    }
  };

  const handleDeleteToy = (toy) => {
    setToyToDelete(toy);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const confirmDeleteToy = async () => {
    if (toyToDelete) {
      try {
        await axios.delete(`http://localhost:5000/doll/${toyToDelete._id}`);
        fetchToys();
      } catch (error) {
        console.error('Failed to delete toy:', error.response?.data?.message || error.message);
      } finally {
        setIsDeleteModalOpen(false);
        setToyToDelete(null);
      }
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
              <button onClick={() => handleDeleteToy(toy)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {selectedToy && (
        <UpdateToyModal 
          isOpen={isModalOpen} 
          toy={selectedToy} 
          onClose={handleModalClose} 
          onUpdate={handleModalUpdate} 
        />
      )}
      <DeleteConfirmationModal 
        isOpen={isDeleteModalOpen} 
        onClose={handleDeleteModalClose} 
        onDelete={confirmDeleteToy} 
      />
    </div>
  );
};

export default MyToys;
