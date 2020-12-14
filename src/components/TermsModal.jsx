/* Componente que muestra un modal donde se da la opcion de tomar un seguro */

import React from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from './ModalContainer';
import FamilyImage from '../assets/familia.png';
import Button from './Button';

import './styles/TermsModal.scss';

const TermsModal = ({ handleModal }) => {
  return (
    <ModalContainer>
      <div className="termsModal">
        <div className="termsModal__title">
          <img src={FamilyImage} alt="" />
          <h3>Seguro de Vida Online</h3>
        </div>
        <hr />

        <div className="termsModal__details">
          <h4>¿Quiere proteger a su familia?</h4>
          <p>Cubra los gastos de su hogar en caso de:</p>
          <ul>
            <li>Muerte por cualquier causa</li>
            <li>Incapacidad total y permanente</li>
          </ul>
        </div>

        <div className="termsModal__description">
          <a href="/">Ver Terminos y Condiciones</a>
        </div>

        <div className="termsModal__buttons">
          <Button text="Omitir" secondary="true" />
          <Link to="/insurance">
            <Button text="Adquirir" onClick={handleModal} />
          </Link>
        </div>

        <p className="termsModal__footer">
          Este seguro es expedido por <strong>Seguros Bolivar S.A</strong>
        </p>
      </div>
    </ModalContainer>
  );
};

export default TermsModal;
