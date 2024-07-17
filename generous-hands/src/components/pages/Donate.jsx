import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import donations from './Dashboard/data';

const Donate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    item: '',
    quantity: '',
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
    const newDonation = {
      donorName: formData.name,
      item: formData.item,
      quantity: parseInt(formData.quantity),
      region: '', // add region field if needed
      location: { lat: 0, lng: 0 }, // add location coordinates
      details: `${formData.quantity} units of ${formData.item}`,
      contact: formData.email,
      category: formData.item, // you might need to map this to a proper category
      date: new Date().toISOString().split('T')[0], // current date
      pickupStatus: 'Scheduled',
      deliveryStatus: 'In Transit',
    };

    donations.push(newDonation);
    alert('Donation submitted successfully!');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="donate-body">
      <main className="main">
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <button className="btn btn--back" onClick={handleBack}>Back</button>
                <form className="form" id="donating-form" onSubmit={handleSubmit}>
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start donating now</h2>
                  </div>
                  <div className="form__group">
                    <input className="form__input" type="text" placeholder="Full name" id="name" value={formData.name} onChange={handleChange} required />
                    <label className="form__label" htmlFor="name">Full name</label>
                  </div>
                  <div className="form__group">
                    <input className="form__input" type="email" placeholder="Email address" id="email" value={formData.email} onChange={handleChange} required />
                    <label className="form__label" htmlFor="email">Email address</label>
                  </div>
                  <div className="form__group">
                    <input className="form__input" type="text" placeholder="Phone Number" id="phone" value={formData.phone} onChange={handleChange} required />
                    <label className="form__label" htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="form__group">
                    <input className="form__input" type="text" placeholder="Item" id="item" value={formData.item} onChange={handleChange} required />
                    <label className="form__label" htmlFor="item">Item</label>
                  </div>
                  <div className="form__group">
                    <input className="form__input" type="number" min="1" placeholder="Number of items" id="quantity" value={formData.quantity} onChange={handleChange} required />
                    <label className="form__label" htmlFor="quantity">Quantity</label>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--orange" id="book-btn" type="submit">Donate &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Donate;
