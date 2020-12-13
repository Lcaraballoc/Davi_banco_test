import React from 'react';

import './styles/FormInput.scss';

const FormInput = ({ title, placeHolder, type, options }) => {
  if (type === 'select') {
    return (
      <div className="formInput">
        <span>{title}</span>
        <select name="" id="">
          <option disabled selected>
            Selecciona una opción
          </option>
          {options.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="formInput">
      <span>{title || 'Prueba'}</span>
      <input placeholder={placeHolder} type={type || 'text'} />
    </div>
  );
};

export default FormInput;
