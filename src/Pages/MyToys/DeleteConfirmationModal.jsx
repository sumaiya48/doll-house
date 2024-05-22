
import Modal from 'react-modal';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this toy?</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default DeleteConfirmationModal;
