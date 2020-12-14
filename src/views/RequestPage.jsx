import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import RequestForm from '../components/RequestForm';

const RequestPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Link to="/">
        <BackButton />
      </Link>
      <RequestForm />
    </>
  );
};

export default RequestPage;
