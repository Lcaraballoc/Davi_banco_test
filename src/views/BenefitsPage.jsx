import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import PerksList from '../components/PerksList';
import Button from '../components/Button';

import './styles/BenefitsPage.scss';

const BenefitsPage = () => {
  return (
    <>
      <NavBar section="Prueba" subsection="Beneficios y Características" />
      <BackButton />
      <PerksList />
      <p className="benefitsPage__footer">
        Este producto cuenta con el seguro de depositos 
        {' '}
        <strong>FOGAFIN</strong>
      </p>
      <Link to="/requestForm">
        <Button text="Continuar" />
      </Link>
    </>
  );
};

export default BenefitsPage;
