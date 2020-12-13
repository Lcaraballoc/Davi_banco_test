import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import FamilyImage from '../assets/familia.png';

import './styles/InsuranceCard.scss';

const InsuranceCard = () => {
  const [componentStatus, showComponent] = useState(false);

  const toggleComponent = () => {
    if (componentStatus === true) showComponent(false);
    else showComponent(true);
  };

  return (
    <>
      <div className="insuranceCard" htmlFor="">
        <div className="insuranceCard__title">
          <input type="radio" />
          <div>
            <span className="insuranceCard__subtitle">Cobertura familiar</span>
            <span className="insuranceCard__price">106.200$</span>
          </div>
          <img src={FamilyImage} alt="" />
        </div>
        <button
          className="insuranceCard__button"
          onClick={toggleComponent}
          type="button"
        >
          <span>Mas Informacion</span>
          {componentStatus ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {componentStatus ? (
          <div className="insuranceCard__details">
            <ul>
              <li>Solo disponible para la ciudad de Bogota y Medellin</li>
              <li>Queda activo 5 dias despues de haberlo solicitado</li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default InsuranceCard;
