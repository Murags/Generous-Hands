import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupModal = ({ closeModal, openLoginModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming signup is successful:
    closeModal();
    openLoginModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Sign Up</h2>
          <button className="modal-close-button" onClick={closeModal}>&times;</button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Organization's Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Information</label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="modal-submit-button">Sign Up</button>
        </form>
        <div className="modal-switch">
          <button onClick={() => {
            closeModal();
            openLoginModal();
          }}>
            Already have an account? Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
