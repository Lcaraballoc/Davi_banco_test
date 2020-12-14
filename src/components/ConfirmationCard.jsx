/* Componente que muestra una Card con la confirmacion de la solicitud */

import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import SmallInfoCard from './SmallInfoCard';

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

      <SmallInfoCard title="Adelanto de pension:" subtitle="Aprobado" />
      <SmallInfoCard
        title="Tipo de Seguro:"
        subtitle="Familiar - 106.200 mensual"
      />
      <SmallInfoCard title="Fecha y hora:" subtitle="29/01/2020, 09:41 a.m." />
    </div>
  );
};

export default ConfirmationCard;
