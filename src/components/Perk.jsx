import React from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import './styles/Perk.scss';

const Perk = () => {
  return (
    <div className="perk">
      <FaRegMoneyBillAlt className="perk__icon" />
      <p className="perk__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        totam fugiat animi illum repudiandae,
        {' '}
      </p>
    </div>
  );
};

export default Perk;
