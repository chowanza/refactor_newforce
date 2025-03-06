import React, { useState } from "react";
import Slider from "react-slick"; // Carrusel para el slideshow
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CatalogoDeCasas.css"; // Archivo de estilos para el componente
import {casas} from "./casas";
import { useNavigate } from "react-router-dom"; // Para la navegación entre páginas

function CatalogoDeCasas() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    bedrooms: "",
    bathrooms: "",
    terrace: false,
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  

  // Configuración para el slider de react-slick
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Hacer que el carrusel sea infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Número de slides visibles
    slidesToScroll: 1, // Número de slides que se mueven al avanzar
    responsive: [
      {
        breakpoint: 1024, // Configuración para pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Configuración para pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const houses = casas;

  const filteredHouses = houses.filter((house) => {
    return (
      house.code.toLowerCase().includes(search.toLowerCase()) &&
      (filters.bedrooms === "" || house.rooms === parseInt(filters.bedrooms)) &&
      (filters.bathrooms === "" || house.bathrooms === parseInt(filters.bathrooms)) &&
      (!filters.terrace || house.terrace === "Yes")
    );
  });

  return (
    <div className="catalogo-de-casas">
      <h2>House catalog</h2>

      {/* Barra de búsqueda y filtros */}
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
        <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange}>
          <option value="">Bedroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select name="bathrooms" value={filters.bathrooms} onChange={handleFilterChange}>
          <option value="">Bathroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="terrace"
            checked={filters.terrace}
            onChange={handleFilterChange}
          />
          Terrace
        </label>
      </div>

      <Slider {...settings}>
        {filteredHouses.map((house) => (
          <div key={house.id} className="house-card">
            <img src={house.image} alt={`Home-Code: ${house.code}`} />
            <h3>Home–Code: {house.code}</h3>
            <ul>
              <li>Rooms: {house.rooms}</li>
              <li>Bathrooms: {house.bathrooms}</li>
              <li>Terrace: {house.terrace}</li>
              <li>Square Feet: {house.squareFeet} sqft</li>
            </ul>
            <p className="price">Price: ${house.price.toLocaleString()}</p>
            <button
              className="product-button"
              onClick={() => navigate(`/product/${house.id}`)}
            >
              Show Product
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CatalogoDeCasas;
