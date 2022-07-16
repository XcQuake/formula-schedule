import './Header.scss';
import React, { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo" />
      </div>
    </header>
  );
}
