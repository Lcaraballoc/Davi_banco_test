import React from 'react';
import { RiMenuFill } from 'react-icons/ri';

import './styles/NavBar.scss';

const NavBar = () => {
  return (
    <div className="navBar">
      <h3>LUIS DANIEL CARABALLO</h3>
      <div className="navBar__row">
        <RiMenuFill className="navBar__row__icon" />
        <div className="navBar__row__details">
          <span>Prueba</span>
          <span>Beneficios y Caracteristicas</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;