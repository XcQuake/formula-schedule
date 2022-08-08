import React, { useRef } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Popup.scss';

const Popup: React.FC = () => {
  const { closePopup } = useActions();
  const { isOpen, content } = useTypedSelector((state) => state.popup);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (evt: React.MouseEvent<HTMLDivElement>): void => {
    const target = evt.target as HTMLDivElement;
    if (!ref.current!.contains(target)) {
      closePopup();
    }
  };

  return (
    <div
      className={`popup ${isOpen && 'popup_open'}`}
      onClick={(evt) => handleClickOutside(evt)}
      role="button"
      tabIndex={0}
    >
      <div className="popup__wrapper" ref={ref}>
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
