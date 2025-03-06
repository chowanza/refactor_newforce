// AreasOfExpertise.jsx
import React from 'react';
import './Areas.css'; // Import your CSS styles

import Icono from './Icono_titulo'


import Inge from '../img/PARA PAGINA/INGE.png'
import Ingenieros from '../img/PARA PAGINA/pngwing.com (41).png'

const AreasOfExpertise = () => {
  return (
    <div className="expertise-container">

      <div className="expertise-text text-black">

        <h2>Areas of Expertise</h2>

        <div className="expertise-item">
            <Icono icon={Inge} titulo="Professional Engineering Services" />
            <ul className='Areas-ul'>
              <li>Engineering consultation</li>
              <li>Engineer letters</li>
              <li>permitting</li>
              <li>planning</li>
              <li>PD&E Studies</li>
            </ul>
        </div>


        <div className="expertise-item">
            <Icono icon={Inge} titulo="Project Management" />
            <ul className='Areas-ul'>
              <li>Schedule optimization</li>
              <li>Shop Drawing Reviews</li>
              <li>RFI/Submittal Management</li>
              <li>Review Pay Requests</li>
              <li>Subcontractor management</li>
            </ul>
        </div>
        
        <div className="expertise-item">
            <Icono icon={Inge} titulo="Development Studies" />
            <ul className='Areas-ul'>
              <li>Maximize your resources.</li>
              <li>Take full advantage of opportunities.</li>
              <li>Start your projects successfully.</li>
              <li>Detailed land analysis.</li>
              <li>Site development.</li>
            </ul>
        </div>

        
        <div className="expertise-item">
            <Icono icon={Inge} titulo="Engineering Design" />
            <ul className='Areas-ul'>
              <li>Residential New Construction and Remodeling</li>
              <li> Shipping Container Homes Design and Plans</li>
              <li>Bridge Design</li>
              <li>Miscellaneous structures</li>
              <li>Retaining Walls</li>
              <li> Noise Walls</li>
            </ul>
        </div>
      </div>
      <div className="expertise-image">
        <img src={Ingenieros} alt="Engineers looking at plans" />
      </div>
    </div>
  );
};

export default AreasOfExpertise;
