import React from 'react';
import { useNavigate } from 'react-router-dom';
import { casas } from './casas';

function CatalogoDeCasas({ onSelectHouse }) {
  const navigate = useNavigate();

  // Handle the click if no onSelectHouse prop is provided
  const handleCasaClick = (casa) => {
    if (onSelectHouse) {
      onSelectHouse(casa);
    } else {
      navigate(`/Affordable-Houses/addons/${casa.id}`);
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Our Houses</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {casas.map((casa, index) => {
          return (
            <div
              key={index}
              className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col content-center justify-center cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2 group'
              onClick={() => handleCasaClick(casa)}
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

export default CatalogoDeCasas;