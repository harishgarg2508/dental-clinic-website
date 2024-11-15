import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/backend/api/saveAppointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status === 'success') {
        alert('Appointment booked successfully!');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
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
        Mobile:
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
