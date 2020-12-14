import React, { useState } from 'react';
import FormInput from './FormInput';
import Button from './Button';

import './styles/RequestForm.scss';

const RequestForm = ({ handleModal }) => {
  const [user, setUser] = useState({
    incomes: '',
    activity: '',
    companyName: '',
    contract: '',
    city: '',
    address: '',
    adviser: '',
  });

  const isEnable =
    user.incomes.length > 0 &&
    user.activity.length > 0 &&
    user.companyName.length > 0 &&
    user.contract.length > 0 &&
    user.city.length > 0 &&
    user.address.length;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="requestForm" action="">
      <div className="requestForm__card">
        <p className="requestForm__card__header">
          Indique los siguientes datos para continuar con la solicitud de su
          adelanto de pension:
        </p>

        <FormInput
          title="¿Cuál es el valor total de sus ingresos mensuales?"
          type="text"
          name="incomes"
          id="incomes"
          onChange={handleChange}
        />
        <FormInput
          title="¿Cuál es su actividad laboral actual?"
          type="select"
          name="activity"
          id="activity"
          options={['Empleado', 'Comerciante', 'Desempleado']}
          onChange={handleChange}
        />
        <FormInput
          title="¿Cuál es el nombre de su empresa?"
          type="text"
          name="companyName"
          id="companyName"
          onChange={handleChange}
        />
        <FormInput
          title="¿Qué tipo de contrato tiene?"
          type="select"
          name="contract"
          id="contract"
          options={['Indefinido', 'A Termino Fijo', 'Independiente']}
          onChange={handleChange}
        />
        <FormInput
          title="¿Cuál es su ciudad de residencia?"
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
        />
        <FormInput
          title="¿Cuál es la direccion de residencia?"
          placeHolder="Carrera 9 # 116 -08, Bogotá"
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
        />
        <FormInput
          title="Si esta recibiendo ayuda de un asesor del banco, ingrese el codigo del asesor"
          placeHolder="Opcional"
          type="text"
          name="adviser"
          id="adviser"
          onChange={handleChange}
        />
      </div>
      <Button
        text="Continuar"
        disable={!isEnable}
        secondary={isEnable > 0 ? 'false' : 'true'}
        onClick={handleModal}
      />
    </form>
  );
};

export default RequestForm;
