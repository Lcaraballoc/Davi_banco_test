import React from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

import './styles/Header.scss';

const logoUrl =
  'https://www.davivienda.com/PersonasDaviviendaNewTheme/resources/img/logos/logo-davivienda.png';

const Header = () => {
  return (
    <div className="header">
      <figure>
        <img className="header__logo" src={logoUrl} alt="Logo Davivienda" />
      </figure>
      <RiCloseCircleFill className="header__closeIcon" />
    </div>
  );
};

export default Header;
