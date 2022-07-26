import './Header.scss';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__navbar">
          <NavLink to="./schedule" className="header__link">Schedule</NavLink>
          <div className="header__logo-wrapper">
            <div className="header__logo" />
          </div>
          <NavLink to="./standing" className="header__link">Standing</NavLink>
        </nav>
      </div>
    </header>
  );
}
