import React, { useState } from 'react';
import MoreInfoButton from './MoreInfoButton';

import './styles/InsuranceCard.scss';

const InsuranceCard = props => {
  const { title, price, name, id, value, handleChange, photo } = props;

  const [componentStatus, showComponent] = useState(false);

  const toggleComponent = () => {
    if (componentStatus === true) showComponent(false);
    else showComponent(true);
  };

  return (
    <>
      <div className="insuranceCard" htmlFor="">
        <label className="insuranceCard__title" htmlFor={id}>
          <input
            type="radio"
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
          />
          <div>
            <span className="insuranceCard__subtitle">{title}</span>
            <span className="insuranceCard__price">{price}</span>
          </div>
          <img src={photo} alt="" />
        </label>

        <MoreInfoButton
          text="Ver más informacion"
          onClick={toggleComponent}
          componentStatus={componentStatus}
        />

        {componentStatus && (
          <div className="insuranceCard__details">
            <ul>
              <li>Solo disponible para la ciudad de Bogota y Medellin</li>
              <li>Queda activo 5 dias despues de haberlo solicitado</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default InsuranceCard;
