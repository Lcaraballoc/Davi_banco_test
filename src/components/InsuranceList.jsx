import React from 'react';
import InsuranceCard from './InsuranceCard';

import './styles/InsuranceList.scss';

const InsuranceList = () => {
  return (
    <div className="insuranceList">
      <p>¿Como quiere pagar su seguro?</p>
      <div className="insuranceList__type">
        <label htmlFor="monthly">
          <input type="radio" name="time" id="monthly" />
          Mensual
        </label>
        <label htmlFor="yearly">
          <input type="radio" name="time" id="yearly" />
          Anual
        </label>
      </div>
      <p>Seleccione el tipo de cobertura que desea adquirir</p>
      <InsuranceCard />
      <InsuranceCard />
    </div>
  );
};

export default InsuranceList;
