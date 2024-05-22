import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <dialog id="delete_confirmation_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this toy?</p>
        <div className="modal-action">
          <button className="btn btn-error" onClick={onDelete}>Delete</button>
          <button className="btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteConfirmationModal;
