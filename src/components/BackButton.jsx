import React from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

import './styles/BackButton.scss';

const BackButton = () => {
  return (
    <div className="backButton">
      <IoIosArrowDropleftCircle className="backButton__icon" />
      <span>Atras</span>
    </div>
  );
};

export default BackButton;
