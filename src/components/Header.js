import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../img/logo.png';
import '../index.css';
import '../components/Header.css';

export default function Header({ currentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Función para hacer scroll al inicio
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`header-outer-container`}>
      <Navbar className={`custom-navbar h-fixed fixed w-full z-50`}>
        <Navbar.Brand>
          <img
            src={logo}
            alt="Logo"
            className="mr-2 object-contain logo"
            style={{ width: "120px", height: "60px" }}
            onClick={handleLogoClick} // Añadido el evento onClick
          />
        </Navbar.Brand>
        <Navbar.Toggle id="custom-navbar-toggler" />
        <Navbar.Collapse>
          <li className={`nav-button nav-buttons ${currentPage === 'home' ? 'active' : ''}`}>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'engineering' ? 'active' : ''}`}>
            <Link to="/Engineering">
              <button>Engineering & Permitting</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'invest' ? 'active' : ''}`}>
            <Link to="/invest-with-us">
              <button>Invest with Us</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'sport' ? 'active' : ''}`}>
            <Link to="/sport-courts">
              <button>Sport Courts</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'affordable' ? 'active' : ''}`}>
            <Link to="/affordable-houses">
              <button>Modular Housing</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons `}>
            <button><a href="tel:(941) 337-0680">Call Us Now!</a></button>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
