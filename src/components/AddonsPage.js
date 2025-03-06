import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { casas } from "./casas";
import Socials from "./Socials";
import CatalogoDeCasas from "./CatalogoDeCasas";
import CheckoutForm from "./CheckoutForm";
import { Modal} from "flowbite-react"
import "./CatalogoDeCasas.css"; // Archivo de estilos para el componente
import "./AddonsPage.css";

function AddonsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentHouseId, setCurrentHouseId] = useState(parseInt(id));
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lineItems, setLineItems] = useState([]);

  const handleProceedToCheckout = () => {
  const items = generateLineItems();
  setLineItems(items);
  console.log('Generated line items:', items);
  setIsModalOpen(true);
};

  const house = casas.find((house) => house.id === currentHouseId);

  const generateLineItems = () => {
  const houseLineItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        name: house.code,
      },
      unit_amount: house.price * 100, // assuming house.price is in dollars
    },
    quantity: 1,
  };

  const addonLineItems = selectedAddons.map((addonId) => {
    const addonDetails = addons.find(a => a.id === addonId);
    if (!addonDetails) {
      console.error(`Addon with id ${addonId} not found`);
    }
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: addonDetails ? addonDetails.name : 'Unknown Addon', // Fallback to a default name if undefined
        },
        unit_amount: addonDetails ? addonDetails.price * 100 : 0, // assuming addon.price is in dollars
      },
      quantity: 1,
    };
  });

  return [houseLineItem, ...addonLineItems];
};

  const addons = [
    { id: 1, name: "Bed Frame", price: 160 },
    { id: 2, name: "Mattress", price: 160 },
    { id: 3, name: "Shower", price: 160 },
    { id: 4, name: "Shower Room", price: 160 },
    { id: 5, name: "Sink", price: 160 },
    { id: 6, name: "Toilet", price: 160 },
    { id: 7, name: "Four door Closet", price: 160 },
    { id: 8, name: "Induction Cooker", price: 160 },
    { id: 9, name: "Cabinet with Sink", price: 160 },
    { id: 10, name: "Bed set 4 pillowcase 1 cover 1 bed cover", price: 160 },
    { id: 11, name: "Led Lights", price: 160 },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (house) {
      setTotalPrice(house.price);
    }
  }, [currentHouseId, house]);

  const toggleAddon = (addon) => {
    const isSelected = selectedAddons.includes(addon.id);
    const updatedAddons = isSelected
      ? selectedAddons.filter((id) => id !== addon.id)
      : [...selectedAddons, addon.id];

    setSelectedAddons(updatedAddons);
    setTotalPrice(
      isSelected ? totalPrice - addon.price : totalPrice + addon.price
    );
  };

  const handleNavigateToHouse = (nextHouseId) => {
    setCurrentHouseId(nextHouseId);
    setSelectedAddons([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!house) return <p>Error: House not found.</p>;

  return (
    <div
      className="addons-page"
      style={{
        background:
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../img/58.jpg') no-repeat center",
        backgroundSize: "cover",
      }}
    >
      {/* Page Layout */}
      <div className="addons-content">
        {/* Left: House Details */}
        <div className="house-details">
          <img src={house.image} alt={house.code} className="fade-in" />
          <div className="details">
            <h2 className="slide-in-left">{house.code}</h2>
            <p>Rooms: {house.rooms}</p>
            <p>Bathrooms: {house.bathrooms}</p>
            <p>Terrace: {house.terrace ? "Yes" : "No"}</p>
            <p>Square Feet: {house.squareFeet} sqft</p>
            <p className="price">Base Price: ${house.price.toLocaleString()}</p>
          </div>
        </div>

        {/* Right: Add-ons Section */}
        <div className="addons-section slide-in-right">
          <h2>Accessories</h2>
          <ul className="addons-list">
            {addons.map((addon) => (
              <li key={addon.id} className="addon-item fade-in">
                <input
                  type="checkbox"
                  id={`addon-${addon.id}`}
                  checked={selectedAddons.includes(addon.id)}
                  onChange={() => toggleAddon(addon)}
                />
                <label htmlFor={`addon-${addon.id}`}>
                  {addon.name} (+${addon.price.toLocaleString()})
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Summary Section */}
      <div className="summary-container fade-in">
        <div className="order-info slide-in-left">
          <h2>Order Summary</h2>
          <p>Base Price: ${house.price.toLocaleString()}</p>
          <p>Add-ons Selected: {selectedAddons.length}</p>
          <p className="total-price">Total: ${totalPrice.toLocaleString()}</p>
        </div>
        <div className="payment-button slide-in-up">
          <button onClick={handleProceedToCheckout}>Go to Payment</button>
          {isModalOpen && (
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size = '7xl'>
          <Modal.Header>Checkout</Modal.Header>
          <Modal.Body>
           
      <CheckoutForm line_items={lineItems} />
    
          </Modal.Body>
        </Modal>
      )}

        </div>
        <div className="return-button slide-in-right">
          <button onClick={() => navigate("/Affordable-Houses")}>Return to Catalog</button>
        </div>
      </div>

      {/* Catalog with Animations */}
      <CatalogoDeCasas
        onNavigateToAddons={(nextHouseId) => handleNavigateToHouse(nextHouseId)}
      />
      <Socials />
    </div>
  );
}

export default AddonsPage;