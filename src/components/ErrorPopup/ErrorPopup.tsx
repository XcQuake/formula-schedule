import React, { useState } from 'react';
import './ErrorPopup.scss';

const ErrorPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={isOpen ? 'error-popup error-popup_open' : 'error-popup'}>
      <button
        className="error-popup__button"
        type="button"
        aria-label="close"
      />
      <i className="error-popup__icon" />
      <p className="error-popup__message">
        An error occured while loading data
      </p>
    </div>
  );
};

export default ErrorPopup;
