import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import './styles/MoreInfoButton.scss';

const MoreInfoButton = ({ onClick, componentStatus }) => {
  return (
    <>
      <button className="moreInfoButton" onClick={onClick} type="button">
        <span>Ver más información</span>
        {componentStatus ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </>
  );
};

export default MoreInfoButton;
