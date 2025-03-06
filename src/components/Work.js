import React from "react";

import IconoTitulo from "./Icono_titulo";
import Paint from "../img/PARA PAGINA/PAINTING.png";
import Remodeling from "../img/PARA PAGINA/REMODELING.png"
import HomeBuilding from "../img/PARA PAGINA/HOME-BUILDING.png"
import Roofing from "../img/PARA PAGINA/ROOFING-2.png"
import "./Work.css";

const ExpertiseSection = () => {
  const services = [
    { icon: Remodeling, title: "Remodeling", description: "Transform your space with our meticulous remodeling services. From stunning kitchens and luxurious bathrooms to complete home renovations, we craft spaces that reflect your unique style and enhance your lifestyle." },
    { icon: Roofing, title: "Roofing", description: "Protect your investment with our expert roofing services. We specialize in installation, repair, and maintenance for both residential and commercial properties, ensuring a durable and secure roof that stands the test of time." },
    { icon: Paint, title: "Painting", description: "Our skilled painters bring your vision to life with meticulous attention to detail. We use premium paints and finishes to deliver a flawless, long-lasting result that enhances the beauty and value of your home or business." },
    { icon: HomeBuilding, title: "Home building", description: "From concept to completion, we manage every aspect of your home-building project with precision and care. Our experienced team utilizes cutting-edge technology and the finest materials to ensure a solid foundation for your dream home." },
  ];

  return (
    <section className="expertise-section">

      <div className="container-work">
        <h2>Quality Construction, Exceptional Value</h2>
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">

              <IconoTitulo icon={service.icon} titulo={service.title} ancho={"100%"} />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
