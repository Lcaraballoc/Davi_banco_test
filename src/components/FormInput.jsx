import React from 'react';

import './styles/FormInput.scss';

const FormInput = props => {
  const { title, placeHolder, type, id, name, options, onChange } = props;
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
