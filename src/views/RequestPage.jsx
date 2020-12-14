import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BackButton from '../components/BackButton';
import RequestForm from '../components/RequestForm';
import TermsModal from '../components/TermsModal';

const RequestPage = () => {
  const [modalState, setState] = useState(false);

  const handleModal = () => {
    if (modalState === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <>
      <NavBar section="Prueba" subsection="Formulario" />
      <Link to="/">
        <BackButton />
      </Link>
      <RequestForm handleModal={handleModal} />
      {modalState && <TermsModal handleModal={handleModal} />}
    </>
  );
};

export default RequestPage;
