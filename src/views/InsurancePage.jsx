import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import InsuranceList from '../components/InsuranceList';

const InsurancePage = () => {
  return (
    <>
      <NavBar section="Prueba" subsection="Formulario" />
      <Link to="/requestForm">
        <BackButton />
      </Link>
      <InsuranceList />
    </>
  );
};

export default InsurancePage;
