import React from 'react';
import './HeroP.css';

const HeroMain = ({ heroTitle, heroSubtitle, heroImg, heroCards, onGeneralClick, onRoofingClick, activeSection }) => {

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
    const offsetPosition = contactForm.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const scrollToCatalogContent = () => {
    const catalogContent = document.getElementById('catalog-content');
    const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
    const offsetPosition = catalogContent.offsetTop + catalogContent.offsetHeight -  navbarHeight -680;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero-container">
      <div className="background-overlay"></div>
      <div className="hero-main-container">
        {/* Hero Left - Título, Subtítulo y Botones */}
        <div className="hero-left">
          <img src={heroImg} alt={heroTitle} className="hero-engineer-image" />
          <div className="hero-left-content">
            <h2 className="hero-title">{heroTitle}</h2>
            <p className="hero-subtitle">{heroSubtitle}</p>
            <div className="hero-buttons">
              <button className="hero-button" onClick={scrollToContactForm}>Contact Us</button>
            </div>
          </div>
        </div>

        {/* Hero Right - Múltiples tarjetas para la página principal */}
        <div className="hero-right">
          {heroCards.map((card, index) => (
            <div className="hero-card" key={index}>
              <h2 className="card-title">{card.title}</h2>
              <img src={card.img} alt={card.title} />
              <button
        className="card-button"
        onClick={() => {
          scrollToCatalogContent();
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
    </div>
  );
};

export default HeroMain;