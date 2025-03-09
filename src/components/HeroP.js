import React, { useState } from 'react';
import './HeroP.css';
import ContactoModal from './ContactoModal';

const HeroMain = ({ heroTitle, heroSubtitle, heroImg, heroCards, onGeneralClick, onRoofingClick, activeSection }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollToCatalogContent = (section) => {
    const elementId = section.toLowerCase().includes('roofing') ? 'roofing-catalog' : 'general-catalog';
    const catalogContent = document.getElementById(elementId);
    if (catalogContent) {
      const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
      const offsetPosition = catalogContent.offsetTop - navbarHeight; 

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero-container">
      <div className="background-overlay"></div>
      <div className="hero-main-container">
        <div className="hero-left">
          <img src={heroImg} alt={heroTitle} className="hero-engineer-image" />
          <div className="hero-left-content">
            <h2 className="hero-title">{heroTitle}</h2>
            <p className="hero-subtitle">{heroSubtitle}</p>
            <div className="hero-buttons">
              <button className="hero-button" onClick={() => openModal('General Inquiry')}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          {heroCards.map((card, index) => (
            <div className="hero-card" key={index}>
              <h2 className="card-title">{card.title}</h2>
              <img src={card.img} alt={card.title} />
              <button
                className="card-button"
                onClick={() => {
                  scrollToCatalogContent(card.title);
                  if (card.title.toLowerCase().includes('roofing')) {
                    if (activeSection !== 'roofing') {
                      onRoofingClick();
                    }
                  } else {
                    if (activeSection !== 'general') {
                      onGeneralClick();
                    }
                  }
                }}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && <ContactoModal selectedProduct={selectedProduct} closeContactPanel={closeModal} />}
    </div>
  );
};

export default HeroMain;