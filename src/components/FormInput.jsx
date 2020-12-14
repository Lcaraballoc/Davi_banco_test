import React from 'react';

import './styles/FormInput.scss';

const FormInput = ({
  title,
  placeHolder,
  type,
  id,
  name,
  options,
  onChange,
}) => {
  if (type === 'select') {
    return (
      <div className="formInput">
        <span>{title}</span>
        <select name={name} id={id} onChange={onChange} required>
          <option value="" disabled selected>
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
      <input
        placeholder={placeHolder}
        type={type || 'text'}
        name={name}
        id={id}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
