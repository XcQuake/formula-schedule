import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Popup.scss';

const Popup: React.FC = () => {
  const { closePopup } = useActions();
  const { isOpen, content } = useTypedSelector((state) => state.popup);

  return (
    <div className={`popup ${isOpen && 'popup_open'}`}>
      <div className="popup__wrapper">
        <button
          className="popup__close-button"
          aria-label="close"
          type="button"
          onClick={closePopup}
        />
        {content}
      </div>
    </div>
  );
};

export default Popup;
