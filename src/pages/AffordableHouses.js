import React from "react";
import Header from "../components/Header";
import HeroS from "../components/HeroS";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm"; // Componente de contacto
import CatalogoDeCasas from "../components/CatalogoDeCasas"; // Componente del catálogo
import "./AffordableHouses.css"; // Estilos específicos para esta página

import heroimage from "../img/affordable.png";
import contactImage from "../img/contact-image.jpg";

function AffordableHouses() {
  return (
    <div className="affordable-houses-page">
      {/* Header */}
      <Header currentPage="affordable" />

      {/* Hero Section */}
      <HeroS
        heroTitle="Affordable Houses"
        heroSubtitle="Discover affordable, eco-friendly housing solutions tailored for your lifestyle."
        heroImg={heroimage}
      />

      {/* Catálogo de Casas */}
      <section className="catalogo-section">
        
        <CatalogoDeCasas />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <ContactForm />
        <img src={contactImage} alt="Contact" />
      </section>

      {/* Social Media Links */}
      <Socials />
    </div>
  );
}

export default AffordableHouses;