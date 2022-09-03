import './Header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS } from '../../utils/constants';

const Header: React.FC = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__navbar">
          { windowWidth > BREAKPOINTS.mobile
            && <NavLink to="./schedule" className="header__link">Schedule</NavLink> }
          <div className="header__logo-wrapper">
            <div className="header__logo" />
          </div>
          { windowWidth > BREAKPOINTS.mobile
            && <NavLink to="./standing" className="header__link">Standing</NavLink> }
        </nav>
      </div>
    </header>
  );
};

export default Header;
