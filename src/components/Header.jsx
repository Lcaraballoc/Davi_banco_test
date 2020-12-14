import React from 'react';
import { Link } from 'react-router-dom';
import { RiCloseCircleFill } from 'react-icons/ri';
import Logo from '../assets/logo.png';

import './styles/Header.scss';

/* const logoUrl =
  'https://www.davivienda.com/PersonasDaviviendaNewTheme/resources/img/logos/logo-davivienda.png'; */

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <figure className="header__logo">
          <img src={Logo} alt="Logo Davivienda" />
        </figure>
      </Link>
      <RiCloseCircleFill className="header__closeIcon" />
    </div>
  );
};

export default Header;
