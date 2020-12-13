import React from 'react';
import FamilyImage from '../assets/familia.png';

import './styles/TermsModal.scss';

const TermsModal = () => {
  return (
    <div className="termsModal">
      <div className="termsModal__title">
        <img src={FamilyImage} alt="" />
        <h3>Seguro de Vida Online</h3>
      </div>
      <hr />
      <h4>¿Quiere proteger a su familia?</h4>
      <p>Cubra los gastos de su hogar en caso de:</p>
      <ul>
        <li>Muerte por cualquier causa</li>
        <li>Incapacidad total y permanente</li>
      </ul>
      <div className="termsModal__description">
        <a href="/">Ver Terminos y Condiciones</a>
      </div>
      <div className="termsModal__buttons">
        <button type="button">Omitir</button>
        <button type="button">Adquirir</button>
      </div>
      <p className="termsModal__footer">
        Este seguro es expedido por Seguros Bolivar S.A
      </p>
    </div>
  );
};

export default TermsModal;
