import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PerksList from '../components/PerksList';

import './styles/BenefitsPage.scss';

const BenefitsPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <PerksList />
      <p>Este producto cuenta con el seguro de depositos FOGAFIN</p>
      <button type="submit">Continuar</button>
    </>
  );
};

export default BenefitsPage;
