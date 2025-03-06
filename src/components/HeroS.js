import React from 'react';
import './HeroS.css';

const HeroSimple = ({ heroTitle, heroSubtitle, heroImg, knowUsLink }) => {

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
    const offsetPosition = catalogContent.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
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
                <button className="heroS-button" onClick={scrollToCatalogContent}>Know Us</button>
              )}
              <button className="heroS-button" onClick={scrollToContactForm}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSimple;
