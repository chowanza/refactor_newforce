import React, { useState,  useRef } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './components/Catalog.css'; // Archivo CSS del catálogo movido a la carpeta componentes
import ContactForm from './components/ContactForm'; // Contact form
import contactImage from './img/contact-image.jpg'; // Contact section image
import InvestWithUs from './pages/InvestWithUs'; 
import SportCourts from './pages/SportCourts'; // Página de Sport Courts
import Engineering from './pages/Engineering';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactoModal from './components/ContactoModal';
import HeroMain from './components/HeroP.js'; // Correcto
import engineerImage from './img/Hero3.png';
import renderImage from './img/GECO.png';
import housesImage from './img/GC.png';
import Mission from './components/Mission';
import AffordableHouses from './pages/AffordableHouses'; // Importar el componente
import AddonsPage from "./components/AddonsPage";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Header from './components/Header';
import Socials from './components/Socials';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Importación de imágenes para el catálogo
import newConstructionImage from './img/new-construction.jpg';
import remodelingImage from './img/remodeling.png';
import roofingImage from './img/roofing.jpg';
import kitchenRemodelImage from './img/kitchen-remodel.jpg';
import flooringImage from './img/flooring.jpg';
import paintingImage from './img/painting.jpg';
import concreteImage from './img/concrete.jpg';
import electricalPlumbingImage from './img/electrical-plumbing.jpg';
import hvacImage from './img/hvac.png';
import inspectionsImage from './img/inspections.jpg';
import waterDamageImage from './img/water-damage.jpg';
import deckOutdoorImage from './img/deck-outdoor.jpg';
import projectManagementImage from './img/project-management.png';
import metalRoofingImage from './img/metal-roofing.jpg';
import tileRoofingImage from './img/tile-roofing.jpg';
import flatRoofingImage from './img/flat-roofing.jpg';
import modifiedBitumenImage from './img/modified-bitumen.jpg';
import slateRoofingImage from './img/slate-roofing.jpg';
import woodShakeRoofingImage from './img/wood-shake-roofing.jpg';
import syntheticRoofingImage from './img/synthetic-roofing.jpg';
import standingSeamImage from './img/standing-seam.jpg';
import builtUpRoofingImage from './img/built-up-roofing.jpg';
import greenRoofImage from './img/green-roof.jpg';
import roofCoatingImage from './img/roof-coating.jpg';
import Work from './components/Work';
import CheckoutForm from './components/CheckoutForm.js';

const heroCards = [
  {
      title: 'General Contractor',
      img: renderImage,
      buttonText: 'See More'
  },
  {
      title: 'Roofing Contractor',
      img: housesImage,
      buttonText: 'See More'
  }
];

function App() {

  const [activeSection, setActiveSection] = useState('roofing');
  const [showContactPanel, setShowContactPanel] = useState(false); // Estado para controlar el panel de contacto
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  const generalButtonRef = useRef(null);
  const roofingButtonRef = useRef(null);

 

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Función para abrir el panel de contacto con el producto seleccionado
  const handleContactClick = (productName) => {
    setSelectedProduct(productName); // Establece el producto seleccionado
    setShowContactPanel(true); // Muestra el panel
  };

  // Función para cerrar el panel de contacto
  const closeContactPanel = () => {
    setShowContactPanel(false); // Oculta el panel
  };

  const services = {
    general: [
      {
        image: newConstructionImage,
        title: 'New Construction',
        description: 'Residential & Commercial construction from planning to final finishes.',
      },
      {
        image: remodelingImage,
        title: 'Remodeling and Renovations',
        description: 'Full remodeling services for your home or business.',
      },
      {
        image: paintingImage,
        title: 'Exterior and Interior Painting',
        description: 'Professional painting services for both exterior and interior projects.',
      },
      {
        image: kitchenRemodelImage,
        title: 'Kitchen and Bathroom Remodeling',
        description: 'Comprehensive kitchen and bathroom remodeling services.',
      },
      {
        image: flooringImage,
        title: 'Flooring Installation',
        description: 'Hardwood, laminate, vinyl, and tile flooring installation services.',
      },
      {
        image: concreteImage,
        title: 'Concrete Work',
        description: 'Driveways, patios, foundations, and custom concrete installations.',
      },
      {
        image: electricalPlumbingImage,
        title: 'Electrical and Plumbing Installations',
        description: 'Electrical wiring, lighting, and plumbing installation for new builds and repairs.',
      },
      {
        image: hvacImage,
        title: 'HVAC Installation and Maintenance',
        description: 'Efficient heating, ventilation, and air conditioning systems for your property.',
      },
      {
        image: waterDamageImage,
        title: 'Water Damage Restoration and Mitigation',
        description: 'Rapid response for water damage restoration, including mold remediation.',
      },
      {
        image: deckOutdoorImage,
        title: 'Custom Decks and Outdoor Living Spaces',
        description: 'Custom-built decks and outdoor living spaces designed for beauty and durability.',
      },
      {
        image: projectManagementImage,
        title: 'Permitting and Project Management',
        description: 'We handle all phases of construction, from permits to project management.',
      },
    ],
    roofing: [
      {
        image: roofingImage,
        title: 'Asphalt Shingle Roofing',
        description: 'Cost-effective and popular roofing option for residential properties.',
      },
      {
        image: inspectionsImage,
        title: 'Roof and Building Inspections',
        description: 'Comprehensive inspections for roofs and buildings to identify potential issues.',
      },
      {
        image: metalRoofingImage,
        title: 'Metal Roofing',
        description: 'Durable and energy-efficient roofing solution for all types of properties.',
      },
      {
        image: tileRoofingImage,
        title: 'Tile Roofing (Clay & Concrete)',
        description: 'Classic look with excellent durability for extreme weather conditions.',
      },
      {
        image: flatRoofingImage,
        title: 'Flat Roofing (TPO, EPDM, and PVC)',
        description: 'Durable and energy-efficient flat roofing solutions for modern homes and commercial buildings.',
      },
      {
        image: modifiedBitumenImage,
        title: 'Modified Bitumen Roofing',
        description: 'Superior waterproofing for low-slope and flat roofs in commercial buildings.',
      },
      {
        image: slateRoofingImage,
        title: 'Slate Roofing',
        description: 'Timeless and highly durable roofing solution, perfect for long-lasting installations.',
      },
      {
        image: woodShakeRoofingImage,
        title: 'Wood Shake Roofing',
        description: 'Natural and rustic look with excellent insulation and aesthetic appeal.',
      },
      {
        image: syntheticRoofingImage,
        title: 'Synthetic Roofing',
        description: 'Durable and affordable alternative that mimics natural products like slate, wood, or tile.',
      },
      {
        image: standingSeamImage,
        title: 'Standing Seam Metal Roofing',
        description: 'Sleek and modern roofing solution with superior protection against harsh weather.',
      },
      {
        image: builtUpRoofingImage,
        title: 'Built-Up Roofing (BUR)',
        description: 'Durable and waterproof roofing solution ideal for low-slope commercial roofs.',
      },
      {
        image: greenRoofImage,
        title: 'Green Roof Installation',
        description: 'Eco-friendly roofing solution that incorporates vegetation layers for environmental sustainability.',
      },
      {
        image: roofCoatingImage,
        title: 'Roof Coating and Maintenance',
        description: 'Roof coating services to extend the life of your roof, including UV protection and energy efficiency improvements.',
      },
    ],
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página principal */}
          <Route
            path="/"
            element={
              <>
               <Header currentPage="home"/>
                {/* Hero Section con múltiples tarjetas */}
                <HeroMain
        heroTitle="New Force Construction"
        heroSubtitle="is your all-in-one solution for a wide range of construction and investment services. From affordable homes and general contracting to roofing and investment solutions, our in-house team ensures quality, reliability, and seamless project management every step of the way."
        heroImg={engineerImage}
        heroCards={heroCards}
        onGeneralClick={() => generalButtonRef.current.click()}
        onRoofingClick={() => roofingButtonRef.current.click()}
        activeSection={activeSection}
      />
                        <Slider {...settings} className="mission-carousel">
                  <div className='carusel-item'>

                    <Mission title="Our Mission" image={require("./img/PARA PAGINA/pngwing.com (28).png")} 
                    text="Our mission is to create remarkable spaces that stand the test of time. From engineering and permits to execution and meticulous quality control, we manage every detail to empower our clients to focus on their vision and goals. Backed by our investment division, ZZZ Ventures Capital, we offer a full-service approach that merges top-tier craftsmanship with strategic financial insight. By uniting construction expertise with investment intelligence, we transform spaces into assets that generate lasting value and foster enduring trust." />
                  </div>

                  <div className='carusel-item'>
                    <Mission title="Our Vision" image={require("./img/PARA PAGINA/pngwing.com (30).png")}
                    text="We envision a Florida where every home and business reflects the dreams and aspirations of its owners. As a construction and remodeling company, we are committed to making that vision a reality. We strive to build more than just structures; we create spaces that inspire, uplift, and enhance the lives of our clients and the communities we serve. We believe in quality, efficiency, and dependability, always putting our clients' needs and satisfaction first." />
                  </div>
                </Slider>


                <Work/>


                   {/* Catálogo */}
                <section id="catalog-content" className="catalog-section">
                  <h1 className="catalog-title">Our Services</h1>
                  <div className="catalog-buttons">
                    <button ref={generalButtonRef} onClick={() => handleClick('general')} className="toggle-button">
                      General Contractor
                    </button>
                    <button ref={roofingButtonRef} onClick={() => handleClick('roofing')} className="toggle-button">
                      Roofing Contractor
                    </button>
                  </div>

                  <div className="catalog-content">
                    {activeSection && (
                      <div className="catalog-section">
                        <Swiper
                          modules={[Navigation, Pagination]}
                          spaceBetween={20}
                          slidesPerView={1}
                          breakpoints={{
                            480: {
                              slidesPerView: 2,
                            },
                            1024: {
                              slidesPerView: 4,
                            },
                          }}
                          navigation
                          pagination={{ clickable: true }}
                        >
                          {services[activeSection].map((service, index) => (
                            <SwiperSlide key={index}>
                              <div className="product-card">
                                <img src={service.image} alt={service.title} />
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                                <button onClick={() => handleContactClick(service.title)}>Contact Us</button>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  </div>
                </section>


                <section id="contact" className="contact-section">
                  <ContactForm />
                  <img src={contactImage} alt="Contact" />
                </section>

                

                {/* Panel de contacto modal */}
                {showContactPanel && (
                  <ContactoModal selectedProduct={selectedProduct} closeContactPanel={closeContactPanel} />
                )}

                <Socials/>
              </>
            }
          />


          

    
      {/* Página principal */}
      <Route path="/" element={<AffordableHouses />} />

      {/* Otras páginas */}
      <Route path="/sport-courts" element={<SportCourts />} />
      <Route path="/Engineering" element={<Engineering />} />
      <Route path="/invest-with-us" element={<InvestWithUs />} />
      <Route path="/affordable-houses" element={<AffordableHouses />} />

      {/* Ruta para el catálogo (si se requiere independiente) */}
      {/* <Route path="/catalogo-section" element={<CatalogoDeCasas />} /> */}

      {/* Página de Add-ons */}
      <Route path="/product/:id" element={<AddonsPage />} />
      <Route path="/checkout" element={<CheckoutForm />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;