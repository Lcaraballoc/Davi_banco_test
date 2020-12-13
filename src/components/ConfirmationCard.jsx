import React from 'react';

import './styles/ConfirmationCard.scss';

const ConfirmationCard = () => {
  return (
    <div className="confirmationCard">
      <div className="confirmationCard__header">
        <p>Adelanto de pension y seguro</p>
      </div>
      <div className="confirmationCard__status">
        <div className="confirmationCard__status__title">
          <span>Icon</span>
          <p>Los productos fueron aprobados satisfactoriamente</p>
        </div>
        <p>
          En un plazo maximo de 5 dias calendario, se le informara por medio de
          un mensajede texto el estado de sus productos
        </p>
      </div>
      <div className="confirmationCard__details">
        <p>Adelanto de pension:</p>
        <p>Aprobado</p>
      </div>
      <div className="confirmationCard__details">
        <p>Tipo de Seguro:</p>
        <p>Aprobado</p>
      </div>
      <div className="confirmationCard__details">
        <p>Fecha y hora:</p>
        <p>Aprobado</p>
      </div>
    </div>
  );
};

export default ConfirmationCard;
