import React from 'react';
/* import ReactDOM from 'react-dom'; */

import './styles/ModalContainer.scss';

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="Modal__container">{children}</div>
    </div>
  );
};

export default Modal;
