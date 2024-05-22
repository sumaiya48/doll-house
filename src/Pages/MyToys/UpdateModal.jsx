import React from 'react';

const UpdateModal = ({ isOpen, onClose, onUpdate }) => {
  const [updatedToyData, setUpdatedToyData] = React.useState({
    name: '',
    quantity: '',
    description: '',
    picture: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedToyData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    onUpdate(updatedToyData);
    setUpdatedToyData({
      name: '',
      quantity: '',
      description: '',
      picture: ''
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'modal-active' : ''}`}>
      <div className="modal-box">
        <div className="modal-header">
          <h3 className="modal-title">Update Toy</h3>
          <button onClick={onClose} className="btn btn-ghost modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-control">
            <label className="label">
              Name:
              <input
                type="text"
                name="name"
                value={updatedToyData.name}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              Quantity:
              <input
                type="text"
                name="quantity"
                value={updatedToyData.quantity}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              Description:
              <textarea
                name="description"
                value={updatedToyData.description}
                onChange={handleChange}
                className="textarea"
              ></textarea>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              Picture:
              <input
                type="text"
                name="picture"
                value={updatedToyData.picture}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleUpdate} className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
