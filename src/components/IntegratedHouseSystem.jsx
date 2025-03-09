import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { casas } from './casas';
import Socials from './Socials';
import { Modal } from 'flowbite-react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import './AddonsPage.css';

const stripePromise = loadStripe("pk_test_51QU9HbHkO1vJ9Rq76q2aXUrtxGf4fXO7j2wtI1mgpogCMeInF4uv6eRPrzELhNmx826dOrA7FZGAFkIFNaYtnmAV00Gh3SAqBc");

// Integrated component that combines CatalogoDeCasas, AddonsPage, and CheckoutForm
function IntegratedHouseSystem() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State from AddonsPage
  const [currentHouseId, setCurrentHouseId] = useState(id ? parseInt(id) : null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lineItems, setLineItems] = useState([]);
  
  // State from CheckoutForm
  const [clientSecret, setClientSecret] = useState(null);

  // Current house based on ID
  const house = currentHouseId ? casas.find((house) => house.id === currentHouseId) : null;

  // Addons list
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

  // Initialize total price when house changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (house) {
      setTotalPrice(house.price);
    }
  }, [currentHouseId, house]);

  // Toggle addon selection
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

  // Generate line items for Stripe checkout
  const generateLineItems = () => {
    if (!house) return [];
    
    const houseLineItem = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: house.code,
          description: `${house.rooms} rooms, ${house.bathrooms} bathrooms, ${house.squareFeet} sqft`,
          images: [house.image],
        },
        unit_amount: house.price * 100, // Stripe expects amount in cents
      },
      quantity: 1,
    };

    const addonLineItems = selectedAddons.map((addonId) => {
      const addonDetails = addons.find(a => a.id === addonId);
      if (!addonDetails) {
        console.error(`Addon with id ${addonId} not found`);
        return null;
      }
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: addonDetails.name,
          },
          unit_amount: addonDetails.price * 100, // Stripe expects amount in cents
        },
        quantity: 1,
      };
    }).filter(Boolean); // Filter out null items

    return [houseLineItem, ...addonLineItems];
  };

  // Handle proceeding to checkout
  const handleProceedToCheckout = () => {
    const items = generateLineItems();
    setLineItems(items);
    console.log('Generated line items:', items);
    fetchClientSecret(items);
    setIsModalOpen(true);
  };

  // Fetch client secret from Stripe
  const fetchClientSecret = useCallback((items) => {
    if (!items || items.length === 0) return;
    
    fetch("https://newforce-backend.onrender.com/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ line_items: items })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(error => console.error("Error fetching client secret:", error));
  }, []);

  // Navigate to a different house
  const handleNavigateToHouse = (nextHouseId) => {
    setCurrentHouseId(nextHouseId);
    setSelectedAddons([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/Affordable-Houses/addons/${nextHouseId}`);
  };

  // Handle selecting a house from catalog
  const handleSelectHouse = (house) => {
    handleNavigateToHouse(house.id);
  };

  // If no house is selected and we're not in the addons page, show the catalog
  if (!house && !currentHouseId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <CatalogoDeCasas onSelectHouse={handleSelectHouse} />
        <Socials />
      </div>
    );
  }

  // If no house is found with the provided ID
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
          
          {/* Checkout Modal */}
          {isModalOpen && (
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size="7xl">
              <Modal.Header>Checkout</Modal.Header>
              <Modal.Body>
                <div id="checkout">
                  {clientSecret ? (
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                      <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                  ) : (
                    <div className="flex justify-center items-center py-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff7300]"></div>
                      <p className="ml-4 text-lg">Loading checkout...</p>
                    </div>
                  )}
                </div>
              </Modal.Body>
            </Modal>
          )}
        </div>
        <div className="return-button slide-in-right">
          <button onClick={() => navigate("/Affordable-Houses")}>Return to Catalog</button>
        </div>
      </div>

      {/* Catalog with Animations */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Houses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {casas.map((casa, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col content-center justify-center cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2 group"
              onClick={() => handleNavigateToHouse(casa.id)}
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={casa.image}
                  alt={casa.code}
                  className="w-full h-full object-cover object-center transform transition duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 h-48 flex flex-col justify-evenly items-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Home-Code: {casa.code}
                </h3>
                <h3 className="text-base font-light text-gray-500 mb-[0.2rem]">
                  Rooms: {casa.rooms}
                </h3>
                <h3 className="text-base font-light text-gray-500 mb-[0.2rem]">
                  Bathrooms: {casa.bathrooms}
                </h3>
                <h3 className="text-base font-light text-gray-500 mb-[0.2rem]">
                  Terrace: {casa.terrace}
                </h3>
                <h3 className="text-base font-light text-gray-500 mb-[0.2rem]">
                  Square Feet: {casa.squareFeet} sqft
                </h3>
                <h3 className="text-lg font-bold text-green-500 mb-1">
                  Price: ${casa.price}
                </h3>
              </div>
              <button className="w-full bg-[#ff7300] text-white py-2 group-hover:bg-[#1B355B]">
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </div>
      <Socials />
    </div>
  );
}

// Modified CatalogoDeCasas component that can be used standalone or as part of the integrated solution
function CatalogoDeCasas({ onSelectHouse }) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Our Houses</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {casas.map((casa, index) => {
          return (
            <div
              key={index}
              className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col content-center justify-center cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2 group'
              onClick={() => onSelectHouse && onSelectHouse(casa)}
            >
              <div className='w-full h-56 overflow-hidden'>
                <img
                  src={casa.image}
                  alt={casa.code}
                  className='w-full h-full object-cover object-center transform transition duration-300 ease-in-out group-hover:scale-105'
                />
              </div>
              <div className='p-4 h-48 flex flex-col justify-evenly items-center'>
                <h3 className='text-lg font-bold text-gray-800 mb-1'>
                  Home-Code: {casa.code}
                </h3>
                <h3 className='text-base font-light text-gray-500 mb-[0.2rem]'>
                  Rooms: {casa.rooms}
                </h3>
                <h3 className='text-base font-light text-gray-500 mb-[0.2rem]'>
                  Bathrooms: {casa.bathrooms}
                </h3>
                <h3 className='text-base font-light text-gray-500 mb-[0.2rem]'>
                  Terrace: {casa.terrace}
                </h3>
                <h3 className='text-base font-light text-gray-500 mb-[0.2rem]'>
                  Square Feet: {casa.squareFeet} sqft
                </h3>
                <h3 className='text-lg font-bold text-green-500 mb-1'>
                  Price: ${casa.price}
                </h3>
              </div>
              <button className='w-full bg-[#ff7300] text-white py-2 group-hover:bg-[#1B355B]'>
                Get a Quote
              </button>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export { IntegratedHouseSystem, CatalogoDeCasas };