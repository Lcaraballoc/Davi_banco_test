/*  Componente que redirige a la vista anterior a traves de un boton */

import React from 'react';
import BackIcon from '../assets/atras.png';

import './styles/BackButton.scss';

const BackButton = () => {
  return (
    <div className="backButton">
      <img src={BackIcon} alt="" className="backButton__icon" />
      <span>Atrás</span>
    </div>
  );
};

export default BackButton;
