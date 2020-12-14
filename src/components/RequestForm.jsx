/* Componente que muestra el formulario para solicitud de la pension */

import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import EditIcon from '../assets/editIcon.png';
import QuestionIcon from '../assets/questionIcon.png';
import HelpCard from './HelpCard';

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

  const [component, setComponent] = useState();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (component === false) {
      setComponent(true);
    } else {
      setComponent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleClick);
  }, []);

  return (
    <form className="requestForm" action="">
      <div className="requestForm__card">
        <p className="requestForm__card__header">
          Indique los siguientes datos para continuar con la solicitud de su
          adelanto de pensión:
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
          title="¿Cuál es la dirección de residencia?"
          placeHolder="Carrera 9 # 116 -08, Bogotá"
          type="text"
          name="address"
          id="address"
          icon={EditIcon}
          onChange={handleChange}
        />
        <FormInput
          title="Si está recibiendo ayuda de un asesor del Banco, ingrese el código del asesor:"
          placeHolder="Opcional"
          type="text"
          name="adviser"
          id="adviser"
          icon={QuestionIcon}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      <Button
        text="Continuar"
        disable={!isEnable}
        secondary={isEnable > 0 ? 'false' : 'true'}
        onClick={handleModal}
      />
      {component && (
        <HelpCard content="Si le prestaron asesoría, ingrese el código del asesor comercial que lo está ayudando con esta solicitud; de lo contrario, no diligencie este espacio." />
      )}
    </form>
  );
};

export default RequestForm;
