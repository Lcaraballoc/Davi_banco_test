import React from 'react';

import './styles/FormInput.scss';

const FormInput = ({ title, placeHolder, type }) => {
  return (
    <div className="formInput">
      <span>{title || 'Prueba'}</span>
      <input placeholder={placeHolder || 'Prueba'} type={type || 'text'} />
    </div>
  );
};

export default FormInput;
