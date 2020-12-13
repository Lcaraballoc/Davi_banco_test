import React from 'react';
import FormInput from './FormInput';

import './styles/RequestForm.scss';

const RequestForm = () => {
  return (
    <form className="requestForm" action="">
      <div className="requestForm__card">
        <p>
          Indique los siguientes datos para continuar con la solicitud de su
          adelanto de pension:
        </p>

        <FormInput
          title="¿Cuál es el valor total de sus ingresos mensuales?"
          placeHolder="1.000.000 COP"
          type="text"
        />
        <FormInput
          title="¿Cuál es su actividad laboral actual?"
          placeHolder="Profesion"
          type="text"
        />
        <FormInput
          title="¿Cuál es el nombre de su empresa?"
          placeHolder="Empresa"
          type="text"
        />
        <FormInput
          title="¿Qué tipo de contrato tiene?"
          placeHolder="Indefinido"
          type="text"
        />
        <FormInput
          title="¿Cuál es su ciudad de residencia?"
          placeHolder="Bogota"
          type="text"
        />
        <FormInput
          title="¿Cuál es la direccion de residencia?"
          placeHolder="Bogota"
          type="text"
        />
        <FormInput
          title="Si esta recibiendo ayuda de un asesor del banco, ingrese el codigo del asesor"
          placeHolder="Bogota"
          type="text"
        />
      </div>
      <button type="submit">Continuar</button>
    </form>
  );
};

export default RequestForm;
