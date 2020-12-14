import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';

import './styles/ConfirmationCard.scss';

const ConfirmationCard = () => {
  return (
    <div className="confirmationCard">
      <div className="confirmationCard__header">
        <p>Adelanto de pension y seguro</p>
      </div>
      <div className="confirmationCard__status">
        <div className="confirmationCard__status__title">
          <RiCheckboxCircleFill className="confirmationCard__status__icon" />
          <p>Los productos fueron aprobados satisfactoriamente</p>
        </div>
        <p>
          En un plazo maximo de <strong>5 dias calendario</strong>, se le
          informara por medio de un mensajede texto el estado de sus productos
        </p>
      </div>
      <div className="confirmationCard__details">
        <p className="confirmationCard__details__title">Adelanto de pension:</p>
        <p>Aprobado</p>
      </div>
      <div className="confirmationCard__details">
        <p className="confirmationCard__details__title">Tipo de Seguro:</p>
        <p>Tipo de seguro: Familiar - 106.200 mensual</p>
      </div>
      <div className="confirmationCard__details">
        <p className="confirmationCard__details__title">Fecha y hora:</p>
        <p>Fecha y hora: 29/01/2020, 09:41 a.m.</p>
      </div>
    </div>
  );
};

export default ConfirmationCard;
