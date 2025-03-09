import React, { useState } from 'react';
import images from '../img/ourServices_images';
import ContactoModal from './ContactoModal'; // Asegúrate de que la ruta sea correcta

function Catalog({ generalRef, roofingRef }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = {
    general: [
      {
        image: images.newConstruction,
        title: 'New Construction',
        description: 'Residential & Commercial construction from planning to final finishes.',
      },
      {
        image: images.remodeling,
        title: 'Remodeling and Renovations',
        description: 'Full remodeling services for your home or business.',
      },
      {
        image: images.painting,
        title: 'Exterior and Interior Painting',
        description: 'Professional painting services for both exterior and interior projects.',
      },
      {
        image: images.kitchenRemodel,
        title: 'Kitchen and Bathroom Remodeling',
        description: 'Comprehensive kitchen and bathroom remodeling services.',
      },
      {
        image: images.flooring,
        title: 'Flooring Installation',
        description: 'Hardwood, laminate, vinyl, and tile flooring installation services.',
      },
      {
        image: images.concrete,
        title: 'Concrete Work',
        description: 'Driveways, patios, foundations, and custom concrete installations.',
      },
      {
        image: images.electricalPlumbing,
        title: 'Electrical and Plumbing Installations',
        description: 'Electrical wiring, lighting, and plumbing installation for new builds and repairs.',
      },
      {
        image: images.hvac,
        title: 'HVAC Installation and Maintenance',
        description: 'Efficient heating, ventilation, and air conditioning systems for your property.',
      },
      {
        image: images.waterDamage,
        title: 'Water Damage Restoration and Mitigation',
        description: 'Rapid response for water damage restoration, including mold remediation.',
      },
      {
        image: images.deckOutdoor,
        title: 'Custom Decks and Outdoor Living Spaces',
        description: 'Custom-built decks and outdoor living spaces designed for beauty and durability.',
      },
      {
        image: images.projectManagement,
        title: 'Permitting and Project Management',
        description: 'We handle all phases of construction, from permits to project management.',
      },
    ],
    roofing: [
      {
        image: images.roofing,
        title: 'Asphalt Shingle Roofing',
        description: 'Cost-effective and popular roofing option for residential properties.',
      },
      {
        image: images.inspections,
        title: 'Roof and Building Inspections',
        description: 'Comprehensive inspections for roofs and buildings to identify potential issues.',
      },
      {
        image: images.metalRoofing,
        title: 'Metal Roofing',
        description: 'Durable and energy-efficient roofing solution for all types of properties.',
      },
      {
        image: images.tileRoofing,
        title: 'Tile Roofing (Clay & Concrete)',
        description: 'Classic look with excellent durability for extreme weather conditions.',
      },
      {
        image: images.flatRoofing,
        title: 'Flat Roofing (TPO, EPDM, and PVC)',
        description: 'Durable and energy-efficient flat roofing solutions for modern homes and commercial buildings.',
      },
      {
        image: images.modifiedBitumen,
        title: 'Modified Bitumen Roofing',
        description: 'Superior waterproofing for low-slope and flat roofs in commercial buildings.',
      },
      {
        image: images.slateRoofing,
        title: 'Slate Roofing',
        description: 'Timeless and highly durable roofing solution, perfect for long-lasting installations.',
      },
      {
        image: images.woodShakeRoofing,
        title: 'Wood Shake Roofing',
        description: 'Natural and rustic look with excellent insulation and aesthetic appeal.',
      },
      {
        image: images.syntheticRoofing,
        title: 'Synthetic Roofing',
        description: 'Durable and affordable alternative that mimics natural products like slate, wood, or tile.',
      },
      {
        image: images.standingSeam,
        title: 'Standing Seam Metal Roofing',
        description: 'Sleek and modern roofing solution with superior protection against harsh weather.',
      },
      {
        image: images.builtUpRoofing,
        title: 'Built-Up Roofing (BUR)',
        description: 'Durable and waterproof roofing solution ideal for low-slope commercial roofs.',
      },
      {
        image: images.greenRoof,
        title: 'Green Roof Installation',
        description: 'Eco-friendly roofing solution that incorporates vegetation layers for environmental sustainability.',
      },
      {
        image: images.roofCoating,
        title: 'Roof Coating and Maintenance',
        description: 'Roof coating services to extend the life of your roof, including UV protection and energy efficiency improvements.',
      },
    ],
  };

  const ServiceCard = ({ service }) => (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col content-center justify-center cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2 group"
      aria-label={service.title}
      onClick={() => openModal(service.title)}
    >
      <div className="w-full h-40 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transform transition duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 h-48">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
      <button
        className="w-full bg-[#ff7300] text-white py-2 group-hover:bg-[#1B355B]"
      >
        Get a Quote
      </button>
    </div>
  );

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      {Object.entries(services).map(([key, value]) => {
        const sectionRef = key === 'general' ? generalRef : roofingRef;
        const sectionId = key === 'general' ? 'general-catalog' : 'roofing-catalog';

        return (
          <div key={key} ref={sectionRef} id={sectionId} className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 my-8">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {value.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Modal Contacto */}
      {modalOpen && (
        <ContactoModal
          selectedProduct={selectedService}
          closeContactPanel={closeModal}
        />
      )}
    </section>
  );
}

export default Catalog;