// src/pages/InvestWithUs.js
import React from 'react';
import './InvestWithUs.css';

import Header from '../components/Header';
import Hero from '../components/HeroS';
import IconoTitulo from '../components/Icono_titulo';
import icon from '../img/PARA PAGINA/CASA.png'
import ContactForm from '../components/ContactForm';


import investImage from '../img/PARA PAGINA/pngwing.com (31).png';


import contactImage from '../img/contact-image.jpg'
import Socials from '../components/Socials';



function InvestWithUs() {
  return (
    <div className="invest-with-us-page">
      {/* Header */}
      <Header currentPage="invest"/>
      <Hero
        heroTitle="Invest with Us"
        heroSubtitle="Partner with us for high-quality construction projects."
        heroImg={investImage}
        knowUsLink="https://www.zzzventurescapital.com/"
      />
      {/* Hero Section */}
      
      {/* Services Section */}

      <section className="invest-opportunities">
        <h2>Our Investment Opportunities</h2>
        <div id="catalog-content" className="invest-cards">
          <div className="invest-card">
            <IconoTitulo icon={icon} titulo="Residential Real Estate" ancho={"100%  "}/>
            <p>Invest in residential properties with strong market growth potential.</p>
          </div>
          <div className="invest-card">
            <IconoTitulo icon={icon} titulo="Commercial Projects" ancho={"100%"}/>
            <p>Opportunities in commercial spaces for sustainable businesses.</p>
          </div>
          <div className="invest-card">
            <IconoTitulo icon={icon} titulo="Green Energy" ancho={"100%"}/>
            <p>Invest in renewable energy projects to promote a greener future.</p>
          </div>
        </div>
      </section>

               {/*<section  id="contact" className="contact-section">
                  <ContactForm />
                  <img src={contactImage} alt="Contact" />
                </section>*/}
            <Socials/>
    </div>
  );
}

export default InvestWithUs;
