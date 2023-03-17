import React from 'react';
import { NavLink } from 'react-router-dom';
import { URLS } from '../../utils/constants';

import './Footer.scss';

const Footer: React.FC = () => {
  const linkClassname = (
    { isActive }: {isActive: boolean, isPending: boolean},
  ): string => {
    if (isActive) return 'footer__link active';
    return 'footer__link';
  };

  return (
    <footer className="footer">
      <nav className="footer__navbar">
        <NavLink
          to={URLS.schedule}
          className={linkClassname}
        >
          Schedule
        </NavLink>
        <NavLink
          to={URLS.standing}
          className={linkClassname}
        >
          Standing
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
