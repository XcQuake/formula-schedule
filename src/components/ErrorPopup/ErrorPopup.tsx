import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './ErrorPopup.scss';
import { useActions } from '../../hooks/useActions';
import { RootState } from '../../state';

interface Props {
  isOpen: boolean,
  message: string | null,
}

const ErrorPopup: React.FC<Props> = ({
  isOpen,
  message,
}) => {
  const { closeErrorPopup } = useActions();
  setTimeout(() => {
    closeErrorPopup();
  }, 3000);

  return (
    <div className={isOpen ? 'error-popup error-popup_open' : 'error-popup'}>
      <button
        className="error-popup__button"
        type="button"
        aria-label="close"
        onClick={() => closeErrorPopup()}
      />
      <i className="error-popup__icon" />
      <p className="error-popup__message">
        {message || 'An error occured while loading data'}
      </p>
    </div>
  );
};

const mapStateToProps = (state: RootState): Props => ({
  isOpen: state.errorPopup.isOpen,
  message: state.errorPopup.message,
});

export default connect(mapStateToProps)(ErrorPopup);
