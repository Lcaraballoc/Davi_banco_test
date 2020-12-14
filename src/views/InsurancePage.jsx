import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/requestForm">
        <BackButton />
      </Link>
      <InsuranceList />
      <Button text="Continuar" />
    </>
  );
};

export default InsurancePage;
