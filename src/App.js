import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Assuming you have App.css for global styles
import ContactoModal from './components/ContactoModal';

// Import your components
import Header from './components/Header';
import HeroMain from './components/HeroP';
import Mission from './components/Mission';
import Work from './components/Work';
import Catalog from './components/Catalog';
import Socials from './components/Socials';
import InvestWithUs from './pages/InvestWithUs';
import SportCourts from './pages/SportCourts';
import Engineering from './pages/Engineering';
import AffordableHouses from './pages/AffordableHouses';
import AddonsPage from './components/AddonsPage';
import CheckoutForm from './components/CheckoutForm';
import { IntegratedHouseSystem } from './components/IntegratedHouseSystem';

// Import images
import engineerImage from './img/Hero3.png';
import renderImage from './img/GECO.png';
import housesImage from './img/GC.png';

// Import slider libraries
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Hero Cards data
const heroCards = [
  {
    title: 'General Contractor',
    img: renderImage,
    buttonText: 'See More',
  },
  {
    title: 'Roofing Contractor',
    img: housesImage,
    buttonText: 'See More',
  },
];

function App() {
  const generalRef = useRef(null);
  const roofingRef = useRef(null);
  const [activeSection, setActiveSection] = useState('general');

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    openModal('General Inquiry');
  }, []);

  const scrollToGeneral = () => {
    if (generalRef.current) {
      generalRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('general');
    }
  };

  const scrollToRoofing = () => {
    if (roofingRef.current) {
      roofingRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('roofing');
    }
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
          <Route
            path="/"
            element={
              <>
                <Header currentPage="home" />
                {modalOpen && <ContactoModal selectedProduct={selectedProduct} closeContactPanel={closeModal} />}
                <HeroMain
                  heroTitle="New Force Construction"
                  heroSubtitle="is your all-in-one solution for a wide range of construction and investment services."
                  heroImg={engineerImage}
                  heroCards={heroCards}
                  onGeneralClick={scrollToGeneral}
                  onRoofingClick={scrollToRoofing}
                  activeSection={activeSection}
                />
                <Slider {...settings} className="mission-carousel">
                  <div className="carusel-item">
                    <Mission
                      title="Our Mission"
                      image={require('./img/PARA PAGINA/pngwing.com (28).png')}
                      text="Our mission is to create remarkable spaces that stand the test of time."
                    />
                  </div>
                  <div className="carusel-item">
                    <Mission
                      title="Our Vision"
                      image={require('./img/PARA PAGINA/pngwing.com (30).png')}
                      text="We envision a Florida where every home and business reflects the dreams and aspirations of its owners."
                    />
                  </div>
                </Slider>
                <Work />
                <Catalog generalRef={generalRef} roofingRef={roofingRef} />
                <Socials />
              </>
            }
          />
          <Route path="/sport-courts" element={<SportCourts />} />
          <Route path="/Engineering" element={<Engineering />} />
          <Route path="/invest-with-us" element={<InvestWithUs />} />
          <Route path="/affordable-houses" element={<AffordableHouses />} />
          <Route path="/product/:id" element={<AddonsPage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/Affordable-Houses" element={<IntegratedHouseSystem />} />
          <Route path="/Affordable-Houses/addons/:id" element={<IntegratedHouseSystem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;