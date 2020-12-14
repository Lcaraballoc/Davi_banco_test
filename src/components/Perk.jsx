import React from 'react';
/* import { FaRegMoneyBillAlt } from 'react-icons/fa'; */

import './styles/Perk.scss';

const Perk = ({ icon, content }) => {
  return (
    <div className="perk">
      <img src={icon} alt="" className="perk__icon" />
      <p className="perk__description">{content} </p>
    </div>
  );
};

export default Perk;
