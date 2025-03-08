import React, { useState,  useRef } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
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
import Catalog from './components/Catalog';

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
                <Catalog />


                {/*<section id="contact" className="contact-section">
                  <ContactForm />
                  <img src={contactImage} alt="Contact" />
                </section>/*}

                

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