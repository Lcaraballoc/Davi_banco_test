import React from 'react';

import './styles/Button.scss';

const Button = ({ text }) => {
  return (
    <button className="button" type="button">
      {text}
    </button>
  );
};

export default Button;
