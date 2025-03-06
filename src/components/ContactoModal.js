import React from 'react';

const ContactoModal = ({ selectedProduct, closeContactPanel, message }) => {
  const defaultMessage = `Hello, I am interested in ${selectedProduct}.`;
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);


  return (
    <div className="contact-panel-overlay">
      <div className="contact-panel">
        <h3>Contact Us about {selectedProduct}</h3>
        <div className="footer-icons">
          <a href={`https://wa.me/+14076837106?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
          </a>
          <a href="https://www.instagram.com/newforceconstruction/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="https://www.facebook.com/share/tGtd6kqaN6ZwLfsR/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
          </a>
        </div>
        <button onClick={closeContactPanel} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default ContactoModal;
