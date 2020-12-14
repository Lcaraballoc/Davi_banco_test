/* Componente que se encarga de mostrar la lista de seguros y metodo de pago */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InsuranceCard from './InsuranceCard';
import Button from './Button';
import FamilyPack from '../assets/familyPack.png';
import PersonalPack from '../assets/personalPack.png';

import './styles/InsuranceList.scss';

const InsuranceList = () => {
  const [insurance, setInsurance] = useState({
    payment: '',
    typeInsurance: '',
  });

  const isEnable =
    insurance.payment.length > 0 && insurance.typeInsurance.length > 0;

  const handleChange = e => {
    setInsurance({
      ...insurance,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="insuranceList">
        <p>¿Cómo quiere pagar su seguro?</p>
        <div className="insuranceList__type">
          <label htmlFor="monthly">
            <input
              type="radio"
              name="payment"
              id="monthly"
              value="monthly"
              onChange={handleChange}
            />
            Mensual
          </label>
          <label htmlFor="yearly">
            <input
              type="radio"
              name="payment"
              id="yearly"
              value="yearly"
              onChange={handleChange}
            />
            Anual
          </label>
        </div>

        <p>Seleccione el tipo de cobertura que desea adquirir</p>
        <InsuranceCard
          title="Cobertura familiar"
          price="$106.200"
          name="typeInsurance"
          id="family"
          value="family"
          photo={FamilyPack}
          handleChange={handleChange}
        />
        <InsuranceCard
          title="Cobertura personal"
          price="$56.200"
          name="typeInsurance"
          id="personal"
          value="personal"
          photo={PersonalPack}
          handleChange={handleChange}
        />
      </div>

      <Link to="/approval">
        <Button
          text="Continuar"
          disable={!isEnable}
          secondary={isEnable > 0 ? 'false' : 'true'}
        />
      </Link>
    </>
  );
};

export default InsuranceList;
