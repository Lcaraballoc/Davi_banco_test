/* Componente que muestra los botones de navegacion */

import React from 'react';
import { RiMenuFill } from 'react-icons/ri';

import './styles/NavBar.scss';

const NavBar = ({ section, subsection }) => {
  return (
    <div className="navBar">
      <h3>LUIS DANIEL CARABALLO</h3>
      <div className="navBar__row">
        <RiMenuFill className="navBar__row__icon" />
        <div className="navBar__row__details">
          <span className="navBar__row__section">{section}</span>
          <span className="navBar__row__subSection">{subsection}</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
