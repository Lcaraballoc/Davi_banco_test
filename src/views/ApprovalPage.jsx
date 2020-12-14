import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <Button text="Finalizar" />
      </Link>
    </>
  );
};

export default ApprovalPage;
