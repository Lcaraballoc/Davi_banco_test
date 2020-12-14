import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ConfirmationCard from '../components/ConfirmationCard';
import Button from '../components/Button';

const ApprovalPage = () => {
  return (
    <>
      <NavBar section="Compra de Cartera Móvil" subsection="Resultado" />
      <ConfirmationCard />
      <Link to="/">
        <Button text="Finalizar" />
      </Link>
    </>
  );
};

export default ApprovalPage;
