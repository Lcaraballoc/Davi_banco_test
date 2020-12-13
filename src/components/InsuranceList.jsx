import React from 'react';
import InsuranceCard from './InsuranceCard';

import './styles/InsuranceList.scss';

const InsuranceList = () => {
  return (
    <div className="insuranceList">
      <p>¿Como quiere pagar su seguro?</p>
      <div>
        <label htmlFor="monthly">
          <input type="radio" name="time" id="monthly" />
          Mensual
        </label>
        <label htmlFor="yearly">
          <input type="radio" name="time" id="yearly" />
          Anual
        </label>
        <p>Seleccione el tipo de cobertura que desea adquirir</p>
        <InsuranceCard />
        <InsuranceCard />
      </div>
    </div>
  );
};

export default InsuranceList;
