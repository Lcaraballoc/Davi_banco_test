/* Componente contenedor que envuelve a otro componente para convertirlo en modal */

import React from 'react';

import './styles/ModalContainer.scss';

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="Modal__container">{children}</div>
    </div>
  );
};

export default Modal;
