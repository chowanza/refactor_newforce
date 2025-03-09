import React, { useState } from 'react';
import '../App.css'; // Asegúrate de que la ruta sea correcta
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !lastName || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    const formData = {
      name,
      lastName,
      email,
      phone,
      message
    };

    emailjs.send('service_ih9parg', 'template_god7cuo', formData, '4l9lg7uEBWREWNjzG')
      .then(() => {
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSuccess('Your message has been sent successfully!');
      })
      .catch(() => {
        setError('Failed to send message. Try again later.');
      });
  };

  return (
    <>
      <button onClick={toggleModal} className="open-modal-button">Contact Us</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={toggleModal} className="close-button">&times;</button>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="contact-title">Contact Us</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="query">Message:</label>
                <textarea id="query" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
              <div className="submit-button-container">
                <button type="submit" className="submit-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
