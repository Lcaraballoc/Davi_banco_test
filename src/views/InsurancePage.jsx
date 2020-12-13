import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import InsuranceList from '../components/InsuranceList';
import Button from '../components/Button';

const InsurancePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <BackButton />
      <InsuranceList />
      <Button text="Continuar" />
    </>
  );
};

export default InsurancePage;
