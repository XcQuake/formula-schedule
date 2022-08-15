/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import './Dropdown.scss';

interface Props {
  options: string[];
}

const Dropdown: React.FC<Props> = ({ options }) => {
  const [selected, setSelected] = useState<string>();
  const [isOpen, selectIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <label className="dropdown__label">Year</label>
        <button
          className="dropdown__selected"
          onClick={() => selectIsOpen(!isOpen)}
          type="button"
        >
          {selected}
          <i className="dropdown__icon" />
        </button>
      </div>
      <ul
        className={`dropdown__select ${isOpen ? 'dropdown__select_open' : ''}`}
      >
        {
          options.map((option) => (
            <li
              className="dropdown__option"
              key={option}
              onClick={() => setSelected(option)}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Dropdown;
