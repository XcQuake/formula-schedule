import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Stats.scss';

const Stats: React.FC = () => {
  const history = useHistory();
  const { closePopup } = useActions();
  const { isOpen, content } = useTypedSelector((state) => state.popup);

  const handleClose = (): void => {
    history.goBack();
    closePopup();
  };

  useEffect(() => {
    if (!content) {
      history.goBack();
    }
  }, []);

  return (
    <div
      className={`popup ${isOpen && 'popup_open'}`}
      role="button"
    >
      <button
        className="popup__close-button"
        aria-label="close"
        type="button"
        onClick={handleClose}
      />
      {content}
    </div>
  );
};

export default Stats;
