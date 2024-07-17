import React, { useState } from 'react';

const Donations = () => {
  const [thankYouForms, setThankYouForms] = useState({});

  const toggleThankYouForm = (donor) => {
    setThankYouForms((prevForms) => ({
      ...prevForms,
      [donor]: !prevForms[donor],
    }));
  };

  const sendThankYouMessage = (donor) => {
    const message = thankYouForms[donor] || "";
    if (message.trim() === "") {
      alert("Please write a thank you message.");
      return;
    }
    alert(`Thank you message sent to ${donor}: ${message}`);
    setThankYouForms((prevForms) => ({
      ...prevForms,
      [donor]: "",
    }));
  };

  const handleTextareaChange = (donor, event) => {
    const { value } = event.target;
    setThankYouForms((prevForms) => ({
      ...prevForms,
      [donor]: value,
    }));
  };

  return (
    <section id="donations" className="section">
      <h2>Manage Donations</h2>
      <table>
        <thead>
          <tr>
            <th>Donor</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Region</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Mwangi</td>
            <td>Clothes</td>
            <td>5</td>
            <td>Nairobi</td>
            <td>Received</td>
            <td>
              <button className="thank-you-btn" onClick={() => toggleThankYouForm('John Mwangi')}>
                Send Thank You
              </button>
              <div className={`thank-you-form ${thankYouForms['John Mwangi'] ? '' : 'hidden'}`}>
                <textarea
                  placeholder="Write your thank you message..."
                  value={thankYouForms['John Mwangi'] || ''}
                  onChange={(event) => handleTextareaChange('John Mwangi', event)}
                ></textarea>
                <button onClick={() => sendThankYouMessage('John Mwangi')}>Send</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Jane Wanjiku</td>
            <td>Food</td>
            <td>10</td>
            <td>Mombasa</td>
            <td>Pending</td>
            <td>
              <button className="thank-you-btn" onClick={() => toggleThankYouForm('Jane Wanjiku')}>
                Send Thank You
              </button>
              <div className={`thank-you-form ${thankYouForms['Jane Wanjiku'] ? '' : 'hidden'}`}>
                <textarea
                  placeholder="Write your thank you message..."
                  value={thankYouForms['Jane Wanjiku'] || ''}
                  onChange={(event) => handleTextareaChange('Jane Wanjiku', event)}
                ></textarea>
                <button onClick={() => sendThankYouMessage('Jane Wanjiku')}>Send</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Donations;
