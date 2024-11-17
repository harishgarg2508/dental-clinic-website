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
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      console.log('Sending data:', formData);

      const response = await fetch('http://localhost/dental-clinic-website/backend/api/saveAppointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response text:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        throw new Error('Invalid JSON response from server');
      }

      if (data.status === 'success') {
        alert('Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          date: '',
          time: '',
          notes: '',
        });
      } else {
        setError('Error: ' + (data.message || 'Unknown error occurred'));
      }
    } catch (error) {
      console.error('Error:', error);
      setError(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}