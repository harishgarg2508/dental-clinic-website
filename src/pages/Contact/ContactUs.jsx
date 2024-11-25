import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
    form.append('access_key', 'e8b365d1-ba0f-486e-b3e8-b4cb642adecc'); // Replace with your actual Web3Forms access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        setShowPopup(true); // Show popup after successful submission
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowPopup(false), 3000); // Auto-hide popup after 3 seconds
      } else {
        setResult('Something went wrong. Please try again.');
        console.error('Form submission error:', data);
      }
    } catch (error) {
      setResult('Network error. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className={`contact-us`}>
      <Navbar />
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to reach out with any questions or concerns.</p>
      </header>
      <section className="contact-form-section">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
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
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
          {result && <p className="result-message">{result}</p>}
        </form>
      </section>
      <Footer />

      {/* Popup for Thank You message */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            borderRadius: '8px',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: 'black', marginBottom: '10px' }}>
            Thank You!
          </h2>
          <p style={{ color: 'black' }}>
            Thank you for contacting us. We will get back to you shortly.
          </p>
          <button
            onClick={() => setShowPopup(false)}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
