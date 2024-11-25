import React, { useState } from 'react';
import './AppointmentForm.css';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    time: '',
    notes: '',
  });
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('');
    setIsLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('mobile', formData.mobile);
    form.append('date', formData.date);
    form.append('time', formData.time);
    form.append('notes', formData.notes);
    form.append('access_key', 'e8b365d1-ba0f-486e-b3e8-b4cb642adecc');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          date: '',
          time: '',
          notes: '',
        });
      } else {
        setResult('Error: Something went wrong. Please try again.');
        console.error('Form submission error:', data);
      }
    } catch (error) {
      setResult('Network error. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2 style={{ color: 'black' }}>Book an Appointment</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mobile:
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Notes:
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
        {result && <p className="result-message">{result}</p>}
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
          <h2 style={{ color: "black" }}>Appointment Booked Successfully!</h2>
          <p style={{ color: "black" }}>We have received your message and will contact you shortly.</p>

            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}