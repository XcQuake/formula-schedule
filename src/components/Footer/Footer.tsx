import React from 'react';
import { NavLink } from 'react-router-dom';
import { URLS } from '../../utils/constants';

import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <nav className="footer__navbar">
      <NavLink to={URLS.schedule} className="footer__link">
        <div className="footer__icon footer__icon_schedule" />
        Schedule
      </NavLink>
      <NavLink to={URLS.standing} className="footer__link">
        <div className="footer__icon footer__icon_standing" />
        Standing
      </NavLink>
    </nav>
  </footer>
);

export default Footer;
