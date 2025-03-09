import React, { useState } from 'react';
import './HeroS.css';
import ContactoModal from './ContactoModal';

const HeroSimple = ({ heroTitle, heroSubtitle, heroImg, knowUsLink }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollFullDown = () => {
    // Calculate the full height of the document minus the viewport height
    const fullHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    window.scrollTo({
      top: fullHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="heroS-container">
      <div className="hero-mainS-container">
        {/* Hero Left - Título, Subtítulo y Botones */}
        <div className="heroS-left">
          <div className="heroS-image-container">
            <img src={heroImg} alt={heroTitle} className="heroS-engineer-image" />
          </div>
          <div className="heroS-left-content">
            <h2 className="heroS-title">{heroTitle}</h2>
            <p className="heroS-subtitle">{heroSubtitle}</p>
            <div className="heroS-buttons">
              {knowUsLink ? (
                <a href={knowUsLink} target="_blank" rel="noopener noreferrer">
                  <button className="heroS-button">Know Us</button>
                </a>
              ) : (
                <button className="heroS-button" onClick={scrollFullDown}>Know Us</button>
              )}
              <button className="heroS-button" onClick={() => openModal('General Inquiry')}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <ContactoModal selectedProduct={selectedProduct} closeContactPanel={closeModal} />}
    </div>
  );
};

export default HeroSimple;