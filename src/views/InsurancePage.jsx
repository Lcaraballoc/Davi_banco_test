import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import InsuranceList from '../components/InsuranceList';

const InsurancePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Link to="/requestForm">
        <BackButton />
      </Link>
      <InsuranceList />
    </>
  );
};

export default InsurancePage;
