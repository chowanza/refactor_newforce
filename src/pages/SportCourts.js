// Import React and required hooks
import React, { useState, useEffect } from 'react';
import {  useTransition, animated } from '@react-spring/web';
import './sport.css';
import Header from '../components/Header';
import Hero from '../components/HeroS';
import Socials from '../components/Socials';
import ContactoModal from '../components/ContactoModal';
import DesignCourt from '../components/CourtDesigner';

// Import images and icons
import pickleballImage from '../img/pickleballImage.jpg';
import tennisImage from '../img/tennisImage.jpg';
import bocceImage from '../img/bocceImage.jpg';
import padelImage from '../img/padelImage.jpg';
import volleyballImage from '../img/volleyballImage.jpg';
import soccerImage from '../img/soccerImage.jpg';

// Íconos en formato PNG
import futbolIcon from '../img/FUTBOL.png';
import tenisIcon from '../img/TENIS.png';
import padelIcon from '../img/PADEL.png';
import volleyballIcon from '../img/VOLLEYBALL.png';
import pickleballIcon from '../img/PICKLEBALL.png';
import bocceIcon from '../img/BOCCE.png';
import engineerImage from '../img/PARA PAGINA/pngwing.com (33).png';
import ContactForm from '../components/ContactForm';
import contactImage from '../img/contact-image.jpg'


const sports = [
  {
    name: "Pickleball",
    icon: pickleballIcon,
    images: [pickleballImage],
    description: "Our pickleball courts are designed with precision, featuring an asphalt or concrete base that ensures a smooth, long-lasting surface ideal for all levels of play. Measuring 20 by 44 feet, they provide the perfect balance between compactness and functionality, making them great for both singles and doubles matches. Whether you’re playing competitively or for fun, these courts deliver optimal performance and durability, ensuring every game is enjoyable and hassle-free.",
    summary: "High-quality pickleball courts, perfect for all levels of play."
  },
  {
    name: "Tennis",
    icon: tenisIcon,
    images: [tennisImage],
    description: "Crafted to professional standards, our tennis courts feature a sturdy asphalt or concrete base, providing the consistent bounce and reliable surface needed for high-level play. Measuring 120 by 55 feet, these courts offer ample space for dynamic rallies and powerful serves, making them perfect for both competitive players and recreational enthusiasts. With a focus on quality and longevity, our courts are built to withstand heavy use while delivering an exceptional playing experience.",
    summary: "Professional tennis courts with durable materials."
  },
  {
    name: "Bocce",
    icon: bocceIcon,
    images: [bocceImage],
    description: "Our bocce courts offer the versatility of asphalt, concrete, or turf surfaces, allowing for a customizable playing field based on your preferences. Measuring 91 by 13 feet, these courts provide the perfect dimensions for strategic, competitive play. Whether you’re hosting tournaments or casual games, our bocce courts are designed to enhance the player experience with a smooth, even surface, ensuring every roll is as precise as possible.",
    summary: "Customizable bocce courts for strategic play."
  },
  {
    name: "Padel",
    icon: padelIcon,
    images: [padelImage],
    description: "Designed for fast-paced play, our padel courts can be constructed with asphalt, concrete, or turf bases, offering players the perfect surface for any style of game. With standard measurements of 65 by 33 feet, our courts are optimized for quick movements and high-intensity rallies. Ideal for clubs, communities, or private installations, these courts combine durability and performance, making padel accessible to players of all skill levels.",
    summary: "Durable padel courts optimized for high-intensity play."
  },
  {
    name: "Volleyball",
    icon: volleyballIcon,
    images: [volleyballImage],
    description: "Our volleyball courts, built with a durable asphalt or concrete base, are tailored for professional and recreational play alike. Measuring 60 by 30 feet, they provide ample space for players to spike, serve, and dive with ease. Whether you’re organizing a beach volleyball game or a more formal match, our courts offer a reliable surface that enhances playability while standing up to the elements and heavy use.",
    summary: "Spacious volleyball courts for all levels of play."
  },
  {
    name: "Soccer",
    icon: futbolIcon,
    images: [soccerImage],
    description: "Our 7-player soccer courts can be customized with either an asphalt or concrete base, covered in turf surface, depending on your needs. With a standard size of 165 by 105 feet, these courts provide the perfect dimensions for fast-paced, small-sided soccer matches. Built to last and designed for top-tier performance, our courts ensure that players enjoy an authentic soccer experience, with surfaces that support quick movements and high-energy play.",
    summary: "7-player soccer courts with premium turf."
  }
];

function SportCourts() {
  const [selectedSport, setSelectedSport] = useState(sports[0]); // Default sport
  const [showContactPanel, setShowContactPanel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Consider mobile for screens <= 768px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleContactClick = (productName) => {
    setSelectedProduct(productName);
    setShowContactPanel(true);
  };

  const closeContactPanel = () => {
    setShowContactPanel(false);
  };

  // Transition settings for changing the selected sport
  const transitions = useTransition(selectedSport, {
    key: selectedSport.name,
    from: { opacity: 0, transform: 'translateY(20%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-20%)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="sport-courts">
      <Header currentPage="sport" />
      <Hero
        heroTitle="Sport Courts"
        heroSubtitle="High-quality sport court solutions."
        heroImg={engineerImage}
        isSingleSection={true}  // Solo una tarjeta ampliada
      />
      <section id="catalog-content" className="canchas">
        <h2 className="section-title">Our Available Courts</h2>
        <div  className="sport-buttons">
          {sports.map((sport, index) => (
            <button
              key={index}
              onClick={() => setSelectedSport(sport)}
              className={`sport-button ${selectedSport.name === sport.name ? "active" : ""}`}
            >
              <img src={sport.icon} alt={`${sport.name} icon`} className="sport-icon" />
            </button>
          ))}
        </div>
        {isMobile ? (
          <div className="sport-mobile-summary">
            <h2>{selectedSport.name}</h2>
            <img src={selectedSport.images[0]} alt={`${selectedSport.name} court`} className="sport-image" />
            <p>{selectedSport.summary}</p>
            <button className="contact-button" onClick={() => handleContactClick(selectedSport.name)}>Know Us</button>
          </div>
        ) : (
          transitions((style, item) => (
            <animated.div style={style} className="sport-slideshow">
              <div className="slideshow-image">
                <img src={item.images[0]} alt={`${item.name} court`} />
              </div>
              <div className="slideshow-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button className="contact-button" onClick={() => handleContactClick(item.name)}>Know Us</button>
              </div>
            </animated.div>
          ))
        )}
      </section>
      <DesignCourt/>

      <section  id="contact" className="contact-section">
       <ContactForm />
        <img src={contactImage} alt="Contact" />
      </section>
      {showContactPanel && (
        <ContactoModal selectedProduct={selectedProduct} closeContactPanel={closeContactPanel} />
      )}
      <Socials />
    </div>
  );
}

export default SportCourts;
