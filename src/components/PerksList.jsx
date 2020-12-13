import React from 'react';
import Perk from './Perk';
import BackButton from './BackButton';

import './styles/PerkList.scss';

const PerkList = () => {
  return (
    <div className="perkList">
      <BackButton />
      <Perk />
      <Perk />
      <Perk />
      <Perk />
    </div>
  );
};

export default PerkList;
