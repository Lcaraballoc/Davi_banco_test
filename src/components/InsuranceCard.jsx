import React from 'react';
import FamilyImage from '../assets/familia.png';

import './styles/InsuranceCard.scss';

const InsuranceCard = () => {
  return (
    <>
      <div className="insuranceCard" htmlFor="">
        <div className="insuranceCard__title">
          <input type="radio" />
          <div>
            <span>Cobertura familiar</span>
            <span>106.200$</span>
          </div>
          <img src={FamilyImage} alt="" />
        </div>
        <div className="insuranceCard__button">
          <span>Mas Informacion</span>
        </div>
        <div className="insuranceCard__details">
          <ul>
            <li>Solo disponible para la ciudad de Bogota y Medellin</li>
            <li>Queda activo 5 dias despues de haberlo solicitado</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InsuranceCard;
