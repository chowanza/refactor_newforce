import React from "react";
import Header from "../components/Header";
import HeroS from "../components/HeroS";
import Socials from "../components/Socials";
import CatalogoDeCasas from '../components/CatalogoDeCasas';
import "./AffordableHouses.css"; // Estilos específicos para esta página

import heroimage from "../img/affordable.png";
// Import removed to fix the warning

function AffordableHouses() {
  return (
    <div className="affordable-houses-page">
      {/* Header */}
      <Header currentPage="affordable" />

      {/* Hero Section */}
      <HeroS
        heroTitle="Modular Housing"
        heroSubtitle="Discover affordable, eco-friendly housing solutions tailored for your lifestyle."
        heroImg={heroimage}
      />

      {/* Catálogo de Casas */}
      <section className="catalogo-section">
        <CatalogoDeCasas />
      </section>

      {/* Contact Section - commented out properly */}
      {/*
      <section id="contact" className="contact-section">
        <ContactForm />
        <img src={contactImage} alt="Contact" />
      </section>
      */}

      {/* Social Media Links */}
      <Socials />
    </div>
  );
}

export default AffordableHouses;