import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactoModal.css';

const ContactoModal = ({ selectedProduct, closeContactPanel }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: `Hello, I am interested in ${selectedProduct || 'this product'}.`,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        message: `Hello, I am interested in ${selectedProduct}.`,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    emailjs.send('service_ih9parg', 'template_god7cuo', formData, '4l9lg7uEBWREWNjzG')
      .then(() => {
        setFormData({ name: '', lastName: '', email: '', phone: '', message: '' });
        setSuccess('Your message has been sent successfully!');
      })
      .catch(() => {
        setError('Failed to send message. Try again later.');
      });
  };

  const encodedMessage = encodeURIComponent(formData.message);

  return (
    <div className="contact-panel-overlay">
      <div className="contact-panel" role="dialog" aria-label="Contact Form">
        <button onClick={closeContactPanel} className="close-button" aria-label="Close">&times;</button>
        <h3>Contact Us about {selectedProduct || 'this product'}</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>

          {error && <p className="error-message" aria-live="assertive">{error}</p>}
          {success && <p className="success-message" aria-live="assertive">{success}</p>}

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="footer-icons">
          <a href={`https://wa.me/+14076837106?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/newforceconstruction/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/share/tGtd6kqaN6ZwLfsR/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactoModal;