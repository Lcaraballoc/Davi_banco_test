import React from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Perk from './Perk';

import './styles/PerkList.scss';

const PerkList = () => {
  return (
    <div className="perkList">
      <div className="backButton">
        <IoIosArrowDropleftCircle />
        <span>Atras</span>
      </div>
      <Perk />
      <Perk />
      <Perk />
      <Perk />
    </div>
  );
};

export default PerkList;
