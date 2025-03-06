import React from "react";
import Slider from "react-slick";
import Mission from '../components/Mission';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./new force construction.css";

const ExpertiseCarousel = () => {
  const settings = {
    dots: true,               // Muestra los indicadores
    infinite: true,           // Hace el carrusel infinito
    speed: 500,               // Velocidad del cambio entre slides
    slidesToShow: 1,          // Cantidad de slides visibles
    slidesToScroll: 1,        // Cantidad de slides que se mueven cada vez
    autoplay: true,           // Habilita el autoplay
    autoplaySpeed: 3000,      // Tiempo en milisegundos entre cada slide
  };

  return (
    <div className="expertise_carousel_container">
      <Slider {...settings}>
        <Mission 
          title="Professional Engineering Services" 
          image={require("../img/electrical-plumbing.jpg")} 
          text="We pride ourselves on offering comprehensive Professional Engineering Services designed to meet all your project needs. From expert engineering consultation and professionally crafted engineer letters to assistance with permitting and meticulous project planning, we ensure that every step of your project is handled with precision and expertise. Additionally, our team specializes in PD&E Studies (Project Development and Environment), providing thorough evaluations to align your project with environmental and developmental standards. Trust us to bring your vision to life with unparalleled professionalism and attention to detail." 
          scale='1.0'
        />
        <Mission 
          title="Project Management" 
          image={require("../img/engineering-permitting.jpg")} 
          text="We focus on optimizing schedules to maximize efficiency and conducting thorough shop drawing reviews to maintain quality and compliance. Our team expertly handles RFI (Request for Information) and submittal management, ensuring clear communication and streamlined processes. Additionally, we review pay requests meticulously to maintain financial accuracy and provide effective subcontractor management to guarantee that every aspect of your project runs smoothly. With our expertise, your projects are in capable hands every step of the way." 
          scale='1.0'
        />
        <Mission 
          title="Development Studies" 
          image={require("../img/flat-roofing.jpg")} 
          text="We work with you to maximize your resources and seize every opportunity available. Our expertise ensures your projects start on the right path with detailed land analysis and strategic site development. From planning to execution, we deliver insights and solutions tailored to your needs, setting the foundation for successful and sustainable growth. Let us guide your development initiatives to success with precision and foresight." 
          scale='1.0'
        />

        <Mission
          title="Engineering Design"
          image={require("../img/Engeneering.png")}
          text=" Whether you're embarking on new residential construction, remodeling, or exploring modern options like shipping container homes, we provide detailed designs and plans tailored to your vision. Our expertise extends to bridge design, retaining walls, noise walls, and a variety of miscellaneous structures, ensuring that every project is handled with precision and creativity. With a commitment to excellence, we bring your ideas to life with engineering solutions that combine functionality and aesthetics."
          scale='1.0'
        />
        
      </Slider>
    </div>
  );
};

export default ExpertiseCarousel;
