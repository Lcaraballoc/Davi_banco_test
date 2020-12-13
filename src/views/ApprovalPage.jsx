import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ConfirmationCard from '../components/ConfirmationCard';
import Button from '../components/Button';

const ApprovalPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ConfirmationCard />
      <Button text="Finalizar" />
    </>
  );
};

export default ApprovalPage;
