/* Componente que renderiza varios tipo de input y label de acuerdo a los parametros recibidos  */

import React from 'react';

import './styles/FormInput.scss';

const FormInput = props => {
  const {
    title,
    placeHolder,
    type,
    id,
    name,
    options,
    onChange,
    icon,
    onClick,
  } = props;
  if (type === 'select') {
    return (
      <div className="formInput">
        <span>{title}</span>
        <select
          name={name}
          id={id}
          onChange={onChange}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {options.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="formInput">
      <span>{title}</span>
      <div className="formInput__container">
        <input
          placeholder={placeHolder}
          type={type || 'text'}
          name={name}
          id={id}
          onChange={onChange}
          required
        />
        <img
          className="formInput__container__icon"
          src={icon}
          alt=""
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default FormInput;
