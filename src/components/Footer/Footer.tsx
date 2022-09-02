import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

const Footer: React.FC = () => {
  const foo = 'foo';
  return (
    <footer className="footer">
      <nav className="footer__navbar">
        <NavLink to="./schedule" className="footer__link">
          <div className="footer__icon footer__icon_schedule" />
          Schedule
        </NavLink>
        <NavLink to="./standing" className="footer__link">
          <div className="footer__icon footer__icon_standing" />
          Standing
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
