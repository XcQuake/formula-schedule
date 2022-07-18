import React, { useState } from 'react';
import './ToggleButton.scss';

interface buttonProps {
  labels: {
    firstState: string,
    secondState: string,
  }
  onClick: (id: string) => void;
}

const ToggleButton: React.FC<buttonProps> = ({ labels, onClick }) => {
  const [selected, setSelected] = useState(labels.firstState);
  const handleClickButton = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(evt.target.id);
    onClick(evt.target.id);
  };

  return (
    <form className="toggle-button">
      <input
        type="radio"
        className="toggle-button__radio"
        name="options"
        id={labels.firstState}
        autoComplete="off"
        onChange={handleClickButton}
        checked={selected === labels.firstState}
      />
      <label
        className="toggle-button__label"
        htmlFor={labels.firstState}
      >
        {labels.firstState}
      </label>
      <input
        type="radio"
        className="toggle-button__radio"
        name="options"
        id={labels.secondState}
        autoComplete="off"
        onChange={handleClickButton}
        checked={selected === labels.secondState}
      />
      <label
        className="toggle-button__label"
        htmlFor={labels.secondState}
      >
        {labels.secondState}
      </label>
    </form>
  );
};

export default ToggleButton;
