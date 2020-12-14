import React from 'react';

import './styles/Button.scss';

const Button = ({ text, submit, disable, secondary, onClick }) => {
  if (secondary === 'true') {
    return (
      <button
        className="button__secondary"
        type={submit ? 'submit' : 'button'}
        disabled={disable}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className="button"
      type={submit ? 'submit' : 'button'}
      disabled={disable}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
