import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import RequestForm from '../components/RequestForm';

const RequestPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <BackButton />
      <RequestForm />
    </>
  );
};

export default RequestPage;
