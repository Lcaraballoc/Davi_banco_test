import React from 'react';
import FormInput from './FormInput';
import Button from './Button';

import './styles/RequestForm.scss';

const RequestForm = () => {
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
        />
        <FormInput
          title="¿Cuál es su actividad laboral actual?"
          type="select"
          options={['Empleado', 'Comerciante', 'Desempleado']}
        />
        <FormInput title="¿Cuál es el nombre de su empresa?" type="text" />
        <FormInput
          title="¿Qué tipo de contrato tiene?"
          type="select"
          options={['Indefinido', 'A Termino Fijo', 'Independiente']}
        />
        <FormInput title="¿Cuál es su ciudad de residencia?" type="text" />
        <FormInput
          title="¿Cuál es la direccion de residencia?"
          placeHolder="Carrera 9 # 116 -08, Bogotá"
          type="text"
        />
        <FormInput
          title="Si esta recibiendo ayuda de un asesor del banco, ingrese el codigo del asesor"
          placeHolder="Opcional"
          type="text"
        />
      </div>
      <Button text="Continuar" />
    </form>
  );
};

export default RequestForm;
