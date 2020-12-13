import React from 'react';
import Perk from './Perk';
import Icon from '../assets/Icon2.png';
import Icon2 from '../assets/Icon4.png';
import Icon3 from '../assets/Icon1.png';
import Icon4 from '../assets/Icon3.png';

import './styles/PerkList.scss';

const PerkList = () => {
  return (
    <div className="perkList">
      <Perk
        icon={Icon}
        content="Reciba el pago de su pensión y otros depósitos en su cuenta."
      />
      <Perk
        icon={Icon2}
        content="Programe de forma automática sus transferencias, el pago de productos y servicios."
      />
      <Perk
        icon={Icon3}
        content="Podrá obtener beneficios con aliados y tasas especiales en créditos para pensionados."
      />
      <Perk
        icon={Icon4}
        content="Podrá acceder a un cupo de adelanto de pensión y a los productos móviles que le ofrece Davivienda."
      />
    </div>
  );
};

export default PerkList;
