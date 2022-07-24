import React from 'react';
import './Preloader.scss';

function Preloader(): JSX.Element {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__middle" />
      </div>
    </div>
  );
}

export default Preloader;
